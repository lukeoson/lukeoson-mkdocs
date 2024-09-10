---
title: Training
icon: material/eye-settings-outline
---

# Introduction

Alas, my Company has a preference for Allied Telesis, as a cheaper alternative. 

Value Engineering, so they say.

So I have to learn it.

!!! tip "Manager Friendly"

    I have touched Allied Telesis before. My former employer had a lucky dip smattering of Allied Telesis in the Network i would occasionally stumble upon. I remember them well because they were known by the slang **manager friendly** due to the default credentials being `manager:friend`! that chimed with the lower price point... to the chagrin of the Network Team.


# Course Details

The CAP/ENT training course provides knowledge of the AlliedWare Plus operating system.

The course ends with an open-book multiple-choice exam.

> Monday 5th February 2024 - Wednesday 7th February 2024

* Day 1:  9.30am – 5pm
* Day 2:  9.30am – 5pm
* Day 3:  9.30am – 5pm

# Course Content

- [x] Advanced STP
- [x] Loop protection, Thrash Limiting, Cable locator
- [x] Advanced VLAN
- [x] EPSR
- [x] Access Lists
- [x] Routing
- [x] RIP
- [x] OSPF
- [x] VRRP
- [x] AMF


# Course Lab

A remote lab is provided for the course. You SHH to a Linux box and onward to the console of the Allied Telesis Firewall & Switches.

``` python linenums="1" title="No Stack" hl_lines="4 5 6"
Host AT-LAB-FW
    Hostname uk-1.training.alliedtelesis.com
    User training41
    # Welcome 4 (1)
    # manager   (2)
    # friend    (3)

Host AT-LAB-530-ONE
    Hostname uk-1.training.alliedtelesis.com
    User training42

Host AT-LAB-530-TWO
    Hostname uk-1.training.alliedtelesis.com
    User training43
```

1. Password for SSH connection
2. Username for Device login
3. Password for Device login

??? tip "lsof -i tcp:22"

    Use `lsof -i tcp:22` to see the SSH sessions to the lab devices. In our case we have x2 per lab device as we are passing a linux jump box to reach the device console.


    The command `lsof -i tcp:22` is used in Unix-like operating systems to **list open files** and network connections. The components of this command (lsof, -i, tcp:22) each have specific meanings:

    `lsof`: This stands for "**List Open Files**". lsof is a command-line utility that provides information about files that are opened by processes. In Unix and Linux systems, almost everything is treated as a file, including physical devices, directories, and network sockets.

    `-i`: This option tells lsof to show network connections. When used without any additional parameters, -i lists all network files. However, it can be further narrowed down with additional parameters like protocol type (TCP or UDP) and port numbers.

    `tcp:22`: This further filters the lsof output to show only TCP connections (due to tcp) that are using port 22. Port 22 is the default port for SSH (Secure Shell) connections, which are used for securely accessing remote machines.

```python
➜  ~ lsof -i tcp:22

COMMAND   PID     USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
ssh     94715 lukeoson    4u  IPv4 0x52af948b88c31015      0t0  TCP 192.168.1.108:61894->194.73.86.54:ssh (ESTABLISHED)
ssh     94715 lukeoson    5u  IPv4 0x52af948b88c31015      0t0  TCP 192.168.1.108:61894->194.73.86.54:ssh (ESTABLISHED)
ssh     94838 lukeoson    4u  IPv4 0x52af948b8986327d      0t0  TCP 192.168.1.108:61928->194.73.86.54:ssh (ESTABLISHED)
ssh     94838 lukeoson    5u  IPv4 0x52af948b8986327d      0t0  TCP 192.168.1.108:61928->194.73.86.54:ssh (ESTABLISHED)
ssh     94938 lukeoson    4u  IPv4 0x52af948b8862e705      0t0  TCP 192.168.1.108:61965->194.73.86.54:ssh (ESTABLISHED)
ssh     94938 lukeoson    5u  IPv4 0x52af948b8862e705      0t0  TCP 192.168.1.108:61965->194.73.86.54:ssh (ESTABLISHED)
```

And you get a topology like this:

![Lab Device Access](../assets/images/Allied-Telesis-Lab.drawio.svg){ .center }

# AT-TRN-CAP/ENT Training

## Stacking

The first thing we did was unstack the switches. Couple of reboots required to remove the provisioned devices and renumber to 1. This exercise was to prepare the lab for the content to follow.  

``` python linenums="1" title="No Stack" hl_lines="1 2 5"

awplus(config)#no stack 1 enable
awplus(config)#no switch 2 provision
awplus(config)#end
awplus#write memory
awplus#reload  # (1)


```

1.  :material-code-array: Remove Stacking configuration and reboot the device.

With the devices unstacked we can proceed to the course content.

## Spanning Tree 

The first module covered some Spanning Tree features. 

- [x] Root Guard
- [x] BPDU Guard
- [x] Loop Detection

### Root Guard

* Root Guard is a feature that prevents a port from becoming a root port.
* It is used to enforce the root bridge placement in the network.
* If a port is configured with root guard and it receives a superior BPDU, the port is placed into a root-inconsistent state.
* The port is placed into a root-inconsistent state and is effectively shut down.

``` py linenums="1" title="Root Guard" hl_lines="3"

awplus# configure terminal
awplus(config)# interface port1.0.1
awplus(config-if)# spanning-tree guard root # (1)

```

1.  :material-code-array: The Root Guard feature makes sure that the port on which it is enabled is a         designated port. If the Root Guard enabled port receives a superior BPDU, it goes to a Listening state (for STP) or discarding state (for RSTP and MSTP). This root−inconsistent state is effectively equal to a listening state.

Verify with `show spanning-tree brief`.

### BPDU Guard

* BPDU Guard is a feature that is used to enforce the STP domain borders.
* If a port is configured with BPDU guard and it receives a BPDU, the port is placed into an error-disabled state.
* The port is placed into an error-disabled state and is effectively shut down.

``` py linenums="1" title="BPDU Guard" hl_lines="3 4"

awplus# configure terminal
awplus(config)# interface port1.1.2
awplus(config)# spanning-tree portfast
awplus(config-if)# spanning-tree portfast bpdu-guard enable  (1)

```

1. :material-code-array: spanning-tree portfast bpdu-guard
    - the port will block all traffic (BPDUs and user data) - the STP blocking state, if it starts receiving BPDUs.

``` py linenums="1" title="Error Disabled Timeout" hl_lines="2 3"

awplus# configure terminal
awplus(config)# spanning-tree errdisable-timeout enable      (1)
awplus(config)# spanning-tree errdisable-timeout interval 50 (2)

```

1. Usage:
    - the BPDU guard feature shuts down the port on receiving a BPDU on a BPDU-guard enabled port. 
    - this command associates a timer with the feature such that the port is re-enabled without manual intervention after a set interval.

2. specifies the time interval after which a port is brought back up when it has been disabled by the BPDU guard feature
    - valid in Global Configuration mode, for RSTP or MSTP
    - the interval in seconds is <10-1000000>

### Loop Detection

* Loop detection is a protection mechanism to Detects loops within a network segment. It is applied to the port or to the VLAN 
* Actions Include:
    * Block all traffic on the port (or aggregated link) and take down the link.
    * Block all traffic on the port (or aggregated link) but keep the link in the up state.
    * Block all traffic on a vlan (enables ingress filtering =default action)
    * Take no action, but log the details
    * Take no action

``` py linenums="1" title="Loop Detection" hl_lines="1-3"
awplus(config)# loop-protection loop-detect ldf-interval 5 (1)
awplus(config-if)# loop-protection action link-down (2)
awplus(config-if)# loop-protection timeout 10 (3)

```

1. Enables the loop-detect mechanism and generates loop-detect frames once every 5 seconds
2. Disables the interface and brings down the link
3. Configures a loop protection action timeout of 10 seconds

!!! warning 
    Always remove `loop-protection loop-detect ldf-interval 5` when enabling EPSR.

### Thrash Limiting

* MAC address thrashing occurs when MAC addresses move rapidly between one or more ports or trunks, for example, due to a network loop.
* Thrash limiting enables you to apply actions to a port when thrashing is detected.
* It is supported on all port types and also on aggregated ports.
* When a MAC address is thrashing between two ports, one of these ports (the first to cross its thrashing threshold) is disabled.
* All other ports on the device will then have their threshold counters reset.

```
2017 Feb 24 00:58:39 user.warning RACK1 HSL[877]: Thrash-limiting: Disabled learning on port2.0.26 by 0202.0ayy.xxxx on VLAN 20
2017 Feb 24 00:58:39 user.warning RACK1 HSL[877]: Thrash-limiting: Disabled learning on port1.0.25 by 0202.0ayy.xxxx on VLAN 2
2017 Feb 24 00:58:39 user.warning RACK1 HSL[877]: Thrash-limiting: Disabled learning on sa50 by 0202.0ayy.xxxx on VLAN 2

```

## Advanced VLAN
## ESPR - diable loop prevention!
## ACL


## LLDP

* LLDP is a vendor-neutral link layer protocol in the Internet Protocol Suite used by network devices for advertising their identity, capabilities, and neighbors on an IEEE 802 local area network, usually wired Ethernet.
    * transmit information about itself to neighbors
    * receive device information from neighbors
    * store and manage information in an LLDP MIB
    * TLV (Type, Length, Value) format
        * Mandatory: Chassis ID, PortID, TTL TLV, End of LLDPDU TLV
        * Optional: Port Description, System Name, System Description, System Capabilities, Management Address, etc.
    * LLDPPDU (LLDP Protocol Data Unit)

#### LLDP & Protocol Interaction 

Spanning tree  
* Ports blocked by a spanning tree protocol can still transmit and receive LLDP advertisements.
802.1x  
* Ports blocked by 802.1x port authorization cannot transmit or receive LLDP advertisements. If LLDP has stored information for a neighbor on the port before it was blocked, this information will eventually time out and be discarded.
VLAN tagging  
* LLDP packets are untagged; they do not contain 802.1Q header information with VLAN identifier and priority tagging.
Virtual Chassis Stacking (VCStack) resiliency link  
* When a port is configured as a VCStack resiliency link port, LLDP does not operate on the port; LLDP neither transmits nor receives advertisements, and any LLDP configuration and data stored for the port, including counters, is discarded.
Mirror ports  
* LLDP does not operate on mirror analyzer ports



``` py linenums="1" title="LLDP" hl_lines="1 2"











# AT-TRN-CAP/ENT-EXAM








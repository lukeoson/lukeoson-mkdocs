### What is the OSI Model?

- [x] What is [The OSI Model by Cloudflare](https://www.cloudflare.com/en-gb/learning/ddos/glossary/open-systems-interconnection-model-osi/) ?

- [x] The [Open Systems Interconnect Model](https://www.iso.org/ics/35.100/x/) from the [International Organization for Standardization](International Organization for Standardization)

!!! note
    The OSI model was first defined in raw form in Washington, D.C., in February 1978 by French software engineer Hubert Zimmermann, and the refined but still draft standard was published by the ISO in 1980.

    **It is a reference model.** Ultimately, the TCP/IP model is the more practical model for today's networks, but the OSI model is still used to describe network layers and protocols. The **US DoD invented the TCP/IP model** in the 1970s, and it was used to build the internet. The OSI model was created in the 1980s by the International Organization for Standardization (ISO), and it was designed to be an abstract model for describing network protocols, not a practical model for building networks.

| Layer Number | Layer Name      | Function                                                                 | Examples                              |
|--------------|-----------------|--------------------------------------------------------------------------|---------------------------------------|
| 7            | Application     | Provides network services directly to applications                       | HTTP, FTP, SMTP                       |
| 6            | Presentation    | Translates data between the network and application formats              | SSL, TLS, JPEG, MPEG                  |
| 5            | Session         | Manages sessions between applications                                    | NetBIOS, RPC                          |
| 4            | Transport       | Provides reliable data transfer                                          | TCP, UDP                              |
| 3            | Network         | Handles addressing and routing of data packets                           | IP, ICMP, IPSec                       |
| 2            | Data Link       | Transfers data between network and physical layers                       | Ethernet, PPP, Switch, Bridge         |
| 1            | Physical        | Deals with the physical connection to the network, data transmission    | Cables, Hubs, Repeaters, Network Cards|




### How does the OSI Reference Model relate to TCP/IP?

| Layer Number | Layer Name   | Function                                                | Examples                                |
|--------------|--------------|---------------------------------------------------------|-----------------------------------------|
| 4            | Application  | Handles high-level protocols, representation, encoding | HTTP, SMTP, FTP, DNS                    |
| 3            | Transport    | Manages end-to-end data transmission                    | TCP, UDP                                |
| 2            | Internet     | Determines the best path through the network            | IP (IPv4, IPv6), ICMP                   |
| 1            | Network Access (or Link) | Deals with the physical aspects of data transmission  | Ethernet, Wi-Fi, ARP                    |


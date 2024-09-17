
# Subnetting Examples

## Example Class C Subnet

- [x] Lets start with a Class C network stealing 2 bits from Hosts.

- [x] How about 192.168.100.0/26

??? "What is the mask in decimal?"

    | IP Address       | Subnet Mask       | CIDR Notation | Binary Subnet Mask         |
    |------------------|-------------------|---------------|----------------------------|
    | 192.168.100.0    | 255.255.255.192   | /26           | 11111111.11111111.11111111.11000000 |

    
??? "How many subnets?"

    - [x] 2 bits stolen from Hosts = 2^2 = 4 subnets

??? "How many hosts per subnet?"

    - [x] 6 bits left for Hosts = 2^6 -2 = 62 hosts per subnet

??? "What subnet is host 192.168.100.130 in?"

    - [x] we know we have 4 subnets...
    - [x] we know we have 64 hosts per subnet...
    - [x] so the increment is 64, which give us: 0, 64, 128, 192.
    - [x] so a network address is 192.168.100.128...
    - [x] so host 192.168.100.130 is in the 192.168.100.128/26. 

??? "What is the broadcast address of 192.168.100.130/26 host?"

    - [x] we now know the next network address is 192.168.100.192...
    - [x] so the broadcast address is one below that... 192 minus 1 = 191.


??? "Example Class C Summary"

    | Concept                   | Explanation                                                  |
    |---------------------------|--------------------------------------------------------------|
    | Network Address           | 192.168.100.128 (192.168.100.130 falls in this range)        |
    | CIDR Notation             | /26 (means 26 bits for network, remaining for host)          |
    | Subnet Mask               | 255.255.255.192 (or /26)                                     |
    | Binary Subnet Mask        | 11111111.11111111.11111111.11000000                          |
    | Host Address Range        | 192.168.100.128 - 192.168.100.191                            |
    | Next Network Address      | 192.168.100.192 (since /26 allows 64 addresses per subnet)   |
    | Broadcast Address         | 192.168.100.191 (one less than the next network address)     |

---

## Example Class B Subnet

- [x] Let's start with a Class B network stealing 3 bits from Hosts.

- [x] How about 172.16.0.0/19

??? "What is the mask in decimal?"

    | IP Address       | Subnet Mask       | CIDR Notation | Binary Subnet Mask         |
    |------------------|-------------------|---------------|----------------------------|
    | 172.16.0.0       | 255.255.224.0     | /19           | 11111111.11111111.11100000.00000000 |

??? "How many subnets?"

    - [x] 3 bits stolen from Hosts = 2^3 = 8 subnets

??? "How many hosts per subnet?"

    - [x] 13 bits left for Hosts = 2^13 - 2 = 8190 hosts per subnet

??? "What subnet is host 172.16.32.130 in?"

    - [x] we know we have 8 subnets...
    - [x] we know we have 8192 hosts per subnet...
    - [x] so the increment is 8192, which gives us: 0, 32, 64, 96, 128, 160, 192, 224.
    - [x] so a network address is 172.16.32.0...
    - [x] so host 172.16.32.130 is in the 172.16.32.0/19 subnet.

??? "What is the broadcast address of 172.16.32.130/19 host?"

    - [x] we now know the next network address is 172.16.64.0...
    - [x] so the broadcast address is one below that... 64 minus 1 = 63.

??? "Example Class B Summary"

    | Concept                   | Explanation                                                  |
    |---------------------------|--------------------------------------------------------------|
    | Network Address           | 172.16.32.0 (172.16.32.130 falls in this range)              |
    | CIDR Notation             | /19 (means 19 bits for network, remaining for host)          |
    | Subnet Mask               | 255.255.224.0 (or /19)                                       |
    | Binary Subnet Mask        | 11111111.11111111.11100000.00000000                          |
    | Host Address Range        | 172.16.32.0 - 172.16.63.255                                  |
    | Next Network Address      | 172.16.64.0 (since /19 allows 8192 addresses per subnet)     |
    | Broadcast Address         | 172.16.63.255 (one less than the next network address)       |

---

## Example Class A Subnet

- [x] Let's start with a Class A network stealing 4 bits from Hosts.

- [x] How about 10.0.0.0/12

??? "What is the mask in decimal?"

    | IP Address       | Subnet Mask       | CIDR Notation | Binary Subnet Mask         |
    |------------------|-------------------|---------------|----------------------------|
    | 10.0.0.0         | 255.240.0.0       | /12           | 11111111.11110000.00000000.00000000 |

??? "How many subnets?"

    - [x] 4 bits stolen from Hosts = 2^4 = 16 subnets

??? "How many hosts per subnet?"

    - [x] 20 bits left for Hosts = 2^20 - 2 = 1,048,574 hosts per subnet

??? "What subnet is host 10.16.0.130 in?"

    - [x] we know we have 16 subnets...
    - [x] we know we have 1,048,576 hosts per subnet...
    - [x] so the increment is 1,048,576, which gives us: 0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240.
    - [x] so a network address is 10.16.0.0...
    - [x] so host 10.16.0.130 is in the 10.16.0.0/12 subnet.

??? "What is the broadcast address of 10.16.0.130/12 host?"

    - [x] we now know the next network address is 10.32.0.0...
    - [x] so the broadcast address is one below that... 32 minus 1 = 31.

??? "Example Class A Summary"

    | Concept                   | Explanation                                                  |
    |---------------------------|--------------------------------------------------------------|
    | Network Address           | 10.16.0.0 (10.16.0.130 falls in this range)                  |
    | CIDR Notation             | /12 (means 12 bits for network, remaining for host)          |
    | Subnet Mask               | 255.240.0.0 (or /12)                                         |
    | Binary Subnet Mask        | 11111111.11110000.00000000.00000000                          |
    | Host Address Range        | 10.16.0.0 - 10.31.255.255                                    |
    | Next Network Address      | 10.32.0.0 (since /12 allows 1,048,576 addresses per subnet)  |
    | Broadcast Address         | 10.31.255.255 (one less than the next network address)       |

---



## Lloret Staff Block

- [x] Let's consider the Lloret Staff IP Pool of 10.70.3.0/16.

??? "What is the mask in decimal?"

    | IP Address       | Subnet Mask       | CIDR Notation | Binary Subnet Mask         |
    |------------------|-------------------|---------------|----------------------------|
    | 10.70.3.0        | 255.255.0.0       | /16           | 11111111.11111111.00000000.00000000 |

??? "How many subnets?"

    - [x] No additional subnetting within the /16 range. It's a single subnet in Class A.

??? "How many hosts per subnet?"

    - [x] 16 bits left for Hosts = 2^16 - 2 = 65,534 hosts per subnet

??? "What subnet is host 10.70.3.130 in?"

    - [x] Since it's a single /16 subnet, 10.70.3.130 falls within 10.70.0.0/16.

??? "What is the broadcast address of 10.70.3.130/16 host?"

    - [x] For the 10.70.0.0/16 subnet, the broadcast address is 10.70.255.255.

??? "Example Specific Subnet Summary"

    | Concept                   | Explanation                                                  |
    |---------------------------|--------------------------------------------------------------|
    | Network Address           | 10.70.0.0 (10.70.3.130 falls in this range)                  |
    | CIDR Notation             | /16 (means 16 bits for network, remaining for host)          |
    | Subnet Mask               | 255.255.0.0 (or /16)                                         |
    | Binary Subnet Mask        | 11111111.11111111.00000000.00000000                          |
    | Host Address Range        | 10.70.0.0 - 10.70.255.255                                    |
    | Broadcast Address         | 10.70.255.255 (covers the entire 10.70.x.x range)            |

---


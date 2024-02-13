
## Lloret Networks

| Network  | IP Address   | Subnet Mask     | Description |
|----------|--------------|-----------------|-------------|
| LAN      | 10.1.0.1     | 255.255.0.0     | LAN Network |
| STAFF    | 10.70.0.1    | 255.255.0.0     | Staff Network |
| BYOD     | 10.110.0.1   | 255.255.0.0     | BYOD Network |
| GUEST    | 10.120.0.1   | 255.255.0.0     | Guest Network |

??? warning "Lloret Networks"
    
    ![lloret-forti](assets/images/lloret-forti.png)

    ```bash
    set ip 10.1.0.1 255.255.0.0 #LAN
    set ip 10.70.0.1 255.255.0.0 #STAFF
    set ip 10.110.0.1 255.255.0.0 #BYOD
    set ip 10.120.0.1 255.255.0.0 #GUEST
    ```
    ```
    site002 $ get system arp 
    Address           Age(min)   Hardware Addr      Interface
    10.70.3.5         0          64:79:f0:45:eb:56 lloret_staff
    10.70.3.72        15         c4:9d:ed:ad:27:d9 lloret_staff
    10.120.0.32       1          d2:eb:db:14:f6:d5 lloret_guest
    10.70.241.1       1          c0:56:e3:50:32:94 lloret_staff
    10.120.0.44       1          66:c9:6a:28:bd:73 lloret_guest
    10.70.3.29        0          d8:bb:c1:0e:e7:8e lloret_staff
    10.70.3.41        0          f4:a8:0d:5c:e5:82 lloret_staff
    10.120.0.68       1          ce:d9:90:ca:85:38 lloret_guest
    10.70.0.206       0          00:0c:29:95:86:5a lloret_staff
    10.70.0.17        0          00:11:32:b4:fd:93 lloret_staff
    10.70.3.53        3          e0:4f:43:e3:c0:b3 lloret_staff
    10.110.0.40       3          26:39:93:9a:9c:c0 lloret_byod
    10.70.240.100     12         6c:4b:90:6b:a1:d6 lloret_staff
    10.120.0.25       1          ce:91:23:e7:02:c0 lloret_guest
    10.70.3.10        3          d8:5e:d3:ae:d4:3c lloret_staff
    10.70.3.77        0          28:16:a8:04:d8:a7 lloret_staff
    10.70.3.22        0          08:3a:88:6d:d2:45 lloret_staff
    10.70.1.69        0          1c:69:7a:64:db:5f lloret_staff
    10.70.3.34        0          6c:24:08:2c:05:dd lloret_staff
    10.110.0.21       0          5a:20:ea:cb:62:b7 lloret_byod
    10.70.3.46        0          f8:75:a4:7f:21:f2 lloret_staff
    10.70.0.10        0          9c:8e:99:4b:9d:68 lloret_staff
    10.1.0.241        1          78:bc:1a:ad:ed:52 lan
    10.120.0.73       1          ba:cc:77:f4:f0:2b lloret_guest
    10.70.3.70        0          f8:75:a4:7f:40:25 lloret_staff
    10.120.0.30       1          0e:4a:68:ac:9d:e3 lloret_guest
    10.70.3.15        1          50:a4:d0:61:13:bd lloret_staff
    10.70.243.153     1          58:fd:b1:56:7c:81 lloret_staff
    10.1.0.21         3          24:9a:d8:2b:16:79 lan
    10.70.3.27        1          6c:4b:90:59:5e:b7 lloret_staff
    10.70.3.39        0          98:ee:cb:ea:0a:70 lloret_staff
    10.70.3.51        0          44:39:c4:34:ee:5c lloret_staff
    10.70.0.15        0          00:11:32:e9:02:2b lloret_staff
    10.1.0.246        1          08:4f:a9:fd:86:c4 lan
    10.120.0.23       0          a2:60:df:48:18:97 lloret_guest
    10.70.2.248       0          b8:27:eb:3f:36:43 lloret_staff
    10.70.3.8         0          50:a4:d0:61:3b:5f lloret_staff
    10.70.3.20        0          50:a4:d0:61:3b:68 lloret_staff
    10.70.3.32        0          04:ec:d8:26:6b:cd lloret_staff
    10.70.3.44        0          48:2a:e3:aa:f5:e4 lloret_staff
    10.70.3.56        1          50:a4:d0:61:3b:44 lloret_staff
    10.120.0.83       1          3e:93:08:cd:7d:00 lloret_guest
    10.70.3.13        1          50:a4:d0:61:3a:6c lloret_staff
    10.70.243.151     8794       88:c9:b3:d0:17:4f lloret_staff
    10.120.0.40       2          62:ca:9e:c2:99:c6 lloret_guest
    10.70.3.25        0          24:9a:d8:0d:1d:d1 lloret_staff
    10.70.3.49        0          28:16:a8:01:87:f5 lloret_staff
    10.1.0.244        1          5c:5a:c7:57:c4:20 lan
    10.70.3.61        0          a4:f9:33:4d:7c:68 lloret_staff
    10.70.3.6         0          f4:a8:0d:32:44:12 lloret_staff
    10.70.3.18        1          50:a4:d0:61:3a:e4 lloret_staff
    86.188.216.217    0          54:a2:74:27:f7:11 wan1
    10.120.0.45       2          56:c0:73:c9:11:da lloret_guest
    10.70.3.30        0          d8:5e:d3:ae:d4:3b lloret_staff
    10.70.243.101     3          00:0e:c6:d3:f1:e4 lloret_staff
    10.70.0.6         2670       9c:b6:54:74:9c:ca lloret_staff
    10.70.3.42        0          10:60:4b:68:0a:8f lloret_staff
    10.70.3.66        0          0c:37:96:15:9e:c7 lloret_staff
    10.70.3.11        0          10:b5:88:06:96:67 lloret_staff
    10.120.0.93       0          26:61:e0:70:54:60 lloret_guest
    10.120.0.38       3          5e:7e:9c:18:45:d0 lloret_guest
    10.70.3.23        3          02:11:32:2f:e9:be lloret_staff
    10.120.0.50       1          42:16:3f:ae:69:02 lloret_guest
    10.70.3.35        0          04:ec:d8:7c:db:de lloret_staff
    10.70.3.47        0          5c:e9:1e:6b:54:a9 lloret_staff
    10.70.0.11        0          02:11:32:27:bb:b6 lloret_staff
    10.1.0.242        1          10:b3:d6:46:49:ee lan
    10.70.3.83        1          e8:eb:1b:11:af:f7 lloret_staff
    10.70.3.28        0          00:0a:b0:07:25:83 lloret_staff
    10.70.3.40        22         40:16:3b:c1:a3:d1 lloret_staff
    10.70.3.52        0          e4:a8:df:95:98:b8 lloret_staff
    10.70.0.16        0          00:11:32:d2:1d:9e lloret_staff
    10.1.0.247        1          78:bc:1a:ad:ee:28 lan
    10.70.3.64        0          d4:3d:7e:7d:fa:89 lloret_staff
    10.70.2.249       0          b8:27:eb:9a:44:39 lloret_staff
    10.70.3.9         0          d8:5e:d3:ae:d2:34 lloret_staff
    10.70.3.21        1          44:39:c4:34:f8:28 lloret_staff
    10.70.3.33        0          14:d6:4d:1f:e5:fa lloret_staff
    10.70.3.45        0          f4:a8:0d:31:df:d1 lloret_staff
    10.70.242.100     52         00:80:f4:46:e9:a2 lloret_staff
    10.70.3.57        2          98:ee:cb:a5:d7:b6 lloret_staff
    10.1.1.12         4          30:b5:c2:cd:9c:6e lan
    10.70.3.2         8432       9c:50:d1:20:49:01 lloret_staff
    10.70.3.69        0          98:ee:cb:b7:23:61 lloret_staff
    10.120.0.29       0          a2:9b:d9:63:07:4f lloret_guest
    10.70.3.14        2          08:3a:88:69:34:be lloret_staff
    10.70.3.81        5          98:ee:cb:9c:3c:48 lloret_staff
    10.70.3.26        5          60:70:c0:48:f6:e4 lloret_staff
    10.70.3.38        0          d8:80:83:3f:58:fb lloret_staff
    10.70.0.14        5          00:11:32:8a:ac:85 lloret_staff
    10.1.0.245        1          08:4f:a9:ae:44:d4 lan
    10.70.3.62        1          8c:89:a5:3c:bf:bf lloret_staff
    192.168.1.1       0          00:1e:42:15:a3:64 wan2
    10.120.0.22       17         68:ec:c5:b1:8f:0f lloret_guest
    10.120.0.89       1          2a:2a:5d:c2:a0:82 lloret_guest
    10.70.3.74        0          cc:48:3a:c3:2a:67 lloret_staff
    10.70.3.19        0          08:3a:88:6d:6c:59 lloret_staff
    10.70.3.31        0          e0:4f:43:25:04:ab lloret_staff
    10.70.3.55        3          e8:ea:6a:83:df:49 lloret_staff
    10.120.0.82       2          4a:bc:2b:b8:12:89 lloret_guest
    10.120.0.27       0          ca:12:b5:1c:71:18 lloret_guest
    10.70.3.12        1          6c:3c:8c:7a:25:46 lloret_staff
    10.70.243.150     2          00:0a:b0:09:66:11 lloret_staff
    10.70.3.24        0          74:97:79:ec:a4:29 lloret_staff
    10.70.3.36        3          50:a4:d0:61:3b:62 lloret_staff
    10.70.0.12        2          02:11:32:27:ba:55 lloret_staff
    
    site002 $ 
    ```

## Lloret LAN Block 

- [x] We have **10.1.0.1/16** as our LAN block.

??? "What is the mask in decimal?"

    | IP Address       | Subnet Mask       | CIDR Notation | Binary Subnet Mask         |
    |------------------|-------------------|---------------|----------------------------|
    | 10.1.0.1         | 255.255.0.0       | /16           | 11111111.11111111.00000000.00000000 |

??? "How many subnets?"

    - [x] No additional subnetting within the /16 range. It's a single subnet in Class A.

??? "How many hosts per subnet?"

    - [x] 16 bits left for Hosts = 2^16 - 2 = 65,534 hosts per subnet

??? "What subnet is host 10.1.0.130 in?"

    - [x] Since it's a single /16 subnet, 10.1.0.130 falls within 10.1.0.0/16.

??? "What is the broadcast address of 10.1.0.130/16 host?"

    - [x] For the 10.1.0.0/16 subnet, the broadcast address is 10.1.255.255.

??? "Example Specific Subnet Summary"

    | Concept                   | Explanation                                                  |
    |---------------------------|--------------------------------------------------------------|
    | Network Address           | 10.1.0.0 (10.1.0.130 falls in this range)                    |
    | CIDR Notation             | /16 (means 16 bits for network, remaining for host)          |
    | Subnet Mask               | 255.255.0.0 (or /16)                                         |
    | Binary Subnet Mask        | 11111111.11111111.00000000.00000000                          |
    | Host Address Range        | 10.1.0.0 - 10.1.255.255                                      |
    | Broadcast Address         | 10.1.255.255 (covers the entire 10.1.x.x range)              |

This example is specific to the 10.1.0.1/16 subnet, detailing its characteristics and addressing within a Class A network.

## Lloret Staff Block

- [x] We have **10.70.0.0/16** as our Staff block.

??? "What is the mask in decimal?"

    | IP Address       | Subnet Mask       | CIDR Notation | Binary Subnet Mask         |
    |------------------|-------------------|---------------|----------------------------|
    | 10.70.0.0        | 255.255.0.0       | /16           | 11111111.11111111.00000000.00000000 |

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

## Lloret BYOD Block

- [x] We use 10.110.0.1/16 as our BYOD block.

??? "What is the mask in decimal?"

    | IP Address       | Subnet Mask       | CIDR Notation | Binary Subnet Mask         |
    |------------------|-------------------|---------------|----------------------------|
    | 10.110.0.1       | 255.255.0.0       | /16           | 11111111.11111111.00000000.00000000 |

??? "How many subnets?"

    - [x] No additional subnetting within the /16 range. It's a single subnet in Class A.

??? "How many hosts per subnet?"

    - [x] 16 bits left for Hosts = 2^16 - 2 = 65,534 hosts per subnet

??? "What subnet is host 10.110.0.130 in?"

    - [x] Since it's a single /16 subnet, 10.110.0.130 falls within 10.110.0.0/16.

??? "What is the broadcast address of 10.110.0.130/16 host?"

    - [x] For the 10.110.0.0/16 subnet, the broadcast address is 10.110.255.255.

??? "Example Specific Subnet Summary"

    | Concept                   | Explanation                                                  |
    |---------------------------|--------------------------------------------------------------|
    | Network Address           | 10.110.0.0 (10.110.0.130 falls in this range)                |
    | CIDR Notation             | /16 (means 16 bits for network, remaining for host)          |
    | Subnet Mask               | 255.255.0.0 (or /16)                                         |
    | Binary Subnet Mask        | 11111111.11111111.00000000.00000000                          |
    | Host Address Range        | 10.110.0.0 - 10.110.255.255                                  |
    | Broadcast Address         | 10.110.255.255 (covers the entire 10.110.x.x range)          |

## Lloret Guest Block

- [x] We use 10.120.0.1/16 as our Guest block.

??? "What is the mask in decimal?"

    | IP Address       | Subnet Mask       | CIDR Notation | Binary Subnet Mask         |
    |------------------|-------------------|---------------|----------------------------|
    | 10.120.0.1       | 255.255.0.0       | /16           | 11111111.11111111.00000000.00000000 |

??? "How many subnets?"

    - [x] No additional subnetting within the /16 range. It's a single subnet in Class A.

??? "How many hosts per subnet?"

    - [x] 16 bits left for Hosts = 2^16 - 2 = 65,534 hosts per subnet

??? "What subnet is host 10.120.0.130 in?"

    - [x] Since it's a single /16 subnet, 10.120.0.130 falls within 10.120.0.0/16.

??? "What is the broadcast address of 10.120.0.130/16 host?"

    - [x] For the 10.120.0.0/16 subnet, the broadcast address is 10.120.255.255.

??? "Example Specific Subnet Summary"

    | Concept                   | Explanation                                                  |
    |---------------------------|--------------------------------------------------------------|
    | Network Address           | 10.120.0.0 (10.120.0.130 falls in this range)                |
    | CIDR Notation             | /16 (means 16 bits for network, remaining for host)          |
    | Subnet Mask               | 255.255.0.0 (or /16)                                         |
    | Binary Subnet Mask        | 11111111.11111111.00000000.00000000                          |
    | Host Address Range        | 10.120.0.0 - 10.120.255.255                                  |
    | Broadcast Address         | 10.120.255.255 (covers the entire 10.120.x.x range)          |


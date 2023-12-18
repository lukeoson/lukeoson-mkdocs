??? info "Classless Inter-Domain Routing" 
    CIDR stands for "Classless Inter-Domain Routing." It's a method used for allocating IP addresses and routing Internet Protocol packets. CIDR replaced the older system based on classes A, B, and C in the 1990s.

---

 - [x] CIDR was introduced in the early 1990s to overcome the limitations of classful addressing.

 ---

 - [x] CIDR allows for variable-length subnet masks, meaning that organizations can request an appropriate number of addresses, rather than being limited to predefined class sizes.

 ---

 - [x] CIDR introduced the notion of a "prefix length," expressed as "/X," where X indicates the number of bits in the subnet mask. For example, /24 represents a 24-bit subnet mask (equivalent to Class C), and /16 represents a 16-bit subnet mask (equivalent to Class B).

 ---

 - [x] CIDR also introduced aggregation, allowing multiple IP prefixes to be summarized into a single, larger prefix. This reduced the size of routing tables on the Internet backbone.

 ---

## Slash the Decimals. Decimate to Slash.  

> We call slash notation "CIDR notation" because it's a key component of Classless Inter-Domain Routing (CIDR), which is a method for allocating IP addresses and routing decisions. The slash notation is a concise way to represent an IP address and its associated routing prefix.

| Decimal Subnet Mask     | Binary Subnet Mask       | CIDR Notation |
|-------------------------|---------------------------|---------------|
| 255.255.255.255         | 11111111.11111111.11111111.11111111 | /32           |
| 255.255.255.254         | 11111111.11111111.11111111.11111110 | /31           |
| 255.255.255.252         | 11111111.11111111.11111111.11111100 | /30           |
| 255.255.255.248         | 11111111.11111111.11111111.11111000 | /29           |
| 255.255.255.240         | 11111111.11111111.11111111.11110000 | /28           |
| 255.255.255.224         | 11111111.11111111.11111111.11100000 | /27           |
| 255.255.255.192         | 11111111.11111111.11111111.11000000 | /26           |
| 255.255.255.128         | 11111111.11111111.11111111.10000000 | /25           |
| 255.255.255.0           | 11111111.11111111.11111111.00000000 | /24           |
| 255.255.254.0           | 11111111.11111111.11111110.00000000 | /23           |
| 255.255.252.0           | 11111111.11111111.11111100.00000000 | /22           |
| 255.255.248.0           | 11111111.11111111.11111000.00000000 | /21           |
| 255.255.240.0           | 11111111.11111111.11110000.00000000 | /20           |
| 255.255.224.0           | 11111111.11111111.11100000.00000000 | /19           |
| 255.255.192.0           | 11111111.11111111.11000000.00000000 | /18           |
| 255.255.128.0           | 11111111.11111111.10000000.00000000 | /17           |
| 255.255.0.0             | 11111111.11111111.00000000.00000000 | /16           |
| 255.254.0.0             | 11111111.11111110.00000000.00000000 | /15           |
| 255.252.0.0             | 11111111.11111100.00000000.00000000 | /14           |
| 255.248.0.0             | 11111111.11111000.00000000.00000000 | /13           |
| 255.240.0.0             | 11111111.11110000.00000000.00000000 | /12           |
| 255.224.0.0             | 11111111.11100000.00000000.00000000 | /11           |
| 255.192.0.0             | 11111111.11000000.00000000.00000000 | /10           |
| 255.128.0.0             | 11111111.10000000.00000000.00000000 | /9            |
| 255.0.0.0               | 11111111.00000000.00000000.00000000 | /8            |
| 254.0.0.0               | 11111110.00000000.00000000.00000000 | /7            |
| 252.0.0.0               | 11111100.00000000.00000000.00000000 | /6            |
| 248.0.0.0               | 11111000.00000000.00000000.00000000 | /5            |
| 240.0.0.0               | 11110000.00000000.00000000.000000   | /4            |
| 224.0.0.0               | 11100000.00000000.00000000.00000000 | /3            |
| 192.0.0.0               | 11000000.00000000.00000000.00000000 | /2            |
| 128.0.0.0               | 10000000.00000000.00000000.00000000 | /1            |
| 0.0.0.0                 | 00000000.00000000.00000000.00000000 | /0 (Default)  |
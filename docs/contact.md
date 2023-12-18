<div id="your-contacts-div"></div>

| Aspect                  | Wildcard Mask                          | Subnet Mask                          |
|-------------------------|---------------------------------------|-------------------------------------|
| Purpose                 | Used in Access Control Lists (ACLs) to specify which IP addresses to permit or deny access to. | Used in IP addressing to divide a network into subnetworks and determine the network and host portions of an IP address. |
| Format                  | Inverse of subnet mask. It marks the bits that are to be matched with the corresponding bits in an IP address. | Binary mask with 1s indicating the network portion and 0s indicating the host portion. |
| Representation          | Typically represented with the "wildcard bits" keyword in ACLs, followed by a series of four octets with values between 0 and 255 separated by dots. Example: `0.0.0.255` | Represented using the same dotted decimal format as IP addresses, with a varying number of bits set to 1. Example: `255.255.255.0` |
| Usage Example           | To permit access to IP addresses within a specific range, specify the wildcard mask in an ACL entry. Example: `permit 192.168.1.0 0.0.0.255` allows all addresses in the `192.168.1.0/24` subnet. | To define network boundaries within an IP address range, apply the subnet mask to the IP addresses. Example: `192.168.1.0/24` represents a subnet with a subnet mask of `255.255.255.0`. |
| Network Calculation     | To calculate the network ID from an IP address, perform a bitwise AND operation with the IP address and the wildcard mask. | To calculate the network ID from an IP address, perform a bitwise AND operation with the IP address and the subnet mask. |


 | Decimal Subnet Mask     | CIDR Notation |
|-------------------------|---------------|
| 255.255.255.255         | /32           |
| 255.255.255.254         | /31           |
| 255.255.255.252         | /30           |
| 255.255.255.248         | /29           |
| 255.255.255.240         | /28           |
| 255.255.255.224         | /27           |
| 255.255.255.192         | /26           |
| 255.255.255.128         | /25           |
| 255.255.255.0           | /24           |
| 255.255.254.0           | /23           |
| 255.255.252.0           | /22           |
| 255.255.248.0           | /21           |
| 255.255.240.0           | /20           |
| 255.255.224.0           | /19           |
| 255.255.192.0           | /18           |
| 255.255.128.0           | /17           |
| 255.255.0.0             | /16           |
| 255.254.0.0             | /15           |
| 255.252.0.0             | /14           |
| 255.248.0.0             | /13           |
| 255.240.0.0             | /12           |
| 255.224.0.0             | /11           |
| 255.192.0.0             | /10           |
| 255.128.0.0             | /9            |
| 255.0.0.0               | /8            |
| 254.0.0.0               | /7            |
| 252.0.0.0               | /6            |
| 248.0.0.0               | /5            |
| 240.0.0.0               | /4            |
| 224.0.0.0               | /3            |
| 192.0.0.0               | /2            |
| 128.0.0.0               | /1            |
| 0.0.0.0                 | /0 (Default)  |
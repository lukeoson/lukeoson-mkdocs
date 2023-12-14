
!!! note
    🔕 **Do not be alarmed.** Most people use a subnet calculator in the real world. 😌

    - [x] Here is my go to [Visual Subnet Calc](https://www.davidc.net/sites/default/subnets/subnets.html?network=).

    - [x] But it is handy to know the basic theory. ␆

### Knowledge Pyramid

#### Numerical Systems
 - [x] **Binary**: Base-2, uses 0 and 1.

    ![binary](assets/images/DALLE-binary.png)

 - [x] **Hexadecimal**: Base-16, uses 0-9 and A-F.

    ![hex](assets/images/DALLE-hex.png)

 - [x] **Decimal**: Base-10, uses 0-9.

    ![10 fingers](assets/images/DALLE-10-fingers.png)

---

#### IP Classes
- [x] **Class A**: Large networks, 0-126.
- [x] **Class B**: Medium networks, 128-191.
- [x] **Class C**: Small networks, 192-223.
- [x] **Class D**: Multicast groups, 224-239.
- [x] **Class E**: Experimental use, 240-255.

---

#### Subnets
- [x] **Subnet Masks**: Define network/host portions.
- [x] **VLSM (Variable Length Subnet Mask)**: Flexible subnet sizing.
- [x] **SUM (Supernetting)**: Combine smaller networks.

---

### Binary to Decimal

| Bit Position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|--------------|---|---|---|---|---|---|---|---|
| Binary Value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

| Binary Bits | Decimal Number |
|-------------|----------------|
| 00000000    | 0              |
| 00000001    | 1              |
| 00000010    | 2              |
| 00000011    | 3              |
| 00000100    | 4              |
| 00000101    | 5              |
| 00000110    | 6              |
| 00000111    | 7              |
| 00001000    | 8              |
| 00001001    | 9              |
| ...         | ...            |
| 11111110    | 254            |
| 11111111    | 255            |

### Network 

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 11000000        | 192                |
| 2nd Octet    | 10101000        | 168                |
| 3rd Octet    | 00000001        | 1                  |
| 4th Octet    | 00000000        | 0                  |

### Broadcast

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 11000000        | 192                |
| 2nd Octet    | 10101000        | 168                |
| 3rd Octet    | 00000001        | 1                  |
| 4th Octet    | 11111111        | 255                |

### Potential Gateway (could be any address/es in host range)

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 11000000        | 192                |
| 2nd Octet    | 10101000        | 168                |
| 3rd Octet    | 00000001        | 1                  |
| 4th Octet    | 00000001        | 1                  |


### All Zeros and All Ones

**Network Address (All Host Bits Off - 0s):**

- [x] When all the host bits are set to 0, the address represents the network address. 

- [x] This address is not assignable to individual devices but is used to identify the network or subnet itself. 

- [x] In a subnet 192.168.1.0/24, the address 192.168.1.0 is the network address, where the last octet (1.**0**) has all host bits off.
**

**Broadcast Address (All Host Bits On - 1s):**

- [x] When all the host bits are set to 1, the address becomes the broadcast address for that subnet. 
- [x] This address is used to send data to all devices on the subnet simultaneously. 
- [x] It's like a shout-out to everyone on that network. 
- [x] In the same subnet 192.168.1.0/24, the broadcast address would be 192.168.1.255, where the last octet (1.**255**) has all host bits on.

| Host Bits Status | Address Type      | Description                                                |
|------------------|-------------------|------------------------------------------------------------|
| All 0s           | Network Address   | The address used to identify the subnet itself.            |
| All 1s           | Broadcast Address | The address used to send data to all hosts on the subnet.  |

![image](assets/images/pdf/Cheat Sheets - PacketLife.net/IPv4_Subnetting.pdf)

### Why Minimize Broadcast Packets?

Minimizing broadcast packets helps maintain a smoother, faster, and more secure network. It's like keeping public announcements in a big building to only the floors that need to hear them, rather than blasting them everywhere! 











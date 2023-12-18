??? note "🔕 **Do not be alarmed.** Most people use a subnet calculator in the real world. 😌"

    

    - [x] Here is my go to [Visual Subnet Calc](https://www.davidc.net/sites/default/subnets/subnets.html?network=).

    - [x] But it is handy to know the basic theory. ␆

### Binary to Decimal

??? note "Zero-based Indexing"

    In most programming languages, arrays and sequences start at index 0. This convention carries over to how we count positions in a binary number. It aligns with the way memory addresses and offsets are calculated in computer systems.

#### An Octets Decimal Values ♫

- [x] 🐣 Get this in your head and much of the rest just falls into place. 

| Bit Position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|--------------|---|---|---|---|---|---|---|---|
| Binary Value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

#### 2 the Power of 8

- [x] 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 = **256**

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

## Basic Example

### Network 

- [x] 192.168.1.0 is the Network Address.

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 11000000        | 192                |
| 2nd Octet    | 10101000        | 168                |
| 3rd Octet    | 00000001        | 1                  |
| 4th Octet    | 00000000        | 0                  |

### Broadcast

- [x] 192.168.1.255 is a Broadcast Address.

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 11000000        | 192                |
| 2nd Octet    | 10101000        | 168                |
| 3rd Octet    | 00000001        | 1                  |
| 4th Octet    | 11111111        | 255                |

### Potential Gateway 

- [x] 192.168.1.1 could be the Gateway Address.

??? note
    - Could be any address/es in host range.

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 11000000        | 192                |
| 2nd Octet    | 10101000        | 168                |
| 3rd Octet    | 00000001        | 1                  |
| 4th Octet    | 00000001        | 1                  |


## All Zeros and All Ones

| Host Bits Status | Address Type      | Description                                                |
|------------------|-------------------|------------------------------------------------------------|
| All 0s           | Network Address   | The address used to identify the subnet itself.            |
| All 1s           | Broadcast Address | The address used to send data to all hosts on the subnet.  |

### Network Address --> All Host Bits **OFF**:

- [x] When all the host bits are set to 0, the address represents the network address. 

---

- [x] This address is not assignable to individual devices but is used to identify the network or subnet itself. 

---

- [x] In a subnet 192.168.1.0/24, the address 192.168.1.0 is the network address, where the last octet (1.**0**) has all host bits off.

---

### Broadcast Address --> All Host Bits **ON**:

- [x] When all the host bits are set to 1, the address becomes the broadcast address for that subnet. 

---

- [x] This address is used to send data to all devices on the subnet simultaneously. 

---

- [x] It's like a shout-out to everyone on that network. 

---

- [x] In the same subnet 192.168.1.0/24, the broadcast address would be 192.168.1.255, where the last octet (1.**255**) has all host bits on.

---

## Cheat Sheet

![image](assets/images/pdf/Cheat Sheets - PacketLife.net/IPv4_Subnetting.pdf)














- [x] 32 binary bits - 4 octets - 8 bits per octet.

---

- [x] Computers only read bits. They just see 32 bits. 

---

- [X] IPv4 addresses are assigned by IANA (Internet Assigned Numbers Authority).

    - They allocate routable IP addresses to ISPs (Internet Service Providers).

    - ISPs assign routable IP addresses to customers.

---

- [x] [Wireshark](https://www.wireshark.org/tools/oui-lookup.html) Packet Capture to show public and private addresses. 

---

## Each Byte has a value between 0 and 255

- [x] 2 the Power of 8

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 00000000        | 0 - 255            |
| 2nd Octet    | 00000000        | 0 - 255            |
| 3rd Octet    | 00000000        | 0 - 255            |
| 4th Octet    | 00000000        | 0 - 255            |

## Example IPv4 Addresses:

- [x] 192.168.1.2

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 11000000        | 192                |
| 2nd Octet    | 10101000        | 168                |
| 3rd Octet    | 00000001        | 1                  |
| 4th Octet    | 00000010        | 2                  |

### Bits & Bytes of 192.168.1.2

| Component | Description                                    | Details                                        |
|-----------|------------------------------------------------|------------------------------------------------|
| Octet     | An IPv4 address is divided into 4 octets.      | Each octet consists of 8 bits.                 |
| Bit       | The basic unit of data in an IP address.       | There are 32 bits in total (8 bits per octet). |
| Byte      | Equivalent to one octet.                       | Each byte (or octet) ranges from 0 to 255.     |
| Example   | For the IP address 192.168.1.2:                | - 192 is the first octet (byte).<br>- 168 is the second octet (byte).<br>- 1 is the third octet (byte).<br>- 2 is the fourth octet (byte). |

- [x] 10.70.3.100

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 00001010        | 10                 |
| 2nd Octet    | 01000110        | 70                 |
| 3rd Octet    | 00000011        | 3                  |
| 4th Octet    | 01100100        | 100                |




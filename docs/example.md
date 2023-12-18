
# Example Class C Subnet

all zeros and ones:

| Octet Position | Subnet Mask Example | Network Bits (1's) | Host Bits (0's) |
|----------------|---------------------|--------------------|-----------------|
| 1st Octet      | 255                 | 11111111           | 00000000        |
| 2nd Octet      | 255                 | 11111111           | 00000000        |
| 3rd Octet      | 192                 | 11000000           | 00111111        |
| 4th Octet      | 0                   | 00000000           | 11111111        |


bits and bytes

| Component | Description                                    | Details                                        |
|-----------|------------------------------------------------|------------------------------------------------|
| Octet     | An IPv4 address is divided into 4 octets.      | Each octet consists of 8 bits.                 |
| Bit       | The basic unit of data in an IP address.       | There are 32 bits in total (8 bits per octet). |
| Byte      | Equivalent to one octet.                       | Each byte (or octet) ranges from 0 to 255.     |
| Example   | For the IP address 192.168.1.1:                | - 192 is the first octet (byte).<br>- 168 is the second octet (byte).<br>- 1 is the third octet (byte).<br>- 1 is the fourth octet (byte). |
### Overview

- [x] What is the OSI Model? 
- [x] How does the OSI Reference Model relate to TCP/IP?
- [x] The life of a packet. 
- [x] Why are IP Addresses pertinent in context of the OSI Model?
- [x] IPv4 vs IPv6.
- [x] Subnetting 101 Bare Bones Basics. 


all zeros and ones:

| Octet Position | Subnet Mask Example | Network Bits (1's) | Host Bits (0's) |
|----------------|---------------------|--------------------|-----------------|
| 1st Octet      | 255                 | 11111111           | 00000000        |
| 2nd Octet      | 255                 | 11111111           | 00000000        |
| 3rd Octet      | 192                 | 11000000           | 00111111        |
| 4th Octet      | 0                   | 00000000           | 11111111        |

<!DOCTYPE html>
<html>
<head>
<style>
  table {
    border-collapse: collapse;
    width: 50%;
    margin: auto;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #4CAF50;
    color: white;
  }
  tr:nth-child(even){background-color: #f2f2f2;}
  tr:hover {background-color: #ddd;}
</style>
</head>
<body>

<table>
  <tr>
    <th>Binary</th>
    <th>Decimal</th>
    <th>Hex</th>
  </tr>
  <tr>
    <td>0000</td><td>0</td><td>0</td>
  </tr>
  <tr>
    <td>0001</td><td>1</td><td>1</td>
  </tr>
  <tr>
    <td>0010</td><td>2</td><td>2</td>
  </tr>
  <!-- Add the rest of the rows in the same way -->
  <!-- ... -->
  <tr>
    <td>1110</td><td>14</td><td>E</td>
  </tr>
  <tr>
    <td>1111</td><td>15</td><td>F</td>
  </tr>
</table>

</body>
</html>


bits and bytes

| Component | Description                                    | Details                                        |
|-----------|------------------------------------------------|------------------------------------------------|
| Octet     | An IPv4 address is divided into 4 octets.      | Each octet consists of 8 bits.                 |
| Bit       | The basic unit of data in an IP address.       | There are 32 bits in total (8 bits per octet). |
| Byte      | Equivalent to one octet.                       | Each byte (or octet) ranges from 0 to 255.     |
| Example   | For the IP address 192.168.1.1:                | - 192 is the first octet (byte).<br>- 168 is the second octet (byte).<br>- 1 is the third octet (byte).<br>- 1 is the fourth octet (byte). |


<!DOCTYPE html>
<html>
<head>
<style>
  table {
    border-collapse: collapse;
    width: 50%;
    margin: auto;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  th {
    background-color: #673AB7; /* Deep purple shade for header */
    color: white;
  }
  tr:nth-child(even) {background-color: #EDE7F6;} /* Light purple for even rows */
  tr:hover {background-color: #D1C4E9;} /* Slightly darker purple for hover effect */
</style>
</head>
<body>

<table>
  <!-- Table content goes here -->
</table>

</body>
</html>




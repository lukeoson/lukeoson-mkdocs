
- [x] 32 binary bits - 4 octets - 8 bits per octet.

```mermaid
graph LR
    A[IPv4 Address] --> B[Octet 1]
    A --> C[Octet 2]
    A --> D[Octet 3]
    A --> E[Octet 4]

    B --> B1[8 bits<br>Binary: 00001010<br>Decimal: 10]
    C --> C1[8 bits<br>Binary: 01000110<br>Decimal: 70]
    D --> D1[8 bits<br>Binary: 00000011<br>Decimal: 3]
    E --> E1[8 bits<br>Binary: 01100100<br>Decimal: 100]

    style A fill:#f9f,stroke:#333,stroke-width:4px
    style B fill:#ccf,stroke:#f66,stroke-width:2px
    style C fill:#ccf,stroke:#f66,stroke-width:2px
    style D fill:#ccf,stroke:#f66,stroke-width:2px
    style E fill:#ccf,stroke:#f66,stroke-width:2px
```

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 00000000        | 0 - 255            |
| 2nd Octet    | 00000000        | 0 - 255            |
| 3rd Octet    | 00000000        | 0 - 255            |
| 4th Octet    | 00000000        | 0 - 255            |

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 11000000        | 192                |
| 2nd Octet    | 10101000        | 168                |
| 3rd Octet    | 00000001        | 1                  |
| 4th Octet    | 00000010        | 2                  |

| Octet Number | Binary Format   | Decimal Equivalent |
|--------------|-----------------|--------------------|
| 1st Octet    | 00001010        | 10                 |
| 2nd Octet    | 01000110        | 70                 |
| 3rd Octet    | 00000011        | 3                  |
| 4th Octet    | 01100100        | 100                |

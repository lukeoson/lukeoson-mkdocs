## IP Classes

---

- [x] **Class A**: Large networks, 0-126.

- 0xxxxxxx | First bit is OFF. 

---

- [x] **Class B**: Medium networks, 128-191.

- 10xxxxxx | First bit is ON, Second bit is OFF.

---

- [x] **Class C**: Small networks, 192-223.

- 110xxxxx | First two bits are ON, Third bit is OFF.

---

- [x] **Class D**: Multicast groups, 224-239.

- 1110xxxx | First three bits are ON, Fourth bit is OFF.

---

- [x] **Class E**: Experimental use, 240-255.

- 1111xxxx | First four bits are ON.

---

## Bits specified by Class

| Class | Leading Bits   | Range of First Octet |
|-------|----------------|----------------------|
| A     | 0xxxxxxx       | 0 - 127              |
| B     | 10xxxxxx       | 128 - 191            |
| C     | 110xxxxx       | 192 - 223            |
| D     | 1110xxxx       | 224 - 239            |
| E     | 1111xxxx       | 240 - 255            |



---

## Subnets - Classy Cider 🍻

- [x] **Subnet Masks**: Define network/host portions.
- [x] **VLSM (Variable Length Subnet Mask)**: Flexible subnet sizing.
- [x] **SUM (Supernetting)**: Combine smaller networks.

---
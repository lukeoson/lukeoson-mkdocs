## Lloret Networks  

| Network  | IP Address   | Subnet Mask     | Description |
|----------|--------------|-----------------|-------------|
| LAN      | 10.1.0.1     | 255.255.0.0     | LAN Network |
| STAFF    | 10.70.0.1    | 255.255.0.0     | Staff Network |
| BYOD     | 10.110.0.1   | 255.255.0.0     | BYOD Network |
| GUEST    | 10.120.0.1   | 255.255.0.0     | Guest Network |

## Lloret Supernetted

- [x] Alright, let's roll up our sleeves and get into some subnet aggregation fun!

> When we talk about aggregating subnets, we're basically trying to find a bigger subnet that can neatly fit all these smaller subnets inside it.

1. **LAN Network:** 10.1.0.0 to 10.1.255.255
2. **STAFF Network:** 10.70.0.0 to 10.70.255.255
3. **BYOD Network:** 10.110.0.0 to 10.110.255.255
4. **GUEST Network:** 10.120.0.0 to 10.120.255.255

We're looking for the common ground here, the starting point that fits all these ranges. If we look closely, all the addresses start with "10.", which is our first clue. After the "10.", things start to get different, so that's where we need to focus.

When we do a bit of magical binary conversion and comparison, we find that the common bits in all these addresses go up to the first 8 bits (that's the "10" part). After that, the bits start to differ. 

So, if we were to aggregate these networks, our new subnet would start at 10.0.0.0. But what about the mask? Well, since we only have the first 8 bits in common, our new mask would be 255.0.0.0.

Therefore, your aggregated subnet would be **10.0.0.0 with a subnet mask of 255.0.0.0**. This big subnet umbrella can cover all your smaller subnets like a cozy blanket! 🌐💻🎉

## Or to get more granular...

| Network | IP Address | Binary Representation (First 10 bits) |
|---------|------------|---------------------------------------|
| LAN     | 10.1.0.1   | 00001010.00                           |
| STAFF   | 10.70.0.1  | 00001010.01                           |
| BYOD    | 10.110.0.1 | 00001010.01                           |
| GUEST   | 10.120.0.1 | 00001010.01                           |

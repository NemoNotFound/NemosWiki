---
outline: deep
---

# Custom Buckets

This page explains how to add custom bucket support for various in-game behaviors like milking, filling, emptying, and dispenser usage.

::: tip NOTE

- For cauldron interactions, see the `CauldronInteraction` class.
- To allow custom water buckets to pick up entities (like axolotls or fish), you must implement this behavior yourself.
  :::

## Milking Cows and Goats

To allow milking with a custom bucket:

- Add your empty bucket item to the `buckets/empty` item tag
- Add a key-value pair (empty bucket → milk bucket) to the `BUCKET_TO_MILK_BUCKET` map

## Emptying Buckets

The logic for emptying filled buckets checks if the item is present in the `FILLED_BUCKET_TO_EMPTY_BUCKET` map and returns the corresponding empty bucket.

To support this with a custom bucket, add your filled bucket to the `FILLED_BUCKET_TO_EMPTY_BUCKET` map.

## Filling Buckets

The logic for filling buckets with vanilla fluids and powder snow checks the corresponding maps.

You can extend the following maps:

- `EMPTY_BUCKET_TO_WATER_BUCKET`
- `EMPTY_BUCKET_TO_LAVA_BUCKET`
- `EMPTY_BUCKET_TO_POWDER_SNOW_BUCKET`

## Adding Dispenser Behaviour

For dispenser support, you need to register dispenser behaviors manually.  
Refer to Minecraft's `DispenseItemBehavior` interface for implementation details.

To enable filling custom empty buckets via dispensers, you can use the `nemosTags$pickupBlock` method.  
Simply cast the liquid or powder snow block to `CustomBucketPickup` to access it.

**Example:**

```java
if (blockstate.getBlock() instanceof CustomBucketPickup bucketpickup) {
    ItemStack itemstack = bucketpickup.pickupBlock(customEmptyBucket, levelAccessor, blockpos, blockstate);
// Handle the resulting item stack (see vanilla bucket behavior for reference)
}
```

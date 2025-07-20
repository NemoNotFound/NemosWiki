---
outline: deep
---

# How It Works

This page explains how **Nemo's Night Progression** functions behind the scenes.

::: info Note
If you're not familiar with modding or programming concepts, some parts might be a bit technical.
:::

## Smelting

When a player sleeps, the mod calculates how much in-game time passes until morning.  
Based on this duration, it simulates furnace activity during sleep. For each affected furnace, it determines how many items can be smelted during the skipped time — considering both the available fuel and the items to be smelted.

Internally, the mixin injects into the `AbstractFurnaceBlockEntity` logic and adds a custom method that gets called from the sleep progression logic. It calculates how many smelting ticks would have occurred and advances the furnace accordingly.

## Random Tick Speed

When a player sleeps, the mod calculates how much in-game time is skipped until morning.  
It then temporarily increases the random tick speed to `3 * ticksSlept` to simulate the world progressing during that time.

Once the processing is complete, the tick speed is reset to its default value of 3.

This affects all blocks that normally rely on random ticks, including:

- Crops (e.g. wheat, potatoes, carrots)
- Saplings
- Leaves (for decay or spreading)
- Mushrooms
- Grass and mycelium spread
- Fire (spreading and burnout)

::: warning
This may cause performance issues on lower-end hardware.
:::

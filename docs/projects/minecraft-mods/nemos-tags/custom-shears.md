---
outline: deep
---

# Custom Shears

This page explains how to add custom shears support for various in-game behaviors, such as collecting leaves and shearing blocks or entities.

## Custom Shears Integration

To add custom shears, simply add your item to the `shears` item tag.  
Your shears will then be able to break and retrieve leaves.

::: info
For **Fabric**, the interaction logic of certain blocks and entities was modified to support custom shears.
Any item in the `shears` item tag now can interact with:

- Beehives
- Bogged
- Mushroom Cows
- Sheep
- Snow Golems

This change is **Fabric-only**, as **NeoForge** and **Forge** already support custom shears out of the box.
:::

::: tip NOTE  
To make your shears work with dispensers, you must register them manually.
:::

## Making Blocks Shearable (WIP)

---
outline: deep
---

# Custom Rails

This page explains how to add support for custom rails.

## Custom Powered Rail Detection

For **Fabric** and **Forge**, the redstone direction detection logic was modified to support custom powered rails. Any block in the `powered_rails` block tag now functions as a powered rail.

::: warning
Make sure your powered rail block includes the `PoweredRailBlock.POWERED` property.  
Without this property, redstone power detection will not function correctly.
:::

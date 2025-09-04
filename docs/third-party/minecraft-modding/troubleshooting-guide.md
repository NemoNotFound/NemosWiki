---
outline: deep
---

# Troubleshooting Guide

This guide lists common issues you may encounter, explains their causes, and suggests possible solutions or workarounds.  
Use it as a reference when debugging problems during development or testing.

::: info
If you're looking for a specific error message, use **Ctrl + F** (or **Cmd + F** on macOS) to quickly find it.
:::

::: tip NOTE
Each issue includes a badge showing the version in which I encountered it.  
This does **not** mean that the issue or solution only applies to that version.

If you discover that an issue or solution also applies to other versions, feel free to let me know so I can update it.
:::

## This registry can't create intrusive holders <Badge type="tip" text="1.21.8" />

### Fabric

This issue occurs when an item, block, or entity is registered at an unexpected point in time.
The most common cause is that the registration class was not initialized statically.

Another possible cause is that the Fabric API failed to load.
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
Each issue includes badges showing the **version** and **mod loader** where I encountered it.

This does **not** automatically mean the issue or solution applies *only* to that version or loader — but in some cases, it might.

If you find that it also applies to other versions or loaders, please let me know so I can update it.
:::

## This registry can't create intrusive holders <Badge type="warning" text="Fabric" /> <Badge type="tip" text="1.21.8" />

This issue occurs when an item, block, or entity is registered at an unexpected point in time.
The most common cause is that the registration class was not initialized statically.

Another possible cause is that the Fabric API failed to load.
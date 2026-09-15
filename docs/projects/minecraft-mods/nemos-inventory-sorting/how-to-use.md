---
outline:deep
---

# How to Use

## Sorting

With **Nemo's Inventory Sorting**, you get buttons to sort items, move identical or all items, and drop items.

Items with different component or NBT data are sorted separately. Container items, such as shulker boxes, are also sorted by their contents.

There are two ways to use these buttons:

### Mouse

Simply click the buttons, or **Shift-click** to include items in the hotbar.

### Keyboard

First, you need to set the key binds (they are unbound by default), which you can find in the key bind settings.  
Once configured, hover over the inventory you want to interact with and press the key bind.
Use **Shift + key bind** to include hotbar items when hovering over the inventory.

Set `includeHotbarByDefault` to `true` in `general.json` to include the hotbar by default.
Shift will then exclude the hotbar.

## Item Filter

Click the search bar to start searching for an item.  
You can search by **item name**, **custom name**, **enchantments**, or even for items inside **bundles** and **shulker boxes**.  
Click outside the search bar to stop searching.

You can also perform a quick search by pressing **Ctrl + F** (or **Command + F** on macOS). 
You can change the key binding in the settings.

### Filter by (Custom) Name
- `Golden`
- `Diamond Sword`
- `Super Cool Sword`

### Filter by Tooltip (Enchantment, Music Disc Song, Potions)
- `Sharpness`
- `Efficiency V`
- `Hyper Potions - Lava Chicken`
- `Lava Chicken`
- `Invisibility`

### Filter by Item Tag
- `#minecraft:planks`
- `#nemos:planks`

### Filter for multiple items
- `Stick,#minecraft:planks`

## Lock Slots

To lock slots from sorting, use **Alt + Click/Drag** (or **Option + Click/Drag** on macOS).
To display locked slots, hold **Alt** (or **Option** on macOS).

Set `enableSlotLocking` to `false` in `general.json` to disable slot locking.

## Quick Move Items

- **Shift + Drag**: quick-move hovered items
- **Shift + Right-Click/Drag**: quick-move half items
- **Scroll Up/Down**: move one item between inventory/container or inventory/hotbar
- **Shift + Scroll Up/Down**: also allow moving the last item from the source slot

::: tip Note
Split and normal scroll actions keep at least one item in the source slot.
Scrolling over an empty slot does nothing.
Result slots transfer their full result without Shift. This includes crafting, furnace and other result slots.
:::

The interactions can be toggled individually in `general.json` with `enableDragQuickMove`, `enableSplitQuickMove`, and `enableScrollTransfer`.

## Enable Dark Mode

To enable dark mode, activate the **Dark Mode** resource pack.

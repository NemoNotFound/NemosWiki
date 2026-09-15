---
outline: deep
---

# Configs

## Structure

The configs are stored under `config/nemos-inventory-sorting`.

- `components.json`: Component positions, sizes and visibility
- `general.json`: Inventory behavior
- `filter.json`: Persistent item filter
- `locked-slots.json`: Locked inventory slots
- `iron-chest-components.json`: Iron Chest component positions, sizes and visibility

In `components.json`, you'll find a list of configs structured as follows:

```json
[
  {
    "componentName": "sort_storage_container",
    "isEnabled": true,
    "xOffset": 100,
    "rightXOffset": -5,
    "yOffset": 5,
    "width": 11,
    "height": 11
  },
  ...
]
```

### Config Fields

- **componentName**
    - Specifies which component should be configured.
    - If the name doesn't match any pre-configured name, the config will be ignored.
- **isEnabled**
    - Determines whether the component is enabled (visible) or not.
- **xOffset**
    - Sets the X offset, starting from the left side.
- **rightXOffset**
    - Optional
    - Sets the X offset, starting from the right side. Ignored if xOffset is defined.
- **yOffset**
    - Sets the Y offset, starting from the top.
- **width**
    - Defines the component's width.
- **height**
    - Defines the component's height.
      <br><br>

## Default Configs

### General

```json
{
  "includeHotbarByDefault": false,
  "enableDragQuickMove": true,
  "enableSplitQuickMove": true,
  "enableScrollTransfer": true,
  "enableSlotLocking": true
}
```

- **includeHotbarByDefault**
    - Determines whether inventory actions include the hotbar by default.
    - When enabled, hold Shift to exclude the hotbar.
- **enableDragQuickMove**
    - Enables quick moving items with Shift + Drag.
- **enableSplitQuickMove**
    - Enables quick moving half of a stack with Shift + Right-Click/Drag.
- **enableScrollTransfer**
    - Enables moving items by scrolling over a slot.
- **enableSlotLocking**
    - Enables locking slots with Alt + Click/Drag.

### Standard Containers

```json
[
  {
    "componentName": "sort_storage_container",
    "isEnabled": true,
    "rightXOffset": -61,
    "yOffset": 5,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "move_same_storage_container",
    "isEnabled": true,
    "rightXOffset": -47,
    "yOffset": 5,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "move_all_storage_container",
    "isEnabled": true,
    "rightXOffset": -33,
    "yOffset": 5,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "drop_all_storage_container",
    "isEnabled": true,
    "rightXOffset": -19,
    "yOffset": 5,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "sort_storage_container_inventory",
    "isEnabled": true,
    "rightXOffset": -61,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "move_same_storage_container_inventory",
    "isEnabled": true,
    "rightXOffset": -47,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "move_all_storage_container_inventory",
    "isEnabled": true,
    "rightXOffset": -33,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "drop_all_storage_container_inventory",
    "isEnabled": true,
    "rightXOffset": -19,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "sort_inventory",
    "isEnabled": true,
    "xOffset": 136,
    "yOffset": 71,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "drop_all_inventory",
    "isEnabled": true,
    "xOffset": 154,
    "yOffset": 71,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "sort_container_inventory",
    "isEnabled": true,
    "xOffset": 136,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "drop_all_container_inventory",
    "isEnabled": true,
    "xOffset": 154,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "item_filter",
    "isEnabled": true,
    "yOffset": -16,
    "width": 77,
    "height": 15
  },
  {
    "componentName": "filter_persistence_toggle",
    "isEnabled": true,
    "yOffset": -15,
    "width": 13,
    "height": 13
  }
]
```

### Iron Chest (NeoForge)

```json
[
  {
    "componentName": "sort_storage_container",
    "isEnabled": true,
    "yOffset": 5,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "move_same_storage_container",
    "isEnabled": true,
    "yOffset": 5,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "move_all_storage_container",
    "isEnabled": true,
    "yOffset": 5,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "drop_all_storage_container",
    "isEnabled": true,
    "yOffset": 5,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "sort_storage_container_inventory",
    "isEnabled": true,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "move_same_storage_container_inventory",
    "isEnabled": true,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "move_all_storage_container_inventory",
    "isEnabled": true,
    "width": 11,
    "height": 11
  },
  {
    "componentName": "drop_all_storage_container_inventory",
    "isEnabled": true,
    "width": 11,
    "height": 11
  }
]
```

## Reset Config

### Partial Reset

To partially reset the config, manually update the values using the default config (see above).

### Complete Reset

To completely reset a config, delete its JSON file from `config/nemos-inventory-sorting`.
If there is no config file, the default values will be taken.
After restarting Minecraft, the config file will be generated again.

The old config files are automatically renamed:

- `config.json` → `components.json`
- `filter-config.json` → `filter.json`
- `locked-slots-config.json` → `locked-slots.json`
- `iron-chest-config.json` → `iron-chest-components.json`

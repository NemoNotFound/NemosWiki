---
outline: deep
---

# Custom Bars, Panes & Walls

This page explains how to add support for custom bars, panes, and walls — including behavior such as attachment, connectivity, and rendering between connected blocks.

## Making Bars Compatible

By adding your custom bars to the `#bars` block tag, most behavior will work automatically.

- All blocks in the `#bars` tag are breakable with a pickaxe.
- Bars will automatically attach to other panes, bars, and walls.
- The rendering logic skips rendering between connected blocks if both are in the `#bars` tag.

This ensures high compatibility with other custom bars that also use this tag.

## Attaching to Panes & Bars

Blocks added to the `#attaches_to_panes_and_bars` block tag will visually connect to glass panes and iron bars.

This tag also includes all blocks in the `#all_glass_panes` and `#bars` tags.

## Connecting to Walls

Blocks added to the `#connects_to_wall` block tag will visually connect to walls.

This tag also includes all blocks in the `#all_glass_panes` and `#bars` tags.

## Rendering Panes & Bars

The rendering logic has been updated to skip rendering between connected blocks if both blocks are in the same pane-related tag.

The following tags are currently considered:

- `#bars`
- `#glass_panes`
- `#stained_glass_panes/brown`
- `#stained_glass_panes/light_blue`
- `#stained_glass_panes/blue`
- `#stained_glass_panes/cyan`
- `#stained_glass_panes/red`
- `#stained_glass_panes/black`
- `#stained_glass_panes/yellow`
- `#stained_glass_panes/orange`
- `#stained_glass_panes/green`
- `#stained_glass_panes/lime`
- `#stained_glass_panes/purple`
- `#stained_glass_panes/pink`
- `#stained_glass_panes/magenta`
- `#stained_glass_panes/light_gray`
- `#stained_glass_panes/gray`
- `#stained_glass_panes/white`

---
outline: deep
---

# Configs

Nemo's Backpacks stores its config in `configs/nemos_backpacks.json`.

If [**YACL**](https://modrinth.com/mod/yacl) and [**Mod Menu**](https://modrinth.com/mod/modmenu) are installed, you can also change the config in-game through Mod Menu.

## Config Fields

### showBackpackHudIcon

Controls whether the backpack HUD icon is displayed.

## Default Configs

```json
{
  "showBackpackHudIcon": false
}
```

## Reset Config

### Partial Reset

To reset a single option, replace its value with the default value shown above.

If **YACL** and **Mod Menu** are installed, you can also use the reset button next to the option in the config screen.

### Complete Reset

To reset the entire config, close Minecraft and delete `configs/nemos_backpacks.json`.

The default values will be used if the file is missing. The config file will be generated again the next time you start Minecraft.

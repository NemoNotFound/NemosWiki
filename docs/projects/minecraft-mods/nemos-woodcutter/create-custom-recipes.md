---
outline: deep
---

# Create Custom Recipes

This page explains how to create woodcutting recipes for your mod or data pack.
You can create custom woodcutting recipes either manually or through data generation.

::: info
The following applies to Minecraft version **1.21.2** or higher.
:::

## Data Generation

If you want to add many recipes or keep them easy to maintain between version updates, I recommend using data generation.
Below, I’ll show you how to implement data generation for **Fabric**, **NeoForge**, and **Forge**.

Also, make sure to check out the helper methods available in the [WoodcutterRecipeProvider](https://github.com/NemoOnGH/NemosWoodcutter/blob/master/common/src/main/java/com/nemonotfound/nemos/woodcutter/datagen/WoodcutterRecipeProvider.java)!

### Fabric

I advise you to check out [Fabric's Data Generation Setup Guide](https://docs.fabricmc.net/develop/data-generation/setup) & [Fabric's Recipe Generation Guide](https://docs.fabricmc.net/develop/data-generation/recipes) to learn how to generate recipes.

You can create your recipes in one of the following two ways:

#### Create an anonymous subclass of WoodcutterRecipeProvider

In your recipe provider, you can simply create and register a `WoodcutterRecipeProvider` like this:

```java
    @Override
    protected RecipeGenerator getRecipeGenerator(RegistryWrapper.WrapperLookup wrapperLookup, RecipeExporter recipeExporter) {
        return new WoodcutterRecipeProvider(wrapperLookup, recipeExporter) {

            @Override
            public void generate() {
                //generate recipes here
            }
        };
    }
```

This lets you define your custom woodcutting recipes directly within the generate() method.

#### Create a custom RecipeProvider and extend the WoodcutterRecipeProvider

Another way is to create a custom `RecipeProvider` class that extends `WoodcutterRecipeProvider`:

```java
public class CustomWoodcuttingRecipeProvider extends WoodcutterRecipeProvider {

    public CustomWoodcuttingRecipeProvider(RegistryWrapper.WrapperLookup wrapperLookup, RecipeExporter recipeExporter) {
        super(wrapperLookup, recipeExporter);
    }

    @Override
    public void generate() {
        //generate recipes here
    }
}
```

You can then register your custom provider in your main recipe provider class:

```java
    @Override
    protected RecipeGenerator getRecipeGenerator(RegistryWrapper.WrapperLookup wrapperLookup, RecipeExporter recipeExporter) {
        return new CustomWoodcuttingRecipeProvider(wrapperLookup, recipeExporter);
    }
```

This approach helps to keep your code organized, especially if you're generating a large number of recipes.

### NeoForge / Forge

Refer to [Forge's](https://docs.minecraftforge.net/en/1.21.x/datagen/) or [NeoForge's](https://docs.neoforged.net/docs/resources/#data-generation) documentation for general data generation setup.

Here is an example setup:

```java
public class CustomWoodcuttingRecipeProvider extends WoodcutterRecipeProvider {

    public CustomWoodcuttingRecipeProvider (HolderLookup.Provider provider, RecipeOutput output) {
        super(provider, output);
    }

    public static class Runner extends RecipeProvider.Runner {

        public Runner(PackOutput output, CompletableFuture<HolderLookup.Provider> provider) {
            super(output, provider);
        }

        @Override
        protected @NotNull RecipeProvider createRecipeProvider(HolderLookup.@NotNull Provider provider, @NotNull RecipeOutput output) {
            return new CustomWoodcuttingRecipeProvider (provider, output);
        }

        @Override
        public @NotNull String getName() {
            return "...";
        }
    }

    @Override
    protected void buildRecipes() {
        //generate recipes here
    }
}
```

## Manually

Here is an example of a woodcutting recipe as a JSON file:

```json
{
  "type": "nemos_woodcutter:woodcutting",
  "ingredient": "minecraft:acacia_planks",
  "inputCount": 1,
  "result": {
    "count": 3,
    "id": "minecraft:acacia_sign"
  }
}
```

Now place this file under the `data/your-namespace/recipes/` directory.

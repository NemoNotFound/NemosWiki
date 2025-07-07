# CurseForge Upload API

The CurseForge API allows users to automate the management of their projects and retrieve data such as game versions, dependencies, and more from CurseForge.

::: info
All URIs are relative to the site the project is hosted on (e.g., https://minecraft.curseforge.com), unless stated otherwise.
:::

## Generate a token

To use the CurseForge Upload API, you first need to generate an API token.

1. Visit the [API Tokens page](https://legacy.curseforge.com/account/api-tokens).
2. Give the token a recognizable name and generate it.
3. Copy the token and store it securely - you'll need it for authentication in your API requests.

::: danger
⚠️ **Keep your token private.** If exposed, revoke and regenerate it immediately.
:::

## Authentication

To authenticate with the API, you must include your generated token in one of the following ways:

### Option 1: HTTP Header

Include the token as a header in your request:
`X-Api-Token: your_token_here`

### Option 2: Query Parameter

Alternatively, append the token as a query parameter:
`?token=your_token_here`

::: warning
⚠️ **Note:** Use HTTPS to ensure your token is transmitted securely.
:::

## Project Upload File API

To upload a file, send a POST request to:  
`/api/projects/{projectId}/upload-file`

The request must be of type `multipart/form-data` and include two fields:

- `metadata`: A JSON string containing metadata about the file.
- `file`: The actual file to upload.

### Sepcification

#### `projectId`

The ID of your project. Found in the URL when you go to its overview page.

#### `metadata`

The request payload containing metadata about the file.

```json
{
  "changelog": "A string describing changes.",
  "changelogType": "markdown",
  "displayName": "Nemo's Mod Title",
  "parentFileID": 42,
  "gameVersions": [157, 158],
  "releaseType": "release",
  "isMarkedForManualRelease": false,
  "relations": {
    "projects": [
      {
        "slug": "nemos-mod",
        "projectID": "74924",
        "type": "requiredDependency"
      }
    ]
  }
}
```

| Field                      | Required? | Description                                                                                                                                                                                                                                         | Default Value                               |
| -------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `changelog`                | Required  | A string describing changes                                                                                                                                                                                                                         | None                                        |
| `changelogType`            | Optional  | One of `"text"`, `"html"`, or `"markdown"`                                                                                                                                                                                                          | `"text"`                                    |
| `displayName`              | Optional  | A friendly name shown on CurseForge                                                                                                                                                                                                                 | If omitted, the file name will be displayed |
| `parentFileID`             | Optional  | The ID of the parent file <br><br> If set, gameVersions must not be provided                                                                                                                                                                        | None                                        |
| `gameVersions`             | Required  | Leave empty if `parentFileID` is set <br><br> Use version IDs retrieved from the [Game Versions API](#game-versions-api) <br><br> If your file targets a specific mod loader (e.g., Fabric), you **must also** include the mod loader's version ID. | None                                        |
| `releaseType`              | Required  | One of `"alpha"`, `"beta"`, or `"release"`                                                                                                                                                                                                          | None                                        |
| `isMarkedForManualRelease` | Optional  | If `true`, file must be manually released after approval                                                                                                                                                                                            | `false`                                     |
| `slug`                     | Required  | The slug of a related project, as found in its CurseForge URL                                                                                                                                                                                       | None                                        |
| `projectID`                | Optional  | Used to get an exact project match                                                                                                                                                                                                                  | None                                        |
| `type`                     | Required  | One of: <br>`"embeddedLibrary"`, <br> `"incompatible"`, <br>`"optionalDependency"`, <br>`"requiredDependency"`, <br>`"tool"`                                                                                                                        | None                                        |

### `file`

The actual file to upload (e.g., the JAR file of your Minecraft mod).

## Project File Management API

_To be documented._

## Game Versions API

The **Game Version API** allows you to retrieve version IDs for game versions, mod loaders, Java versions and server-side environments.
To get the list of available versions, issue a `GET` request to:  
`/api/game/versions`.

It returns an array of JSON objects, each representing a game version.

### Specifiaction

#### `Version`

Each `version` object looks like this:

```json
{
  "id": 158,
  "gameVersionTypeID": 42,
  "name": "1.8.4",
  "slug": "1-8-4"
}
```

| Field               | Description                                                                                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                | The ID to specify in the file upload/management API under `gameVersions`                                                                                                                                           |
| `gameVersionTypeID` | Each minor version has its own `gameVersionTypeID` <br> For example: All Minecraft **1.21.\*** versions share the `gameVersionTypeID` **77784** <br><br>This may differ for other games, as I couldn't test those. |

::: info
Mod loaders are handled separately — for example, mod loaders for Minecraft use the `gameVersionTypeID` **68441**.

<br>**Hint:**  
 To get Minecraft's `gameVersionTypeIDs`, check out CurseForge's [Get Minecraft Versions API](https://docs.curseforge.com/rest-api/#get-minecraft-versions).  
 To get the `gameVersionTypeIDs` for other games, use the [Get Version Types API](https://docs.curseforge.com/rest-api/#get-version-types).
:::

### Most used Version IDs

#### Mod Loader Version IDs

|   Mod Loader   | Fabric | Forge  | NeoForge | Quilt  |  Rift  | Risugami's ModLoader | Flint Loader |
| :------------: | :----: | :----: | :------: | :----: | :----: | :------------------: | :----------: |
| **Version ID** | `7499` | `7498` | `10150`  | `9153` | `7500` |        `9967`        |   `10677`    |

#### Server-Side Environment IDs

|  Environment   | Client | Server |
| :------------: | :----: | :----: |
| **Version ID** | `9638` | `9639` |

#### Java Version IDs

| Java Version   | 22      | 21      | 20      | 19      | 18     | 17     | 16     | 15     | 14     | 13     | 12     | 11     | 10     | 9      | 8      | 7      | 6      |
| -------------- | ------- | ------- | ------- | ------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| **Version ID** | `11136` | `11135` | `11134` | `11133` | `8634` | `8326` | `8325` | `8324` | `8323` | `8322` | `8321` | `8320` | `7113` | `6762` | `4458` | `4457` | `4456` |

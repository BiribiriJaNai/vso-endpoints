# Custom service connections collection

List of service connections types:
 - Nexus Lifecycle
 - EIP

# How to build

## Prerequisites

 > Before use, globally install the following components.  
 > Once the tools are installed, run `npm install` in the root folder of the repository.  

| Tool | Version | Mandatory |
|:---|:---|:---|
| [Node 6.X LTS](https://nodejs.org/dist/latest-v6.x/) | >= 6.15.1 | Yes |
| Npm | >= 3.10.10 | Yes |
| [Node CLI for Azure DevOps](https://www.npmjs.com/package/tfx-cli) | >= 0.6.1 | No |

## Commands

| Command | Description |
|:---|:---|
| `npm run clean` | Clean-up `dist` output directory and remove existing `.vsix` files |
| `npm run version` | Create files for overriding extension version (locally) |
| `npm run package:dev` | Creates the development version of the extension in the `dist/dev` directory |
| `npm run package:prod` | Create the production version of the extension in the `dist/prod` directory |
| `npm run package` | Successively run the following commands `clean`, `package:dev` et `package:prod` |

  > __Note :__
  > Before running `npm run package(dev|prod)`, run `npm run version` to create local files used for the extension versioning (override).

# Build
The `ci` directory contains the build definition in two separate YAML files.
 - `version.yml` is a template file for querying the latest version from the marketplace and store the incremented version in a file for overriding.
 - `endpoints.yml` contains the main steps for the build.
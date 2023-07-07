# Syncify Strap ~ Dawn Basic

Basic level[Syncify](https://github.com/panoply/syncify) strap building the Shopify [Dawn](https://github.com/Shopify/dawn) theme. This example is the most low level (elementary) configurations for building themes leveraging Syncify.

### Showcasing

Consult the [syncify.config.ts](/syncify.config.ts) for the configuration options. This strap demonstrates the following:

- Bundles JavaScript leveraging an ESBuild transform.
- Bundles CSS using PostCSS + Autoprefixer transform
- Generates an SVG Sprite using the SVG transform.
- Provides a sub-directory examples in sections and snippets
- Applies terse minification in build mode

**Please note that Syncify is still in beta and not all capabilities are available**

# Instructions

Fork or download this repository. You should use install [pnpm](https://pnpm.js.org/en/cli/install) and use it instead of npm or yarn (though they are also supported). The first thing you need to do is install the dependencies.

1. `pnpm i`
2. `pnpm build`

Go to the [Syncify](https://github.com/panoply/syncify) repository and review readme for more information.

### Requirements

You will need to update the `env.example` file first. Say (for example) your myshopify store name is `sissel` - you will need to define this information.

Rename the `.env.example` file to `.env` and enter the following:

```bash
# EXAMPLE ADMIN API TOKEN - CHANGE TO YOUR STORE NAME
#
sissel_api_token = 'TOKEN-GOES-HERE'
```

After updating the `.env` with you admin API token, open the `syncify.config.ts` file. Now we need to define your store and theme targets. You will need to have a reference of theme ids for this step.

Replace the theme id of `12345679` with your theme id.

```ts
export default defineConfig({
  stores: {
    domain: 'sissel', // Equivalent to "sissel.myshopify.com", change to your store name
    themes: {
      dev: 123456789 // The name "dev" is used as a target, the id is the theme id.
    }
  }
});
```

Lastly, open up the `package.json` file. We will provide our store information to the pre-defined commands lists. Replace all the occurrences of `sissel` with your defined store name.

```json
{
  "scripts": {
    "dev": "syncify sissel --theme dev --watch --hot",
    "build": "syncify --build --prod --clean",
    "upload": "syncify sissel --theme dev --upload",
    "download": "syncify sissel --theme dev --download"
  }
}
```

We are now ready for development. Before going ahead, clear your mind, because the Syncify way, is not the same as the Shopify way when it comes to theme development. The Shopify approach is just one way a developer can build a theme, it's not the only way. Syncify might take some getting used to, but you will be more productive choosing this approach and above all else, you won't be locked into a restrictive workflow.

### Commands

The following commands are already wired up:

```bash
pnpm dev               # Runs Syncify in development mode with hot reloads
pnpm build             # Runs Syncify in build mode with minification (terse)
pnpm upload            # Runs Syncify in upload mode and publishes it online
pnpm download          # Runs Syncify in download mode and download the theme
```

### Structure

Consult the `syncify.config.ts` file located in the root of this directory to review how the configuration model is composed. This is basic strap, it intent to introduce you the potential of Syncify and thus the structure is almost identical to that of Dawn, the difference being is that files are located in a `source` directory. Assets such as JavaScript/CSS files, are located in sub-directories and lastly, the snippet icon files are also located in a sub-directory (within `source/snippets`).

See the below directory structure reference:

```bash
├── source
│   │ 
│   ├── assets
│   │   ├── scripts      # Contains all the Dawn JavaScript files
│   │   ├── styles       # Contains all the Dawn CSS files
│   │   ├── svg          # Contains couple of SVG icons to show how Syncify Sprites work
│   │   └── images       # Contains all the Dawn image files
│   ├── config           # Contains all of the Dawn config files
│   ├── layout           # Contains all of the Dawn layout files
│   ├── locales          # Contains all of the Dawn locales files
│   ├── sections         # Contains all of the Dawn section files
│   │   └──  example     # Contains a single file to show how Syncify sub-directory sections work
│   ├── snippets         # Contains all of the Dawn snippet files
│   │   ├── icons        # Contains all the the Dawn snippets files starting with "icon."
│   │   └── example      # Contains a single file to show how Syncify sub-directory snippets work
│   └── templates        # Contains all of the Dawn template files
│ 
├── .env.example         # The example environment file you will change this to .env
├── readme.md            # This readme file
├── redirects.yaml       # An empty file for future features in later releases
├── package.json         # The package file where commands and dependencies are kept
├── syncify.config.ts    # The syncify config file which controls the build
└── tsconfig.json        # TypeScript configuration
```

### Related

- [Dawn Advanced](https://github.com/panoply/syncify-dawn-advanced)

# License

MIT

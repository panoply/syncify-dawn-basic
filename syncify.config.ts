import { defineConfig } from '@syncify/cli';

export default defineConfig({

  clean: true,
  input: 'source',
  output: 'theme',

  // THEME BASE PATHS

  paths: {
    assets: 'assets/images/*',
    config: 'config/*',
    locales: 'locales/*',
    snippets: 'snippets/**/*',
    sections: 'sections/**/*',
    customers: 'templates/customers/*',
    templates: 'templates/*',
    layout: 'layout/*'
  },

  // ADD YOUR STORE/S + THEME/S

  stores: {
    domain: 'syncify', // Replace this with your store domain
    themes: {
      dev: 136656060657 // Replace this with your theme id
    }
  },

  // VIEW TRANSFORMS FOR THEME FILES

  views: {
    sections: {
      prefixDir: false,
      separator: '-',
      global: []
    },
    snippets: {
      prefixDir: true,
      separator: '-',
      global: [ 'icons' ] // Snippets in this directory will pass-through
    }
  },

  // TRANSFORM CONFIGURATION FOR ASSETS

  transforms: {
    script: {
      'assets/[file]': 'assets/scripts/*.js'
    },
    style: {
      'assets/[file]': {
        input: 'assets/styles/*.css',
        postcss: [
          require('autoprefixer')()
        ]
      }
    },
    svg: {
      'snippets/sprite.liquid': {
        input: 'assets/svg/*',
        format: 'sprite',
        sprite: {
          svg: {
            dimensionAttributes: true,
            namespaceClassnames: true,
            namespaceIDs: false
          }
        }
      }
    }
  },

  processors: {
    esbuild: {
      sourcemap: false
    }
  },

  // MINIFICATION OPTIONS

  terser: {
    json: false,
    script: false,
    views: false
  }
});

# HISTORY OF DESIGN KIT - 3

## A. Setup [styled-components](https://styled-components.com/docs/basics#installation)

```bash
# Install version 5
npm install --save-dev styled-components@">=5.3.6 <6.0.0"
npm install --save-dev @types/styled-components@">=5.1.26 <6.0.0"
```

> _**Note:** Maybe need to migrate from 5 to 6 on `styled-components` library_
>
> The package [`@types/styled-compnents` still latest version is `5.1.26` version before a years ago](https://www.npmjs.com/package/@types/styled-components?activeTab=versions).
> And the package [`styled-components` is recently edited at `6.0.x` version, but major usages are at `5.3.x` version.](https://www.npmjs.com/package/styled-components?activeTab=versions).

```ruby
# Related scripts
./
├── .storybook/
│   ├── Tokens/
│   │   └── Color.stories.tsx
│   ├── decorators./
│   │   ├── index.js
│   │   └── withTheme.decorator.js
│   ├── main.ts
│   └── preview.ts
│
└── stories/
    ├── Atoms/
    │   ├── Button/
    │   │   ├── Button.stories.tsx
    │   │   ├── Button.styled.ts
    │   │   ├── Button.tsx
    │   │   ├── Button.types.ts
    │   │   └── index.ts
    │   └── index.ts
    └── theme/
        ├── index.ts
        ├── theme.ts
        └── types.ts
```

## B. Enable Styled-component in Next.js SSR cycle

Key concept: [styled-components > Server Side Rendering][styled-component-ssr]

[styled-component-ssr]: https://styled-components.com/docs/advanced#server-side-rendering

[**babel-plugin** for styled-components](https://styled-components.com/docs/tooling#babel-plugin):

```bash
# Install plugin
npm install --save-dev babel-plugin-styled-components
```

Set babel configuration: [`.babelrc`](.babelrc)

```json
{
  // ..
  "plugins": [
    // ..
    "babel-plugin-styled-components"
  ]
}
```

## C. Setup [@storybook/addon-designs](https://github.com/storybookjs/addon-designs#readme) for Figma

> A Storybook addon that embed Figma or websites in the addon panel for better design-development workflow.

1. Install

   ```bash
   npm install -D @storybook/addon-designs
   ```

2. Register the addon in [`main.ts`](.storybook/main.ts)

   ```typescript
   // .storybook/main.ts
   import type { StorybookConfig } from "@storybook/react-webpack5";
   const config: StorybookConfig = {
     // ...
     addons: [
       "@storybook/addon-designs", // add this!
     ],
     // ...
   };
   ```

3. Set environment variable: `TOY_DK_FIGMA_URL`

   ```bash
   # Setting
   export TOY_DK_FIGMA_URL="__FIGMA_PROJECT_URL__"

   # Check
   env | grep "TOY_DK"
   ```

   Copy the value to `.env` file using [`envsubst`](https://www.baeldung.com/linux/envsubst-command)

   ```bash
   # Backup first, if exist
   [ -f .env ] \
     && mv .env ".env.x.$(date '+%y-%m-%d_%H-%M-%S')" \
     || echo "Nothing to backup"

   # Set on file
   envsubst < .env.template >> .env
   ```

   Add [`.gitignore`](.gitignore) for all `.env` files exclude [`.env.template`](./.env.template)

   ```gitignore
   ### Injection Poinst - Sensivie Data ###
   *.env.*
   !.env.template
   ```

4. [Add it to story!](https://github.com/storybookjs/addon-designs#3-add-it-to-story)

   ```typescript
   // stories/*.stories.ts
   const meta: Meta<typeof C> = {
     // ...
     parameters: {
       design: {
         type: "figma",
         url: `${process.env.TOY_DK_FIGMA_URL}?node-id=0-0`,
       },
     },
   };
   ```

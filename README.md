# PromptGuessr

PromptGuessr is a browser-based game that is like [Pictionary](https://en.wikipedia.org/wiki/Pictionary) with an AI Image Generation twist.

Using a Stable Diffusion API, players can generate images when it's their turn to "draw". Once all player's images have been generated, players will try and guess what prompt a user put in to generate their image.

### Technologies

To install all dependencies & technologies for the project, clone the project and `cd ./promptguessr` and `npm install`

#### Technologies Used
* Turborepo
* TypeScript
* React (Vite)
* tanstack-query (react-query)
* react-router
* Material UI
* lodash
* NodeJS
* Express

### Requirements

This project is using Supabase, which requires a separate Supabase project `API_URL` and `API_KEY`. These files go in the `.env` file of the `/apps/pg-frontend/` directory.

It's also required that you're running `node 14.0.0+`

### Apps and Packages

- `pg-backend`: An `express` application
- `pg-frontend`: A `vite` + `react` application
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm dev
```

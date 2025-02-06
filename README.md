# showcase-frontend-tooling

This is a sample project to showcase some frontend tools which I find quite helpful.
This project was used in my Codineers talk in February 2025.

## Project Setup

```sh
npm install
```

### Manually

```shell
# switch to folder of your choice
git clone https://github.com/gothinkster/spring-boot-realworld-example-app.git # checkout sprint boot realworld example
cd spring-boot-realworld-example-app 
./gradlew bootrun
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

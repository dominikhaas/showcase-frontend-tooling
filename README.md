# showcase-frontend-tooling
This is a sample project to showcase several frontend tools that I find quite helpful. 
This project was presented in my [Codineers](https://www.meetup.com/de-DE/Codineers-Meetup/) talk in February 2025. 
It demonstrates the transition from legacy tooling to modern alternatives, with intentional errors and code smells included (all on purpose ;-) ).

## Start dev server and backend
Install dependencies and start dev server:
```sh
npm install && npm run dev
```

Start the backend:
```shell
# switch to folder of your choice
git clone https://github.com/gothinkster/spring-boot-realworld-example-app.git # checkout sprint boot realworld example
cd spring-boot-realworld-example-app 
./gradlew bootrun
```

## Sample project setup

### Code quality and enforcement
I use a QA script in `package.json` to lint, format, test architecture and run unit test.
```
"qa": "npm run lint && npm run format && npm run arch:test && npm run test:unit -- --run",
```
I use [husky](https://github.com/typicode/husky) to automatically run the QA script before pushing changes. 


### Architecture visualisation and validation
I use [dependency-cruiser](https://github.com/sverweij/dependency-cruiser) to visualize and validate the architecture.
Both tasks are defined as scripts in `package.json`.

### Testing
I use [Vitest](https://vitest.dev/) for unit testing (simply because it's the default). I do integration tests for multiple components at once. 
For example: [ArticleViewPage.test.ts](src/article/__tests__/ArticleViewPage.test.ts)

For end-to-end (e2e) tests, I use [Playwright](https://playwright.dev/) and follow the page object pattern.
For example: [articles.spec.ts](e2e/articles.spec.ts)

To run e2e tests:
```sh
npm run test:e2e
```

### Visual development and visual regression testing
I use [Storybook](https://storybook.js.org/) to develop, document and test UI components.
For visual regression testing, I use [Storycap](https://github.com/reg-viz/storycap) and [Reg-cli](https://github.com/reg-viz/reg-cli).

To run visual regression tests:
```shell
npm run storycap
```
### Backend
I use [Hey API](https://heyapi.dev/) to generate client code and Zod schemas.
The client code can be found in the package [client](src/client).

### Form validation
I use [VeeValidate](https://vee-validate.logaretm.com/v4/) for form validation based on Zod schemas.
See the [SignUp.vue](src/user/SignUp.vue) component for an example
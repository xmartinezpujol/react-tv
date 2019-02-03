# react-tv
React App to watch movies &amp; tv shows

![React Tv](react-tv.png?raw=true "React-Tv")

### Client localhost (http://localhost:5000)
Node/NPM required to install dependencies.

Clone rep
``` shell
git clone https://github.com/xmartinezpujol/react-tv.git
```

Install dependencies
``` shell
npm install
```

Start development
``` shell
npm start
```

Run Storybook (UI Explorer) at http://localhost:6006
``` shell
npm run storybook
```

Build Storybook Static
``` shell
npm run build-storybook
```

Make Production Bundle
``` shell
npm run build
```

### Testing

* Unit & Snapshot tests done in Jest. 

``` shell
npm run test
```

* Integration/E2E tests done in Cypress. 

``` shell
npm run teste2e
```

### Workflow

1) Dev/Prod environment setup.
2) Storybook up & running + first stateless components. Mocked info.
3) Proptypes.
4) Cypress setup.
5) Client-side routing with React Router.
6) Test some ideas for Carousels & Card compoents in Storybook.
7) Responsive/Compatibility check.
8) Animations & State Control.
9) Add E2E tests in Cypress + Refactoring.

### Considerations

* ESLint + AirnBnB Styleguide is used for code linting.

* Storybook is used for component development, following the Component Driven Design (CDD) mindset. Snapshots and UI testing could be added there also. This is a common ground with designers also to improve the companies visual Styleguide and use it as a UI Explorer.

* Cypress has automated tests for both components, start the client first (the localhost:5000), then Cypress. I've tested rendering and state. In Cypress I only tested the user journey of opening a Trailer from Home to Movie detail to show how the framework works. Add more cases to improve testing confidence. For CI/CD, Jest & Cypress could be added in a Jenkins pipeline.

## Refactoring / Improvements

* Texts should be FormattedMessages from react-intl (or similar intl libs) to support multilingual functionality.

* Dev environment could be done in Docker containers.

* Improve test code coverage. At least all presentational components.

* Move all presentational components and some containers (if used regularly) to an external lib (npm is an option). That way we can import and reuse component in different projects.

* Bundle size is currently not a problem. For a bigger project, use chunks in Webpack or libs like React Loadable.

* I recommmend virtualized lists in case we have to load more carousels (suggestion: react-virtualized)

* Image loading could be improved. Some useful techniques here: https://images.guide/

### Tech Stack
ReactJS, Router, Glamorous, Storybook, Webpack4, Cypress.


## Disclaimer

* Can't seem to work with CORS on RakutenTv server, probably because Origin is not allowed, which is normal being localhost. I had to use a proxy. In a normal dev environment maybe you have also a server on localhost (with Kubernetes/Docker or something like that) or allow a dev domain/IP. Nginx config could be modified also to improve those cases if needed. 

    That's why my code has the proxyUrl on the reducers, because even my build on Github needs proxying. For a Production Ready solution, move the proxyUrl (if needed in dev) to Webpack Config plugin variables and call in dev config the url and blank in prod config.


* especial-x-men list doesn't exist. I saw the 404 from API, but left it on the requested lists so you can see that deprecated lists have no impact on the normal behaviour of the app. If a list fails, everything just works fine.

* I had no endpoint for the Home Hero Carousel, so I ended up mocking it with images from The Movie Database.

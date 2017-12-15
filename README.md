# Generator-ts-library

> A yeoman generator for quickly starting Typescript-based Library Projects

## Boilerplate Include

1. TS linting
2. Jest Testing w/ TS integration
3. TypeDocs Documentation

Webpack configuration is pretty easily understandable. I compose the complete configuration based on the environment(development|production). Go in and extend at your own will. Testing is handled entirely by Jest w/ TS-jest(so no need for a webpack/ts-loader step, which made things a lot simpler).
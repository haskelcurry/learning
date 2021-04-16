# Frontend
Run `yarn` to install the dependencies.  
Commands:  
`compile-api` -- compile the `../api` files into single `compiled.yaml` file
`gen-api` -- generate Angular services and models based on API def, place it in `src/app/api`  
`test-api` -- test the backend API on `localhost:3000` against the API def
`visualize-api` -- run Swagger UI
`dev` -- run Angular in dev mode
`dev-mock` -- run Angular in dev mode + fake data server with Prism
`dev-proxy` -- run Angular in dev mode + Prism in [proxy mode](https://meta.stoplight.io/docs/prism/docs/guides/03-validation-proxy.md)

# Additional notes
Note that the `ng-openapi-gen` is taken from my fork:
```
  "ng-openapi-gen": "github:mtuzinskiy/ng-openapi-gen#media-type-with-charset-build",
```
That's because the latest version has one bug that didn't allow me to use NestJS. 
I submitted the PR, but it's gonna take time for their team to release the new version.  
In short, just install the latest version on your project, it will work for you as is.


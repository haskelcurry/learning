// “Perfection is Achieved Not When There Is Nothing More to Add,
// But When There Is Nothing Left to Take Away”
//
// Antoine de Saint-Exupery
//
@NgModule({
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: multiTranslateLoaderFactory([
          ...ASSETS_FOLDERS,
          ...SHARED_ASSETS_FOLDERS
        ]),
        deps: [HttpClient]
      },
      // isolate: true
    })
  ]
})
export class TranslateAssetsModule {
  ...
}

// Uncle Bob
// https://github.com/ryanmcdermott/clean-code-javascript
// picture

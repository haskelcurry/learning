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

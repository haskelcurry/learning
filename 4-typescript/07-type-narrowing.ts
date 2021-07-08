// We already know 1. 'in' operator narrowing,
// 2. discriminant property
// Now let's have a look at another type of narrowing: typeguards!

import {
  HttpEvent,
  HttpEventType,
  HttpResponse,
  HttpProgressEvent,
} from '@angular/common/http'

function isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
  return event.type === HttpEventType.Response
}

function isHttpProgressEvent(
  event: HttpEvent<unknown>
): event is HttpProgressEvent {
  return (
    event.type === HttpEventType.DownloadProgress ||
    event.type === HttpEventType.UploadProgress
  )
}

// So, it's a typeguard narrowing. There are some other kinds of narrowing:

https://www.typescriptlang.org/docs/handbook/2/narrowing.html
https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking

// At this point,
// note how we get on a higher level: the level of typechecker, and not the runtime
//
// We manipulate the types in a similar way we manipulate variables: declare them, 
// assign them, change them etc.  
// And sole purpose of this level is to help us, assist us in 
// _catching the errors_ and _documenting our code_.
//
// By mastering this level, you can make your code less error-prone, or "typesafe"


// 1:30

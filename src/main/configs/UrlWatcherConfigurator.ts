// import { Routes } from "src/services/navigator/Routes";
// import { Router } from "src/newCore/Router";


// class UrlWatcherConfigurator {
//    constructor(
//       private router: Router<Routes>,
//       private urlWatcher,
//       private logger
//    ) { }

//    setPaths() {
//       this.urlWatcher.add('*', { passNext: true }, ({ params, query, url }) => {
//          this.logger.log(url)
//       })

//       this.urlWatcher.add('/user/:name', ({ params, query }) => {
//          this.router.set('USER', {
//             name: params.name,
//             age: query.age
//          })
//       })

//       this.urlWatcher.add('/book/:name/:id?', ({ params, query }) => {
//          this.router.set('BOOK', {
//             name: params.name,
//             author: query.author,
//             year: query.year,
//             id: params.id
//          })
//       })

//       this.urlWatcher.add('*', ({ params, query, url }) => {
//          this.router.set('PAGE404', {
//             url: url
//          })
//       })
//    }

// }


// export { UrlWatcherConfigurator }
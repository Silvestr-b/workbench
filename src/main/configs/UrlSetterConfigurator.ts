// import { Routes } from "src/services/navigator/Routes";
// import { Router } from "src/core/Router";


// class UrlSetterConfigurator {
//    constructor(
//       private router: Router<Routes>, 
//       private urlSetter
//    ){}

//    setRoutes(){
//       this.router.setListeners({
//          'USER': route => (
//             this.urlSetter.getBuilder()
//                .directory('user')
//                .directory(route.name)
//                .parametr('age', route.age)
//                .build()
//          ),
//          'BOOK': route => (
//             this.urlSetter.getBuilder()
//                .directory('book')
//                .directory(route.name)
//                .directory(route.id || '')
//                .parametr('author', route.author)
//                .parametr('year', route.year)
//                .build()
//          ),
//          'PAGE404': route => (
//             this.urlSetter.getBuilder()
//                .directory('404')
//                .build()
//          )
//       })
//    }
// }


// export { UrlSetterConfigurator }

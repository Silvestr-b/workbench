// import * as React from 'react'
// import { computed, observable, autorun } from 'mobx'
// import { observer, Provider, inject } from 'mobx-react'
// import { navigator as navigationService, Routes } from '../../services/navigator'
// import './IndexPage.css'
// import * as path from 'path-to-regexp'

// (window as any).path = path

// class Resolver {
//    async getContainer(){
//       const mod = await import('../../core/DIContainer')
//       return new mod.Container()
//    }
// }

// (async () => {
//    const resolver = new Resolver();
//    const container = await resolver.getContainer()
//    console.log(container)
// })();


// class BookService {
//    @computed get book(){
//       return navigationService.route.Route('BOOK', payload => ({
//          name: payload.name,
//          author: payload.author || '',
//          year: payload.year || ''
//       }), {
//          name: '',
//          author: '',
//          year: ''
//       })
//    }
// }
// class UserService {
//    @computed get user(){
//       return navigationService.route.Route('USER', payload => ({
//          name: payload.name,
//          age: payload.age || ''
//       }), {
//          name: '',
//          age: ''
//       })
//    }
// }
// const userService = new UserService();
// const bookService = new BookService();


// @observer
// class IndexPage extends React.Component<any, any> {
//    private buttons = [{
//       id: 1, 
//       text: 'Первая',
//       onClick: () => navigationService.set('BOOK', { name: 'Testing', author: 'Jenny' })
//    },{
//       id: 2, 
//       text: 'Вторая',
//       onClick: () => navigationService.set('BOOK', { name: 'JavaScript', author: 'Silvestr', id: '5' })
//    },{
//       id: 3, 
//       text: 'Третья',
//       onClick: () => navigationService.set('BOOK', { name: 'MotorBike', author: 'Silvestr', year: '1997' })
//    }];
//    render(){
//       const { Route } = navigationService.route;
//       console.log(navigationService.route)
//       return (
//          <PageRoot>
//             <NavMenu items={this.buttons} />
//             {Route('USER', <UserPageContainer />)}
//             {Route('BOOK', <BookPageContainer />)}
//          </PageRoot>   
//       )
//    }
// }


// const PageRoot = ({ children }: { children }) => (
//    <div block="page">
//       <div elem="container">
//          {children}
//       </div>
//    </div>
// )


// const NavMenu = ({ items }: { items }) => (
//    <div block="navmenu">
//       {items.map(button => (
//          <button elem="button" key={button.id} onClick={button.onClick}>{button.text}</button>
//       ))}
//    </div>
// )


// const UserPageContainer = () => (
//    <UserPage 
//       userName={userService.user.name}
//       userAge={userService.user.age}
//    />
// )
// const UserPage = ({ userName, userAge }: { userName: string, userAge: string }) => (
//    <div block="userpage">
//       <h1 elem="header">USER</h1>
//       <h2 elem="name">name: {userName}</h2>
//       <h2 elem="age">age: {userAge}</h2>
//    </div>
// )


// const BookPageContainer = () => (
//    <BookPage 
//       bookName={bookService.book.name}
//       authorIsVisible={bookService.book.author === 'Silvestr'}
//       author={bookService.book.author}
//       yearIsVisible={bookService.book.year === '1997'}
//       year={bookService.book.year}
//    />
// )
// const BookPage = ({ bookName, authorIsVisible, author, yearIsVisible, year }: any) => (
//    <div block="bookpage">
//       <h1 elem="header">BOOK</h1>
//       <h2 elem="name">name: {bookName}</h2>
//       {authorIsVisible && <h2 elem="author">author: {author}</h2>}
//       {yearIsVisible && <h2 elem="year">year: {year}</h2>}
//    </div>
// )


// export { IndexPage }
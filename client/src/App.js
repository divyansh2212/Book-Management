import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import AddBook from './components/AddBook.js'
import Books from "./components/Book.js/Books.js"
import BookDetail from "./components/Book.js/BookDetail.js"

const App = () => {
  return <React.Fragment>
    <header>
      <Header />
    </header>

    <main>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/add' element={<AddBook />} exact />
        <Route path='/books' element={<Books />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/books/:id' element={<BookDetail />} exact />
      </Routes>
    </main>
  </React.Fragment>
}

export default App
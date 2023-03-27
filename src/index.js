// 3:04:13

import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { books } from './Books'
import Book from './Book'

const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)

// 'https://www.amazon.com/Best-Sellers-Books/zgbs/books'

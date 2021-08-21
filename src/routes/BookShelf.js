import React from 'react'
import Book from './Book'

export default function BookShelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {props.books.map(book => (
                        <li>
                            <Book
                                // book={book}
                                key={book.id}
                                {...book}
                                changeShelf={props.changeShelf}
                            />
                        </li>
                    ))}

                </ol>
            </div>
        </div>
    )
}
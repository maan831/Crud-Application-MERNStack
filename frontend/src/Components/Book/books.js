import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './book';
import './Book.css'
const URL = "http://localhost:5000/books";

const fetchHandler = async()=>{
 return await axios.get(URL).then((res)=>res.data)
}

const Books = () => {
    const [books,setbooks] = useState();
   useEffect(()=>{
    fetchHandler().then((data)=>setbooks(data.books))
   },[]);
   console.log(books);
  return (
    <div>
        <ul>
            {books && books.map((book,i)=>(
                <li className='book' key={i}>
                    <Book book={book}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Books
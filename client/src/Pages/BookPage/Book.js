import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../Hooks/UseAuthContext/useAuthContext";

import "./Bookstyle.css";

const Book = () => {
  const { student } = useAuthContext();

  //STATE FOR GET DATA
  const [book, setBook] = useState(null);

  //GET REQUEST FUNCTION
  const getBook = async () => {
    const _isReturn = false;
    const response = await axios.get(`https://library-soft.herokuapp.com/api/book/${_isReturn}`, {
      headers: {
        Authorization: `Bearer ${student.token}`,
      },
    });

    const data = response.data;
    setBook(data);
  };

  useEffect(() => {
        getBook();
  }, []);

  //DELETE REQUES
  const retunBook = async (_id) => {
    await axios.delete(`https://library-soft.herokuapp.com/api/book/${_id}`, {
      headers: {
        Authorization: `Bearer ${student.token}`,
      },
    });
    getBook();
  };

  return (
    <div>
      
      <div className="book-details">
        <div className="book-account">
          {book &&
            book.map((item) => {
              return (
                <div  className="book-record">
                  <div key={item.id} className="book-rec" >
                    <div>
                      <p>{item.bookname}</p>
                      <p>{item.date}</p>
                      <p>{item.author}</p>
                    </div>
                    <button onClick={() => retunBook(item._id)}>return</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Book;

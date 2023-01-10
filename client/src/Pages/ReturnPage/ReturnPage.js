import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/NavbarSection/Navbar";
import "./ReturnStyle.css";
import { useAuthContext } from "../../Hooks/UseAuthContext/useAuthContext";

const ReturnPage = () => {
  const { student } = useAuthContext();

  //State for getting data
  const [book, setBook] = useState(null);

  //get request function
  const getBook = async () => {
    const _isReturn = true;
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
  });

  return (
    <div>
      <Navbar />
      {/* <div className="return-book-section"> */}
        <div className="history">
          <h3>Book Name</h3>
          <h3>Received Date</h3>
          <h3>Returned Date</h3>
          <h3>Author Name</h3>
        </div>
        <hr />
        <div  className="returnbook">
          {book &&
            book.map((item) => {
              return (
                  <div key={item.id} className="bookreturn">
                    
                    <p>{item.bookname}</p>
                    <p>{item.date}</p>
                    <p>{item.updatedAt.slice(0,10)}</p>
                    <p>{item.author}</p>
                  </div>
              );
            })}
            </div>
         </div>
      // </div>
    
  );
};

export default ReturnPage;

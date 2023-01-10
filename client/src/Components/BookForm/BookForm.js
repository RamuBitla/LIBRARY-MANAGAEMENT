import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/NavbarSection/Navbar";
import { useAuthContext } from "../../Hooks/UseAuthContext/useAuthContext";
import "./BookFormStyle.css";

const BookForm = () => {
  const { student } = useAuthContext();
  let gettinguser = JSON.parse(localStorage.getItem("student"));
  let studentinfo = gettinguser.student;

  //STATE FOR GET BOOKS
  const [book, setBook] = useState(null);

  //FUNCTION FOR GET REQUEST:
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
    if (student) {
      getBook();
    }
  }, [student, getBook]);

  //POST REQUEST
  const [bookform, setBookform] = useState({
    bookname: "",
    date: "",
    author: "",
    isReturn: false,
    returnDate: "",
  });

  const updateField = (e) => {
    const { name, value } = e.target;
    setBookform({
      ...bookform,
      [name]: value,
    });
    getBook();
  };

  const createBook = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://library-soft.herokuapp.com/api/book", bookform, {
      headers: {
        Authorization: `Bearer ${student.token}`,
      },
    });

    setBook([...book, response.data]);
    setBookform({
      bookname: "",
      date: "",
      author: "",
      isReturn: false,
      returnDate: "",
    });
  };

  //Delete request
  const retunBook = async (_id) => {
    await axios.delete(`https://library-soft.herokuapp.com/api/book/${_id}`, {
      headers: {
        Authorization: `Bearer ${student.token}`,
      },
    });
    getBook();
  };

  return (
    <div className="bookform-section">
      <Navbar />
      <h4>Student Name : {studentinfo.fullname}</h4>
      <div className="book-section">
        <div className="bookaccount">
          <form onSubmit={createBook} className="book-form">
            <h6>Enter Book Details</h6>
            <input
              type="text"
              name="bookname"
              value={bookform.bookname}
              placeholder="Enter Book Name"
              onChange={updateField}
            />
            <br />
            <input
              type="date"
              name="date"
              value={bookform.date}
              placeholder="date"
              onChange={updateField}
            />
            <br />
            <input
              type="text"
              name="author"
              value={bookform.author}
              placeholder="Author Name"
              onChange={updateField}
            />
            <br />
            <button>Add</button>
          </form>
        </div>
        <div className="bookdetail">
          {book &&
            book.map((item) => {
              return (
                <div key={item.id} className="bookrecord">
                  <div className="bookrec">
                    <div className="bookdata">
                      {" "}
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

export default BookForm;

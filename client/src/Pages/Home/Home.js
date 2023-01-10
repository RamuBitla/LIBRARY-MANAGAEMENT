import "./HomeStyle.css";

//COMPONENTS:
import Navbar from "../../Components/NavbarSection/Navbar";
import AdditonalData from "../../Pages/AdditionalData/AdditionalData";
import Book from "../../Pages/BookPage/Book";
import UploadImage from "../ImageUpload/UploadImage";


const Home = () => {
  let gettinguser = JSON.parse(localStorage.getItem("student"));
  let studentinfo = gettinguser.student;

  return (
    <div>
      <Navbar />
      <div className="home-info">
        <div className="home-data">
          <UploadImage/>
          <div>
            <div className="student-info">
              <pre>Student Name    :    {studentinfo.fullname}</pre>
              <pre>Email Id              :    {studentinfo.email}</pre>
              <pre>Student Id           :   {studentinfo.student_ID}</pre>
              <pre>Contact No         :   {studentinfo.contact_number}</pre>
              <pre>Department        :   {studentinfo.department}</pre>
              <pre>Year                   :   {studentinfo.year}</pre>
            </div>
          </div>
        </div>

        <div className="extra-info">
          <AdditonalData />
        </div>

        <div className="book-info">
        <h2>Books in your Account</h2>
          <Book />
        </div>
      </div>
    </div>
  );
};

export default Home;

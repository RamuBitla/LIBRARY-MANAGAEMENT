import { Link } from "react-router-dom";
import { useState } from "react";

//COMPONENT:
import { useRegistration } from "../../Hooks/useRegistration/useRegister";

//IMAGES:
import logo from "../../Assets/logo.png";
import character from "../../Assets/Character.png";
import plant from "../../Assets/Plant.png";

//STYLESHEET:
import "./RegisterStyle.css";

const Register = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    student_ID: "",
    contact_number: "",
    department: "",
    year: "",
    admission: "",
    gender: "",
    bgroup: "",
    emergencyno: "",
    address: "",
  });

  const { registration, error } = useRegistration();
  const updateFormField = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registration(
      form.fullname,
      form.email,
      form.password,
      form.student_ID,
      form.contact_number,
      form.department,
      form.year

    );

    setForm({
      fullname: "",
      email: "",
      password: "",
      student_ID: "",
      contact_number: "",
      department: "",
      year: "",
    });
  };
  
  return (
    <div className="register">
      <div className="reg-main">
        <img src={logo} alt="logo" />
        <h1>LIBRARY MANAGEMENT SOFTWARE</h1>
      </div>
      <div className="reg-center">
        <div className="regright">
          <div className="main-form">
            <h6>STUDENT REGISTRATION</h6>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                placeholder="Full Name"
                onChange={updateFormField}
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Email"
                onChange={updateFormField}
                required
              />

              <input
                type="password"
                name="password"
                value={form.password}
                placeholder="Password"
                onChange={updateFormField}
                required
              />

              <input
                type="text"
                name="student_ID"
                value={form.student_ID}
                placeholder="Student ID"
                onChange={updateFormField}
                required
              />

              <input
                type="tel"
                name="contact_number"
                value={form.contact_number}
                placeholder="Contact Number"
                onChange={updateFormField}
                required
              />

              <input
                type="text"
                name="department"
                value={form.department}
                placeholder="Department"
                onChange={updateFormField}
                required
              />

              <input
                type="number"
                name="year"
                value={form.year}
                placeholder="Year"
                onChange={updateFormField}
                required
              />

              <p>
                If already registered ? go to <Link to="/login"> LogIn</Link>
              </p>
              <button>Register</button>
              {error && <p>email already exists</p>}
            </form>
          </div>
          <img className="character" src={character} alt="character" />
          <img className="plant" src={plant} alt="plant" />
        </div>
      </div>
    </div>
  );
};

export default Register;

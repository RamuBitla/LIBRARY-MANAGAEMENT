import { useAuthContext } from "../UseAuthContext/useAuthContext";
import { useState } from "react";

export const useRegistration = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const registration = async (
    fullname,
    email,
    password,
    student_ID,
    contact_number,
    department,
    year
  ) => {
    setError(null);

    const response = await fetch(
      "https://library-soft.herokuapp.com/api/student/register",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          fullname,
          email,
          password,
          student_ID,
          contact_number,
          department,
          year
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      
      //SAVE STUDENT IN LOCAL STORAGE:
      localStorage.setItem("student", JSON.stringify(data));

      //UPDATE STUDENT CONTEXT:
      dispatch({ type: "LOGIN", payload: data });
    }
  }; 
  return{registration,error}
};
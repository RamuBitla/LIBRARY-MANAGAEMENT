import { useState } from "react";
import { useAuthContext } from "../UseAuthContext/useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);

    const response = await fetch("https://library-soft.herokuapp.com/api/student/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email,
        password
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      
      //SAVE STUDENT IN LOCAL STORAGE:
      localStorage.setItem("student", JSON.stringify(data));

      //UPDATE STUDENT LOGIN DATA:
      dispatch({ type: "LOGIN", payload: data });
    }
  };
  return { login, error };
};
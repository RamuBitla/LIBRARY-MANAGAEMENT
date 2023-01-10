import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

import './ImageStyle.css';

import upload from '../../Assets/plus.png';


const UploadImage = () => {
    let gettinguser = JSON.parse(localStorage.getItem("student"));
    let student_id = gettinguser.student._id;

    const [profilepic, setprofilepic]=useState("")

    const getuserdata = async () => {
        const response = await axios.get(
          `https://library-soft.herokuapp.com/api/student/login/${student_id}`
        );
        const userdetail = response.data;
  
        setprofilepic(userdetail.profile)
      };
    
      useEffect(() => {
        getuserdata();
      }, []);

      const [image,setimage]=useState("")

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimage(
      {  profile:reader.result})
    };
  };
  
  const getimage=(e)=>{
    let selectedfile=e.target.files[0]
      previewFile(selectedfile)
      
  }

  console.log(image.profile)
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    await axios.patch(
      `https://library-soft.herokuapp.com/api/student/login/upload/${student_id}`, image
    )
    .then(
      ()=>getuserdata()
    )
  };
  

  return (
   <div className='uploaded-image'>
     <div className='uploadImage'>
 <img className="profilepic" src={profilepic} alt="profile-image"></img>
 </div>
 <img className='img' src={upload} />
  <form onSubmit={handlesubmit}>
    <input type="file" onChange={getimage}></input>
    <input type="submit"></input>
  </form>
   </div>
    
  )
}

export default UploadImage
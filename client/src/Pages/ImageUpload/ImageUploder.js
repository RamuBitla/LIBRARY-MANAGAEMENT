// import React, { useEffect, useState } from "react";
// import { useAuthContext } from "../../Hooks/UseAuthContext/useAuthContext";
// import { Buffer } from "buffer";
// import axios from "axios";

// import "./ImageStyle.css";
// import camera from "../../Assets/plus.png";

// const ImageUploader = () => {
//   const fetchUser = JSON.parse(localStorage.getItem("student"));
//   const student_id = fetchUser.student._id;

//   const { student } = useAuthContext();

//   const [userProfilePic, setUserProfilePic] = useState();
//   const [newProfilePic, setNewProfilePic] = useState({});

//   const [error, setError] = useState(null);

//   //------------------------- GET IMAGE --------------------------------

//   const getImageData = async () => {
//     await axios
//       .get(`/api/student/upload/${student_id}`)
//       .then((res) => {
//         const userPhoto = res.data.testImage;
//         const bufferString = `data:${
//           userPhoto.contentType
//         };base64, ${Buffer.from(userPhoto.data).toString("base64")}`;
//         setNewProfilePic(bufferString);
//         console.table(bufferString);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//      getImageData();
//    });
 
//   // ---------- UPLOAD ---------------
//   const uploadImage = (e) => {
//     setUserProfilePic(e.target.files[0]);
//   };

//   const headConfig = {
//     "Content-type": "multipart/form-data",
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!student) {
//       setError("You need to be logged in to see this page!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("photo", userProfilePic);

//     axios
//       .patch(`/api/student/upload/${student_id}`, formData, headConfig)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

 
//   return (
//     <div className="image-container">
//       <div className="user-image">
//         <img src={newProfilePic} alt="profile" />
//       </div>
//       <img src={camera} className="plus" alt="Upload" />
//       {error && <div className="img-error">{error}</div>}
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <input
//           type="file"
//           accept=".png, .jpg, .jpeg"
//           name="photo"
//           onChange={uploadImage}
//         />
//         <input type="submit" className="submit" />
//       </form>
//     </div>
//   );
// };

// export default ImageUploader;

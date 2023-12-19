import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate, NavLink } from "react-router-dom";
import Signup from "./Components/signup";
import Login from "./Components/login";
import QuestionForm from "./Components/Questionform";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Logout from "./Components/Logout";
import Navbar from "./Components/Navbar";
function App() {
  // const isLoggedIn = localStorage.getItem('isLoggedIn');
  // console.log(isLoggedIn);
  // // const navigate = useNavigate();
  // let handleLogout = async (e) => {
  //   console.log("hello")
  //   e.preventDefault();
  //   try {
  //     <Logout />
  //     localStorage.removeItem('isLoggedIn');
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // }
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myapp" element={<QuestionForm />} />
        </Routes>
        {/* </Router> */}
      </Router>
    </>
  );
}

export default App;



// import React, { useState } from 'react';
// import axios from 'axios';

// const QuestionForm = () => {
//   const [question, setQuestion] = useState('');
//   const [image, setImage] = useState(null);
//   const [answer, setAnswer] = useState('');

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const formData = new FormData();
//       formData.append('question', question);
//       formData.append('data', image);
  
//       // Convert FormData to JSON object
//       const jsonObject = {};
//       formData.forEach((value, key) => {
//         jsonObject[key] = value;
//       });
  
//       // Convert JSON object to JSON string
//       const jsonString = JSON.stringify(jsonObject);
  
//       const response = await axios.post('http://192.168.0.104:8000/predict', jsonString, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       setAnswer(response.data.prediction);
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//     }
//   };
  

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Image:</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//         </div>
//         <div>
//           <label>Question:</label>
//           <input type="text" value={question} onChange={handleQuestionChange} />
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//       {answer && <div>Answer: {answer}</div>}
//     </div>
//   );
// };

// export default QuestionForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const QuestionForm = () => {
//   const [question, setQuestion] = useState('');
//   const [image, setImage] = useState(null);
//   const [answer, setAnswer] = useState('');

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const imageData = reader.result.split(',')[1]; // Extract base64-encoded part
//         sendRequest(imageData);
//       };
//       reader.readAsDataURL(image); // Read the file as data URL
//     } catch (error) {
//       console.error('Error reading the image:', error);
//     }
//   };

//   const sendRequest = async (imageData) => {
//     try {
//       const formData = {
//         question: question,
//         data: imageData,
//       };

//       const response = await axios.post('http://localhost:8000/predict', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       setAnswer(response.data.prediction);
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Image:</label>
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//         </div>
//         <div>
//           <label>Question:</label>
//           <input type="text" value={question} onChange={handleQuestionChange} />
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//       {answer && <div>Answer: {answer}</div>}
//     </div>
//   );
// };

// export default QuestionForm;
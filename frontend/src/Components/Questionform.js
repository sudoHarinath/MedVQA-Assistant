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


import React, { useState } from 'react';
import axios from 'axios';
// import './QuestionForm.css';
import {StyledDiv,StyledButton,StyledForm,StyledInnerDiv,StyledLabel,StyledInput } from './QuestionFormStyles';

const currentdate = new Date();
const year = currentdate.getFullYear();
// const year = currentdate.setFullYearl;
const month = currentdate.getMonth();
const date = currentdate.getDate();
const time = currentdate.getHours();
const min = currentdate.getMinutes();
const sec = currentdate.getSeconds();
const milsec = currentdate.getMilliseconds();
console.log(year);
console.log(month);
console.log(date);
console.log(time);
console.log(min);
console.log(sec);
console.log(milsec);

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState(null);
  const [answer, setAnswer] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result.split(',')[1]; // Extract base64-encoded part
        sendRequest(imageData);
      };
      reader.readAsDataURL(image); // Read the file as data URL
    } catch (error) {
      console.error('Error reading the image:', error);
    }
  };

  const sendRequest = async (imageData) => {
    try {
      const formData = {
        question: question,
        data: imageData,
      };
      const response = await axios.post(`http://${REACT_APP_Flask}/predict`, formData, {
      // const response = await axios.post('http://127.0.0.1:4040/predict', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setAnswer(response.data.prediction);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledLabel>Image:</StyledLabel>
          <StyledInput type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <StyledLabel>Question:</StyledLabel>
          <StyledInput type="text" value={question} onChange={handleQuestionChange} />
        </div>
        <div>
          <StyledButton type="submit">Submit</StyledButton>
        </div>
      </StyledForm>
      {answer && <StyledInnerDiv>Answer: {answer}</StyledInnerDiv>}
      {answer && (
        <StyledInnerDiv>
          Answer occurred at: {date}/{month}/{year} .{time}:{min}:{sec}
        </StyledInnerDiv>
      )}
    </StyledDiv>
  );  
};

export default QuestionForm;
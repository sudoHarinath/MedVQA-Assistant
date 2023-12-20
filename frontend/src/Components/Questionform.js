import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {
  StyledDiv,
  StyledButton,
  StyledForm,
  StyledInnerDiv,
  StyledLabel,
  StyledInput,
} from './QuestionFormStyles';
import sampleImage1 from './myImages/sample1.jpeg';
import sampleImage2 from './myImages/sample2.jpeg';
import sampleImage3 from './myImages/sample3.jpeg';

const currentdate = new Date();
const year = currentdate.getFullYear();
const month = currentdate.getMonth();
const date = currentdate.getDate();
const time = currentdate.getHours();
const min = currentdate.getMinutes();
const sec = currentdate.getSeconds();

const sampleQuestions = [
  {
    imagePath: sampleImage1,
    question: 'Where are liver stem cells (oval cells) located?',
    answer: 'in the canals of hering',
  },
  {
    imagePath: sampleImage2,
    question: 'What represent foci of fat necrosis with calcium soap formation at sites of lipid breakdown in the mesentery?',
    answer: 'the areas of white chalky deposits',
  },
  {
    imagePath: sampleImage3,
    question: 'How many cm (normal, 1-1.5 cm) is the left ventricular wall thicker than in the example of myocardial hypertrophy lower left?',
    answer: '2',
  },
  // Add more sample questions as needed
];

const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState(null);
  const [subimage, setSubImage] = useState(null);
  const [answer, setAnswer] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState(null);

  const handleImageClick = async(e) => {
    // Set the image path directly without using the file input
    // setImage();
    // console.log(file);
    const response = await axios.get(e.target.src, { responseType: 'blob' });
    const file = new File([response.data],"sample_img.jpg", { type: response.headers['content-type'] });
  // Set the Blob object as subImage
    setSubImage(file);
    console.log(file);
  // Set the image path directly without using the file input
    setImage(URL.createObjectURL(file));
  };
  const handleClear = () => {
    setQuestion('');
    setImage(null);
    setAnswer('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSubImage(file);
    console.log(file);
    setImage(URL.createObjectURL(file));
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (image) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageData = reader.result.split(',')[1];
          sendRequest(imageData);
        };
        reader.readAsDataURL(subimage);
        console.log(subimage);
      } else if(subimage) {
        console.error('No image selected.');
      }

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
      // console.log(process.env.REACT_APP_Flask)
      const response = await axios.post(`${process.env.REACT_APP_FLASK}/predict`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setAnswer(response.data.prediction);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  const openModal = (sample) => {
    setSelectedSample(sample);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
      <div>
        <StyledLabel>Image:</StyledLabel>
          {image === null ? (
            // If setImage is null, show file input
            <StyledInput type="file" accept="image/*" onChange={handleImageChange} />
          ) : (
            // If setImage is not null, show content of setImage
            <img src={image} alt="Selected" style={{ maxWidth: '100%', height: 'auto' }} />
          )}
        </div>
        <div>
          <StyledLabel>Question:</StyledLabel>
          <StyledInput type="text" value={question} onChange={handleQuestionChange} />
        </div>
        <div>
          <StyledButton type="submit">Submit</StyledButton>
          <StyledButton type="button" onClick={handleClear}>Clear All</StyledButton>
        </div>
        <div>
          <StyledButton onClick={() => openModal(null)}>Sample Questions</StyledButton>
        </div>
      </StyledForm>
      {answer && <StyledInnerDiv>Answer: {answer}</StyledInnerDiv>}
      {answer && (
        <StyledInnerDiv>
          Answer occurred at: {date}/{month}/{year} .{time}:{min}:{sec}
        </StyledInnerDiv>
      )}

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Sample Questions Modal"
      >
        <h2>Sample Questions</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {sampleQuestions.map((sample, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={sample.imagePath}
                    alt={`Sample ${index + 1}`}
                    style={{ cursor: 'pointer', maxWidth: '200px', maxHeight: '200px' }}
                    onClick={(e) => {
                      handleImageClick(e);
                      closeModal(sample);
                    }}
                  />
                </td>
                <td>{sample.question}</td>
                <td>{sample.answer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    </StyledDiv>
  );
};

export default QuestionForm;

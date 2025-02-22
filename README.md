MedVQA-Assistant

A Medical Visual Question Answering (VQA) chatbot that uses a fine-tuned BLIP model trained on the PathVQA dataset. Users can interact with the chatbot via a MERN-based web application, with a Flask backend handling model inference.

Features

Fine-tuned BLIP model for medical image-based Q&A

Achieved 17% accuracy on the PathVQA dataset

MERN-based frontend for interactive chat

Flask backend for handling inference requests

Tech Stack

Model: BLIP (fine-tuned on PathVQA)

Backend: Flask (Python)

Frontend: MERN (MongoDB, Express, React, Node.js)

Installation

Prerequisites

Python 3

Node.js & npm

MongoDB

Flask

Required Python libraries in requirements.txt

Backend Setup

Clone the repository:

git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name/backend

Install dependencies:

pip install -r requirements.txt

Run the Flask server:

python app.py

Frontend Setup

Navigate to the frontend directory:

cd frontend

Install dependencies:

npm install

Start the React application:

npm start

Usage

Upload a medical image.

Ask a question related to the image.

Receive AI-generated answers.

API Endpoint

POST /predict: Accepts an image and a question, returning a model-generated answer.

Contributing

Contributions are welcome! Open an issue or submit a pull request to improve the project.

License

This project is open-source under the MIT License.

Author

Developed by Hari nath as part of medical AI research.

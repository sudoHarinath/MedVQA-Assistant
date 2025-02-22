# 🏥 MedVQA-Assistant

![Python](https://img.shields.io/badge/Python-3.x-blue) ![Flask](https://img.shields.io/badge/Flask-Backend-red) ![React](https://img.shields.io/badge/React-Frontend-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)

A **Medical Visual Question Answering (VQA) chatbot** that uses a fine-tuned **BLIP model** trained on the **PathVQA dataset**. Users can interact with the chatbot via a **MERN-based web application**, with a **Flask backend** handling model inference.

## 🚀 Features
- 🔬 Fine-tuned BLIP model for medical image-based Q&A
- 🎯 Achieved **17% accuracy** on the PathVQA dataset
- 💬 MERN-based frontend for interactive chat
- ⚡ Flask backend for handling inference requests

## 📑 Table of Contents
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Demo](#-demo)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## 🛠 Tech Stack
- **Model:** BLIP (fine-tuned on PathVQA)
- **Backend:** Flask (Python)
- **Frontend:** MERN (MongoDB, Express, React, Node.js)

## ⚙️ Installation
### Prerequisites
- Python 3
- Node.js & npm
- MongoDB
- Flask
- Required Python libraries in `requirements.txt`

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name/backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Flask server:
   ```bash
   python app.py
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```

## 🎯 Usage
1. Upload a medical image.
2. Ask a question related to the image.
3. Receive AI-generated answers.

## 🌐 API Endpoints
### Predict Medical Answer
```bash
POST /predict
```
#### Example Usage
```bash
curl -X POST -F "image=@path/to/image.jpg" -F "question=What is in the X-ray?" http://127.0.0.1:5000/predict
```

## 📸 Demo
![Chatbot UI](path_to_screenshot.png)

## 🤝 Contributing
Contributions are welcome! Open an issue or submit a pull request to improve the project.

## 📜 License
This project is open-source under the MIT License.

## 👤 Author
Developed by Hari nath as part of medical AI research.

---
🔥 If you like this project, give it a ⭐ on GitHub! 🚀


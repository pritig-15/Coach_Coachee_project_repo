🚀Coach–Coachee Matchmaking Recommendation System

## 🔹 Overview

This project is a recommendation system that matches coachees with suitable coaches based on profile attributes such as goals, industry, coaching style, and language.

The system is designed to be **fast, explainable, and scalable**, generating recommendations within seconds.

---

## 🔹 Architecture

Frontend (React)
↓
Backend (Node.js + Express)
↓
Matching Engine (Service Layer)
↓
MongoDB (Database)
↓
Optional AI Module (Embeddings / NLP-based improvements)


### Description:

- **Frontend**: Handles UI, user input, and displays recommended coaches.
- **Backend**: Processes requests, implements matching logic, and returns results.
- **Matching Engine**: Calculates match scores using weighted parameters and ranks coaches.
- **MongoDB**: Stores coach profiles used for generating recommendations.
- **Optional AI Module**: Can be integrated to improve recommendations using embeddings or NLP-based similarity.

---

## 🔹 Approach

- Rule-based filtering
- Weighted scoring system
- Returns Top 5 ranked results

---

## 🔹 Matching Parameters

| Parameter | Weight |
|----------|--------|
| Goals–Expertise Match | 40% |
| Industry Match | 15% |
| Experience | 10% |
| Coaching Style | 10% |
| Language | 10% |

---

## 🔹 Features

- Accepts coachee profile input
- Matches with suitable coaches
- Returns Top 5 recommendations
- Provides explainable recommendations (reason for each match)
- Fast response time (within a few seconds)

---

## 🔹 Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB

---

## 🔹 API Endpoint

### POST `/match`

### Sample Input:

```json
{
  "goals": ["leadership", "career growth"],
  "industry": "IT",
  "preferredStyle": "friendly",
  "language": "English"
}
Sample Output:
[
  {
    "name": "Coach A",
    "score": 92,
    "reason": "Expertise match, Same industry, Experienced coach"
  }
]
🔹 Setup Instructions
Backend:
cd backend
npm install
npm run dev
Frontend:
cd frontend
npm install
npm start
🔹 Environment Variables
Create a .env file in the backend folder:

MONGO_URI=mongodb+srv://Pritig15:Coachee123@cluster0.mhpwmfy.mongodb.net/myDatabase
PORT=5000
🔹 Scalability
To scale this system for 100,000+ users, the following improvements can be made:

Use Redis for caching frequent queries

Optimize MongoDB queries using indexing

Move matching logic to a separate microservice

Use vector databases for semantic similarity search

🔹 Future Improvements
AI-based recommendation system

Embedding similarity search

Personalized coaching suggestions

Feedback-based ranking improvements

## 🔹 Demo

### UI Preview

![App UI](images/image.png)

🔹 Time Spent
Approx. 8–10 hours


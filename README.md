# Reno Platforms Assignment

A Next.js web application for managing schools, allowing users to add school details with images and view the list of schools. This project is deployed on Vercel.

**Note:** The MySQL database is deployed on a free cloud plan with a 5MB storage limit. Avoid excessive data to prevent hitting the usage cap.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup Instructions](#setup-instructions)

---

## Demo

Live Site: [https://reno-platforms-assignment.vercel.app/](https://reno-platforms-assignment.vercel.app/)


---

## Features

- Add school details including:
  - Name
  - Address
  - City
  - State
  - Contact
  - Email ID
  - Image upload
- View the list of added schools
- Responsive design for mobile and desktop
- Data persisted in MySQL database

---

## Tech Stack

- **Frontend / Framework:** Next.js
- **Backend / API:** Next.js API routes  
- **Database:** MySQL    
- **Deployment:** Vercel

---

## Setup Instructions

### 1. Clone the repository
Link: [https://github.com/coderchaubey/Reno-platforms-assignment.git]
### 2. Install dependencies
npm install
### 3. Setup MySql Database
-> Create a MySQL database for the project
-> Create the schools table:
``` CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    contact BIGINT,
    image TEXT,
    email_id TEXT
    );
```
### 4. Create ".env.local" file in the project root folder
DB_HOST=<Your host>
DB_USER=<Your username>
DB_PASSWORD=<Your password>
DB_NAME=<your db name>

### 5. Run locally
npm run dev
Link: [http://localhost:3000]
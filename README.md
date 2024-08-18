IB-CourseWork-Evaluation
A web application built with Next.js, Tailwind CSS, and ShadcnUI that allows users to upload, view, and filter coursework PDFs.

Table of Contents
Setup Instructions
Assumptions and Design Decisions
Implemented Features
Challenges and Solutions

\*Setup Instructions

Clone the repository:

git clone https://github.com/KartikeyDiyewar/ib-coursework-evaluation.git
cd ProjectName
Install dependencies:

Run the development server:
npm run dev

Open the application in your browser:
http://localhost:3000

\*Assumptions and Design Decisions

Assumptions:

Users will primarily use this application to upload and manage coursework PDFs.
The user needs to add PDF files to the application for testing and viewing the features.
The application assumes that the user has modern browsers that support the latest JavaScript features.

Design Decisions:

Next.js was chosen for its server-side rendering capabilities and ease of use with React.
Tailwind CSS was used for quick styling and responsive design.
ShadcnUI was integrated for consistent UI components.
Zustand was selected for state management due to its simplicity and minimalistic API.
State is stored in local storage to persist user data across sessions.

\*Implemented Features

Home Page:

File upload functionality using React Dropzone.
Displays a list of uploaded coursework.
Filters coursework based on certain criteria.

Coursework PDF View Page:

Displays the selected coursework PDF using React-PDF.

State Management:

Zustand is used for managing the application state.
State is persisted in local storage to maintain data across sessions.

\*Challenges and Solutions

File Upload and State Management:

Challenge: Integrating file upload and managing the state across different components.
Solution: Used Zustand for efficient state management and React Dropzone for handling file uploads.
PDF Viewing:

Challenge: Displaying the uploaded PDFs correctly on different devices and browsers.
Solution: Integrated React-PDF, which supports PDF rendering in a React environment, ensuring compatibility.

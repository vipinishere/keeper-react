# 📝 Keeper React

Keeper React is a simple note-taking web application built using **React**.
This project was created as a **React learning project** to practice working with components, state management, user interactions, and dynamic UI updates.

## ✨ Features

* ➕ Add new notes
* ✏️ Edit existing notes
* 🗑️ Delete notes
* 📱 Responsive user interface
* ⚡ Instant UI updates using React state
* 🧩 Component-based architecture

## 🛠️ Technologies Used

* React
* JavaScript
* HTML
* CSS

## 📌 How It Works

Users can create, edit, and delete notes directly from the interface.

The notes are managed using **React state**, and no database or persistent storage is used. This means the notes exist only during the current session and will be lost when the page is refreshed.

## 🎯 Project Purpose

The main purpose of this project was to learn and practice fundamental React concepts, including:

* React Components
* Props
* State Management
* Event Handling
* Conditional Rendering
* Dynamic UI Updates

## 🚀 Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd keeper-react
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Then open the application in your browser.

## 📂 Project Structure

```text
keeper-react/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

> The exact project structure may vary depending on the version of the project.

## 💾 Data Storage

This project does **not use a database or local storage**.

All notes are managed through React state:

```text
Add/Edit/Delete Note
        ↓
   React State
        ↓
    UI Re-render
```

Refreshing or closing the application will reset the notes.

## 📚 What I Learned

While building Keeper React, I practiced:

* Creating reusable React components
* Managing application state
* Passing data between components using props
* Handling user events
* Rendering lists dynamically
* Updating and deleting items from state
* Building a responsive React interface

## 📄 License

This project was created for learning and educational purposes.

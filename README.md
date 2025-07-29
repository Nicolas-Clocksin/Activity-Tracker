# Activity Tracker

A simple and user-friendly web application for logging and tracking daily activities, built with React and Vite. This app allows users to add, edit, and view their daily activities along with notes and timestamps in an organized user interface.

## Features

- Add and edit daily activities
- Attach notes and timestamps to each activity
- View activities by date
- Modal-based input forms for a clean UI
- Lightweight and fast setup with Vite

## Tech Stack

- **Frontend**: React
- **Build Tool**: Vite
- **Styling**: Bootstrap / Custom CSS
- **State Management**: React Hooks (useState, useEffect)

## Folder Structure

```
src/
├── App.jsx                   # Main application component
├── main.jsx                  # Entry point for React
├── index.css                 # Global styles
├── components
    ├── ActivityList.jsx      # Displays the current activities for a date
    ├── Header.jsx            # Displays the current date
    └── Login.jsx             # Allows user to login to the tracker
└── modals/
    ├── AddActivityModal.jsx  # Modal for adding a new activity
    ├── ChangeDateModal.jsx   # Modal for changing the viewed date
    ├── EditActivityModal.jsx # Modal for editing an activity
    └── SignUpModal.jsx       # Modal for Signing up a user
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/Nicolas-Clocksin/Activity-Tracker.git
cd activity-tracker
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 👤 Author

Nicolas Clocksin  
[LinkedIn](https://www.linkedin.com/in/nicolas-clocksin) | [GitHub](https://github.com/Nicolas-Clocksin)

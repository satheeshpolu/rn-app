# README 
React Native Project

## Fix lint errors
To fix all lint erros, run commands below at the root directory of the project.
``` 
npm run lint
npm run lint-fix
```

# Start Project
Open the terminal and go to root-directory of the project.
Run command below.
```
npm start

# Note: 
- Before running the Mobile App, run the backend server in the local env
  `https://github.com/satheeshpolu/backend-application` 
- Update the IP address of the backend server in the `.env` file to save the notes data via Mobile app
   `http://192.168.29.146:5000/api/v1/all-notes`

```

# Setup react-native-dotenv package
Open the terminal and go to root-directory of the project.
Run command below.
```
npm install react-native-dotenv

Note: For uninstall react-native-dotenv package run command => npm uni react-native-dotenv or npm uninstall react-native-dotenv
```


# 📱 Mobile App Flow

This document outlines the flow of the Notes React Native Mobile App with corresponding screenshots.

---

## 🟡 Initial State

No notes are present initially:

![Initial Screen](./src/assets/app-flow/app-1.png)

---

## ➕ Adding a Note

Adding your first note:

![Add Note](./src/assets/app-flow/app-3.png)

---

## ✅ Note Created

A new note is created and visible in the list:

![Note Created](./src/assets/app-flow/app-4.png)

---

## ➕ Additional Notes

Add more notes to build your list:

![Additional Note](./src/assets/app-flow/app-5.png)

## 🔍 Search Notes

Search for a specific note to filter the results:
![More Notes](./src/assets/app-flow/app-6.png)

---

## 📋 All Notes Displayed

All the notes added are now visible in the main list:

![All Notes](./src/assets/app-flow/app-7.png)

---

## ✅ Edit Notes Confirmation

Request user confirmation

![Search Note](./src/assets/app-flow/app-8.png)

---

## 📄 Note Details

Tap a note to view its full content:

![Note Details](./src/assets/app-flow/app-9.png)

---

## ✏️ Update Note

Edit the title or description of a selected note:

![Update Note](./src/assets/app-flow/app-10.png)

---

## 💾 Note Updated

Note is saved successfully after updating:

![Note Updated](./src/assets/app-flow/app-11.png)

---

## 🔍 Search Notes

Search for a specific note to filter the results:

![Updated Notes List](./src/assets/app-flow/app-12.png)

---

## 🌐 REST API Integration

### 🧾 Tabular View of Notes via API

![API Table View](./src/assets/app-flow/app-13.png)

### 🔢 JSON View of Notes via API

![API JSON View](./src/assets/app-flow/app-14.png)

---

## ✅ Summary

- Full note management with create, read, update, delete, and search functionalities.
- Integrated with REST APIs to retrieve and display notes.
- Responsive and interactive UI with persistent data handling.

---

## 🛡️ License

MIT


# SecPass - Your own Secure Password Manager

## Overview
SecPass is a lightweight password manager designed to help you securely store and manage your passwords on your local MongoDB. It provides a simple and intuitive interface for organizing your passwords without the need for creating accounts or master passwords.

## Features
- **Password Storage:** Easily store and manage your passwords in a secure vault.
- **Simple Interface:** Intuitive user interface for effortless password management.
- **No Account Creation:** No need to create accounts or remember master passwords.
- **Basic Security:** Provides basic encryption to keep your passwords safe.

## Why SecPass?
- **Ease of Use:** Simple and straightforward password management without complexities.
- **Minimal Setup:** Get started with password management instantly, no account creation required.
- **Lightweight:** Lightweight application that doesn't consume much system resources.

## Getting Started
1. Download and install MongoDB on your device.
2. Open the file in terminal and run `npm install`.
3. Launch SecPass frontend built in React by opening the main folder and running `npm run dev`.
4. Create a '.env' file firstly in backend folder which should have below content:
```
PORT=3000
MONGO_URI="mongodb://localhost:27017/secpass"
```
5. Open the backend folder in terminal and run `npm install`.
6. Launch it by running `node server.js`. Backend in built in Node and Express.
7. Launch SecPass by opening `http://localhost:5173` and start adding your passwords.
8. Organize your passwords as needed.
9. Access your passwords whenever you need them.


## Screenshots

![App Screenshot](/screenshot.png)


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express, MongoDB

## Run Locally

Clone the project

```bash
  git clone https://github.com/Advanced-Boy-Shreyash/SecPass-Password-Manager.git
```

Go to the project directory

```bash
  cd SecPass-Password-Manager
```

Install dependencies for frontend

```bash
  npm install
```

Start the frontend

```bash
  npm run dev
```
Open new terminal for backend directory
```bash
  cd backend
```

Install dependencies for backend
```bash
  npm install
```

Launch the backend
```bash
  node server.js
```

Launching the App in Browser
Go to http://localhost:5173

# SecPass-Password-Manager

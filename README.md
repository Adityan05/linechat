
Readme · MD
<p align="center">
  <img src="https://i.ibb.co/sJQvbY9X/Line-Chat-removebg-preview.png" alt="LineChat Logo" width="280"/>
</p>
 
<p align="center">
  <b>A lightweight real-time chat app for quick, no-signup conversations.</b>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Socket.IO-black?style=for-the-badge&logo=socket.io&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

 
## ✨ What it does
 
- 🔑 Create a chat room and get a 6-digit room code
- 🚪 Join an existing room with that code
- ⚡ Send real-time messages to everyone in the room
- ✏️ Update your display name before entering a room
- 🔔 Simple system messages when users join or leave
## 📸 Screenshots
 
<p align="center">
  <img src="https://i.ibb.co/XxWcDQtm/image.png" alt="LineChat screenshot 2" width="45%"/>
  &nbsp;&nbsp;
  <img src="https://i.ibb.co/nsRcYjyH/Screenshot-2026-07-17-103638.png" alt="LineChat screenshot 1" width="45%"/>
</p>
## 🗂️ Project Structure
 
| Folder | Description |
|---|---|
| [`backend`](backend) | Express + Socket.IO server |
| [`frontend`](frontend) | Vite + React client |
 
## 🧱 Tech Stack
 
**Backend:** Node.js · Express · Socket.IO · CORS
**Frontend:** React 19 · Vite · Socket.IO Client · Tailwind CSS · daisyUI
 
## 🚀 Local Development
 
### 1. Install dependencies
 
Run this in each folder:
 
```bash
cd backend
npm install
cd ../frontend
npm install
```
 
### 2. Start the backend
 
```bash
cd backend
npm run dev
```
 
The backend listens on `http://localhost:3000` by default.
 
### 3. Start the frontend
 
```bash
cd frontend
npm run dev
```
 
If you need to point the client at a different backend URL, create a `.env` file in `frontend`:
 
```bash
VITE_SOCKET_URL=http://localhost:3000
```
 
## 📜 Scripts
 
**Backend**
 
| Command | Description |
|---|---|
| `npm start` | Start the production server |
| `npm run dev` | Run the server with nodemon |
 
**Frontend**
 
| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Create a production build |
| `npm run lint` | Run ESLint |
 
## ⚙️ How It Works
 
1. A user opens the frontend and sets a username.
2. The client connects to the Socket.IO backend.
3. The user creates a room or joins an existing 6-digit room code.
4. Messages are broadcast to everyone in the room in real time.
## 📝 Notes
 
- Room codes are generated server-side.
- The backend returns a simple health response at `/`.
- If the frontend fails to connect after deployment, verify `VITE_SOCKET_URL` matches the deployed backend exactly.
---

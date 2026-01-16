# NextItems — Item Management Application

A modern **Next.js (App Router)** application that demonstrates public item browsing, protected item management, and authentication using **NextAuth.js**. The project includes a responsive UI, light/dark theme support, and integration with an **Express.js backend API**.

---

## 🔗 Live Demo

[Live Link](https://next-js-items-app.vercel.app)

---

## 📌 Project Overview

**NextItems** is a simple yet production-ready item management system where:

- Anyone can browse a list of items and view item details

- Authenticated users can add new items

- Authentication is handled using NextAuth.js (Credentials + Google)

- Item data is fetched and stored via an Express.js API

- The UI supports light/dark mode using CSS variables

- The application follows Next.js App Router best practices

This project was built to fulfill an assessment task focusing on routing, authentication, protected pages, and API integration.

---

## 🛠️ Technologies Used
**Frontend**

- **Next.js 15/16** (App Router)

- **React**

- **NextAuth.js** (Credentials & Google authentication)

- **Tailwind CSS** (CSS variables approach)

- **react-hot-toast** (notifications)

**Backend**

- **Express.js**

- **Node.js**

- **In-memory data store / JSON-based data**

---

## ✨ Features
1. **Landing Page (Public)**

- 7 meaningful sections (excluding Navbar & Footer)

- No authentication required

- Clear call-to-action buttons

- Responsive design

2. **Authentication**

- Mock login using hardcoded credentials

- Social login with Google (NextAuth.js)

- Secure, cookie-based session handling

- Redirects to Items page after successful login

- Toast notifications on login success/failure

3. **Item List Page (Public)**

- Publicly accessible

- Fetches items from Express.js API

- Displays:

    - Item name

    - Description

    - Price

    - Image

- Responsive card layout

- Clickable cards navigate to item details

4. **Item Details Page (Public**)

- Dynamic routing using /items/[id]

- Fetches a single item from Express API

- Shows full item details

- Graceful 404 handling for invalid IDs

5. **Protected Page — Add Item**

- Accessible only when logged in

- Server-side route protection using getServerSession

- Form to add a new item

- Submits data to Express.js backend

- Success & error feedback via toast notifications

- Redirects unauthenticated users to /login

6. **UI & UX**

- Fully responsive navbar (mobile + desktop)

- Light/Dark theme toggle

- Clean, minimal, production-style layout

----

## 🧭 Route Summary
| Route         | Access    | Description                             |
| ------------- | --------- | --------------------------------------- |
| `/`           | Public    | Landing page                            |
| `/login`      | Public    | Login page (Credentials & Google)       |
| `/items`      | Public    | Item list page                          |
| `/items/[id]` | Public    | Item details page                       |
| `/add-item`   | Protected | Add new item (authenticated users only) |
| `/api/auth/*` | System    | NextAuth authentication routes          |

---

## 🔐 Demo Credentials

For Credentials login:
```
Email: admin@example.com
Password: 123456
```

---

## ⚙️ Setup & Installation
1️⃣ **Clone the Repository**
```bash
git clone <your-repo-url>
cd next-items
```

2️⃣ **Install Dependencies**
```bash
npm install
```

3️⃣ **Environment Variables**

Create a `.env.local` file in the root:
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```


⚠️ After setting these, **restart the dev server**.


4️⃣ **Run Express Server**
```bash
cd server
node index.js
```

Express server runs on:
```
http://localhost:5000
```

5️⃣ **Run Next.js App**
```bash
npm run dev
```

App runs on:
```
http://localhost:3000
```

---

## 🧠 Key Implementation Notes

- **NextAuth.js** handles authentication and cookies securely

- Server-side protection is implemented using getServerSession(authOptions)

- Dynamic routing uses the App Router with async params

- Data fetching is done server-side with fetch() and no-store caching

- Theme handling is implemented via CSS variables and persisted in localStorage

---

## 🚀 Future Improvements (Optional)

- Search & filter on item list

- Persistent database (MongoDB / PostgreSQL)

- Edit & delete item functionality

- Role-based access control

- Pagination for large item lists

---

## 👤 Author

**MD. Ebrahim Ali**
Frontend / Full-Stack Developer

---

## ✅ Final Notes

This project demonstrates:

- Understanding of Next.js App Router

- Proper authentication & authorization flow

- Clean separation of server and client components

- Practical backend integration

- Production-oriented UI and architecture
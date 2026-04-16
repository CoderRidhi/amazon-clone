# Amazon Clone Fullstack Project

A full-stack e-commerce web app inspired by Amazon.
Users can browse products, add them to cart, and place orders.

## Setup

### Backend
cd backend
npm install express cors
node server.js

### Frontend
cd frontend
npm install
npm start

### Database
Run schema.sql in PostgreSQL




## 🚀 Features

* View all products
* Search and filter by category
* View product details
* Add/remove items from cart
* Update quantity in cart
* Place order with address
* View order history

## 🧠 Workflow (How it works)

1. User opens Home Page → products are fetched from backend API
2. User clicks a product → Product Detail Page opens
3. User adds item to cart → stored in database
4. User goes to Cart Page → can update quantity or remove items
5. User clicks Checkout → fills address and places order
6. Order is saved in database with order items
7. Confirmation Email is sent to the User

---

## 🏗️ Tech Stack

* **Frontend:** React (Vercel deployed)
* **Backend:** Node.js + Express (Render deployed)
* **Database:** MySQL (Aiven cloud)
* **Other:** Axios, Context API

---

## 🌐 Live Demo

Frontend: https://amazon-clone-frontend-ridhi.vercel.app/
Backend: https://amazon-clone-backend-34ux.onrender.com


## 💡 Key Learnings

* Connected frontend with backend APIs
* Handled real database (Aiven MySQL)
* Managed state using Context API
* Deployed full stack app (Vercel + Render)
* Debugged real-world issues (CORS, env, DB errors)

## 📌 Future Improvements

* Order History 
* Better UI/UX
* Wishlist Item

## 🙌 Author

Ridhi


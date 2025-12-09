# BookShelf

A full-featured e-commerce application for browsing and purchasing books online. Built with a modern tech stack, BookShelf offers a complete shopping experience with product filtering, wishlist management, cart functionality, and order tracking. Features a fully responsive UI with persistent data storage.

---
## Demo Link

[Live Link](https://book-shelf-swart-six.vercel.app/)

---
## Quick Start

```
git clone https://github.com/jishan1525/book-shelf.git
cd book-shelf
npm install
npm start
```
---

## Technologies

- React JS
- React Router
- Bootstrap
- Node.js
- Express
- MongoDB
- React Toastify

---

## DEMO Video

Watch a walkthrogh (5-7 minutes) of all major features of this app: [Link](https://drive.google.com/file/d/19cANnkV5HhprpGA5RZG0JxOfP2-Vn-lA/view?usp=sharing)

---

## Features

**Product Browsing**
- Homepage with category navigation
- Product listing with filter by price, category, and rating
- Sort products by various criteria
- Real-time search functionality
- Detailed product pages with size and quantity selection

**Shopping Experience**

- Wishlist: Save favorite items, move to cart, persistent storage
- Shopping Cart: Add/remove items, adjust quantities, real-time price updates, move to wishlist
- Price Summary: Subtotal, discounts, delivery charges, and total calculation
- Toast notifications for all user actions

**Checkout & Orders**

- Address management (add, edit, delete, select)
- Order summary and review before purchase
- Order history in My Orders section
- Cart automatically cleared after successful order

**Profile Management**

- Saved addresses displayed and managed in profile
- Add, edit, and delete addresses easily

**Data Persistence**

- Cart, wishlist, addresses, and order history persist across sessions using LocalStorage

---
API References

**GET /api/books**
List all books<br>
Sample response:<br>
```
[{ "_id": "...", "title": "", "author": "", ... }]
```
**GET /api/books/id**
Get a book by ID<br>
Sample response:<br>
```
{ "_id": "...", "title": "", "author": "", ... }
```
**POST /api/genre**
Add Genre <br>


---

## Contact

For bugs or feature request, please reach out to jishana149@gmail.com

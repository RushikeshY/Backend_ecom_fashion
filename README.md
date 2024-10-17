# 🛒 Backend_ecom_fashion
## E-Commerce Platform - README

## Overview

This e-commerce platform consists of three roles:
1. **👤 User (Customer)**: Browses products, makes purchases, and tracks orders.
2. **🛍️ Vendor (Seller)**: Manages product listings, orders, and earnings.
3. **🛠️ Superadmin**: Manages platform content, approves vendors, and oversees platform operations.

The flow begins with the registration process for all three roles, leading through key actions such as product browsing, cart management, checkout, order management, and payment processing.

---

## Flowchart

```plaintext
+--------------------+     +---------------------+     +----------------------+
|     🧑‍💻 User Signup  |---> | 🛍️ Vendor Signup  |---> | 🛠️ Superadmin Approval |
+--------------------+     +---------------------+     +----------------------+
         ↓                             ↓                           ↓
+--------------------+     +---------------------+     +----------------------+
| 🔐 Login / Profile  |<---->| 🛍️ Vendor Login     |<---->| 🛠️ Manage Vendors     |
+--------------------+     +---------------------+     |    Products, Orders   |
         ↓                             ↓                           ↓
+--------------------+     +---------------------+     +----------------------+
| 🛒 Browse Products  |     | 📦 Manage Products  |     | 📊 Payments & Reports |
+--------------------+     +---------------------+     +----------------------+
         ↓                             ↓                           ↓
+--------------------+     +---------------------+     +----------------------+
| 🛍️ Add to Cart      |     | 🚚 Manage Orders    |     | 💰 Financial Overview  |
+--------------------+     +---------------------+     +----------------------+
         ↓                             ↓                           ↓
+--------------------+     +---------------------+     +----------------------+
| 💳 Checkout & Pay   |     | 💵 Receive Payments |     | ⚖️ Handle Disputes    |
+--------------------+     +---------------------+     +----------------------+
         ↓                             ↓                           ↓
+--------------------+     +---------------------+     +----------------------+
| ✅ Order Confirmed  |     | 🚚 Ship Products    |     | 📈 Reporting & Stats  |
+--------------------+     +---------------------+     +----------------------+

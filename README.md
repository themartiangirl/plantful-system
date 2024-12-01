# Plantful System

## Project Overview
The **Plantful System** is a mobile-first platform for managing Plantful’s product catalog, subscriptions, and customer interactions. This repository contains the core codebase for the mobile application, designed to ensure a seamless and scalable user experience.

This document provides the necessary information to set up, maintain, and enhance the application.

---

## Features(ToBeAdded)
- **Product Catalog**: Browse and explore the full range of products.
- **Subscription Management**: Handle Planbox subscriptions and user preferences.
- **Order Tracking**: Track orders and notify users of their status.
- **User Notifications**: Push updates about offers, promotions, and order changes.
- **Admin Tools** (Planned): Features for internal management of products and users.

---


FCM bb


---

## Getting Started

### Clone the Repository
```bash
git clone git@github.com:themartiangirl/plantful-system.git
cd plantful-system
```

### Install Dependencies
Please make sure Node.js and npm were installed. Then run:
```bash
npm install
```

### Envirnment Setup
Create a `.env` file in the root directly with the following variables: 
```bash
MONGO_URI=your_mongodb_connection_string
FIREBASE_SERVER_KEY=your_firebase_server_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### Run
```bash
npm start
```




## Contribution Guidelines
1. **Branching Model**:
   - Use `feature/<feature-name>` for new features.
   - Use `bugfix/<issue-name>` for bug fixes.
   - Merge into `main` via pull requests after approval.

2. **Code Standards**:
   - Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
   - Ensure code is linted using ESLint before commits.

3. **Testing**:
   - Write unit tests for all new features using Jest.
   - Run tests locally before pushing changes:
     ```bash
     npm test
     ```

4. **Commit Message Format**:
   - Use descriptive and concise messages.
   - Example:
     ```bash
     git commit -m "Add subscription management API"
     ```

---

## Troubleshooting
### Common Issues
- **Environment Variables Missing**:
  Ensure `.env` is correctly set up.
- **Database Connection Fails**:
  Verify the `MONGO_URI` and that the database server is running.

### Debugging Tools
- Use `console.log` for local debugging.
- For advanced logging, integrate Winston or a similar library.

---

## Roadmap
### Planned Features
1. Admin Dashboard Integration
2. Analytics for Subscription and Sales
3. Enhanced Product Recommendation Engine
4. Localization Support for Multi-Language Users

---

## Contacts
For questions or assistance, reach out to:
- **Engineering Teamd**: [engineering@beplantful.com](mailto:engineering@beplantful.com)
- **Product Manager**: [pm@beplantful.com](mailto:pm@beplantful.com)

---




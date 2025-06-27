✅ Project summary

🧪 Test coverage and TDD approach

📦 Backend setup (Node.js + Express + Lambda + API Gateway)

🎯 Frontend setup (React + CloudFront + S3)

✅ Coding standards

🔗 Live URLs

# 🧮 String Calculator – TDD Assessment

This project is a full-stack **TDD-driven String Calculator** developed as part of  coding assessment. It showcases robust backend logic, frontend interactivity, and seamless AWS deployment.

---

## 🚀 Live Demo

- **Frontend (React + S3 + CloudFront):**  
  🔗 [https://d1ch9ssq3puik6.cloudfront.net](https://d1ch9ssq3puik6.cloudfront.net)

- **Backend (Node.js + Lambda + API Gateway):**  
  🔗 [https://biphetsfp5.execute-api.us-east-2.amazonaws.com/prod/api/calculate](https://biphetsfp5.execute-api.us-east-2.amazonaws.com/prod/api/calculate)

---

## 🧪 Test-Driven Development

The entire backend logic is built using **TDD principles**, ensuring correctness before implementation.

- ✅ Red → Green → Refactor flow
- ✅ Unit tested using **Jest**
- ✅ Code coverage: **100% functions tested**
- Test command:

```bash
npm test
📂 Project Structure
string-calculator/
├── backend/
│   ├── src/
│   │   ├── app.js          # Express logic
│   │   └── calculator.js   # Core string add logic
│   ├── tests/
│   │   └── calculator.test.js
│   └── index.js            # Lambda entrypoint
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── services/api.ts # Calls the backend
│       └── App.tsx         # UI logic
🧑‍💻 Backend Tech Stack
Node.js + Express

Jest for testing

AWS Lambda (via aws-serverless-express)

AWS API Gateway
Frontend Tech Stack
React + TypeScript

Hosted on AWS S3

Served via CloudFront

⚙️ Environment Setup

Backend
cd backend
npm install
npm test

Frontend
cd frontend
npm install
npm start

Update frontend/src/environments/environment.ts:
export const environment = {
  apiUrl: 'https://biphetsfp5.execute-api.us-east-2.amazonaws.com/prod/api'
};

📈 Improvements (Next Steps)
CI/CD using GitHub Actions

Form validation and user error handling improvements

Auto-deployment to Lambda & CloudFront


👨‍💻 Developed By
Vishva Thakkar
TDD • Node.js • React • AWS
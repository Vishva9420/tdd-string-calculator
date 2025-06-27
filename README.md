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
---
**API CURL** 

curl --location 'https://biphetsfp5.execute-api.us-east-2.amazonaws.com/prod/api/calculate' \
--header 'Content-Type: application/json' \
--data '{ "input": "//#\n4#5#6" }'

---


## 🧪 Test-Driven Development

The entire backend logic is built using **TDD principles**, ensuring correctness before implementation.

- ✅ Red → Green → Refactor flow
- ✅ Unit tested using **Jest**
- ✅ Code coverage: **100% functions tested**

- <img width="1098" alt="image" src="https://github.com/user-attachments/assets/5059de2e-ab89-4f5d-9790-f932100a33cf" />

---
DEMO : 


https://github.com/user-attachments/assets/66a3cf67-5f87-4fd9-8be9-156d0ba04f2e



https://github.com/user-attachments/assets/efd6a136-f13d-4f8b-bea4-02056643dc1c




https://github.com/user-attachments/assets/e9e2abf3-c5e4-4ff1-b4fe-98ecc3511dfc



https://github.com/user-attachments/assets/ce896af5-bf6c-47e5-ad25-10be3132b33e



https://github.com/user-attachments/assets/acd1696a-5653-4a2d-823d-422cd7f02e5d



https://github.com/user-attachments/assets/fa339300-1ed3-4173-97c7-5aeca770867b



---

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
```
---
🧑‍💻 **Backend Tech Stack**

  Node.js + Express
  
  Jest for testing
  
  AWS Lambda (via aws-serverless-express)
  
  AWS API Gateway
  
---
---
**Frontend Tech Stack**

  React + TypeScript
  
  Hosted on AWS S3
  
  Served via CloudFront

  ---
  ---

**⚙️ Environment Setup**

  **Backend**
  cd backend
  npm install
  npm test
  
  **Frontend**
  cd frontend
  npm install
  npm start
  
---
---
**Update frontend/src/environments/environment.ts**:

export const environment = {
  apiUrl: 'https://biphetsfp5.execute-api.us-east-2.amazonaws.com/prod/api'
};

---
---
📈 **Improvements (Next Steps)**
  CI/CD using GitHub Actions
  
  Form validation and user error handling improvements
  
  Auto-deployment to Lambda & CloudFront

---
**👨‍💻 Developed By
Vishva Thakkar
TDD • Node.js • React • AWS**

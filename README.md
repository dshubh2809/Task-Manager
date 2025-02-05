# Task Manager

A simple and efficient Task Manager application to help you organize your tasks, schedule, and habits effectively.

## 🚀 Live Demo
[Task Manager - Live Deployment](https://task-manager-bice-theta.vercel.app/)

## 📌 Features
- **Task Management**: Add, update, and delete tasks with ease.
- **Habit Tracking**: Keep track of your daily habits.
- **Event Scheduling**: Stay ahead with upcoming events and reminders.
- **Time Display**: View the current time in an interactive format.
- **Weather Integration**: Displays weather updates when location access is enabled.

## 🛠 Tech Stack
- **Frontend**: TypeScript, React, Next.js, Tailwind CSS
- **Backend**: Prisma, NextAuth
- **Deployment**: Vercel

## 📂 Project Structure
```
├── app/
├── components/
├── lib/
├── prisma/
├── public/images/icons/
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── bun.lockb
├── components.json
├── next-auth.d.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── prettier.config.js
├── tailwind.config.ts
├── tsconfig.json
├── yarn.lock
```

## 📦 Installation & Setup
### Prerequisites
- Node.js & npm/yarn installed
- PostgreSQL (for Prisma ORM)

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   ```
2. **Install dependencies**
   ```sh
   yarn install
   ```
3. **Set up environment variables** (Create a `.env` file)
4. **Run database migrations**
   ```sh
   npx prisma migrate dev
   ```
5. **Start the development server**
   ```sh
   yarn dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 UI Preview
![Task Manager Preview](public/images/icons/preview.png)

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit pull requests.


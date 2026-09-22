
# 🚀 HERO.IO — App Explorer

HERO.IO is a modern and responsive web application where users can explore trending applications, view detailed app information, and manage their installed apps.

The project is built with **Next.js, TypeScript, Tailwind CSS, and React**, with a focus on responsive UI, reusable components, client-side state management, and a smooth user experience.

---

## 🌐 Live Project

🔗 **Live Demo:** `Add your live deployment URL here`

🔗 **GitHub Repository:** `Add your GitHub repository URL here`

---

## ✨ Features

### 🏠 Home Page

* Modern hero/banner section
* App download buttons
* Responsive design
* Company statistics section
* Trending apps section
* Clean and modern UI
* Responsive across mobile, tablet, and desktop devices

### 📱 App Explorer

* Browse available applications
* Search applications by name
* Filter applications by category
* View application ratings
* View download statistics
* View application size
* View application details

### 📄 App Details

Each application has a dedicated details view containing:

* App name
* App logo
* Developer information
* Description
* Rating
* Total downloads
* App size
* Review statistics
* Install option

### 📥 Installation System

Users can install applications directly from the app details page.

After installation:

* Installed app is added to the user's personal collection
* Installation state is maintained through the application context
* Already-installed applications can be detected
* Users can uninstall applications

### 🗂️ Installed Apps

Users can manage all installed applications from one place.

Features include:

* Total installed app count
* Installed app list
* Sort applications by size
* Sort from low to high
* Sort from high to low
* Uninstall applications
* Success notification after uninstalling

### 🔔 Notifications

The project uses toast notifications to provide instant feedback for user actions such as:

* App installation
* App uninstallation
* Other user interactions

---

# 🛠️ Technology Stack

## Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**

## State Management

* React Context API
* React Hooks

## UI / Icons

* React Icons
* Tailwind CSS

## Notifications

* React Toastify

## Development Tools

* ESLint
* TypeScript
* Git
* GitHub

---

# 📁 Project Structure

```text
HERO.IO/
│
├── public/
│   └── assets/
│
├── src/
│   │
│   ├── app/
│   │   ├── page.tsx
│   │   ├── apps/
│   │   ├── installed/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── Banner/
│   │   ├── Facts/
│   │   ├── Trending/
│   │   ├── InstallationCard/
│   │   └── ...
│   │
│   ├── context/
│   │   └── AppProvider.tsx
│   │
│   ├── Types/
│   │   └── Types.ts
│   │
│   └── assets/
│       └── ...
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

> Project structure may vary slightly depending on the current implementation.

---

# ⚙️ Getting Started

Follow the steps below to run the project locally.

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Then move into the project directory:

```bash
cd HERO.IO
```

---

## 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

Or using pnpm:

```bash
pnpm install
```

---

## 3. Start the Development Server

```bash
npm run dev
```

The application will start on:

```text
http://localhost:3000
```

Open the URL in your browser.

---

# 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Starts the application in production mode.

### Lint

```bash
npm run lint
```

Checks the project for ESLint issues.

---

# 🧠 Application Architecture

The project follows a component-based architecture using React and Next.js.

The main application flow can be represented as:

```text
User
 │
 ▼
Next.js Application
 │
 ├── Home Page
 │    ├── Hero
 │    ├── Facts
 │    └── Trending Apps
 │
 ├── Apps Page
 │    ├── Search
 │    ├── Filter
 │    └── App Cards
 │
 ├── App Details
 │    ├── App Information
 │    ├── Statistics
 │    └── Install
 │
 └── Installed Apps
      ├── Installed Count
      ├── Sort
      ├── App List
      └── Uninstall
```

---

# 🔄 Installation Flow

The installation flow works through the application's shared context.

```text
User selects an App
        ↓
Click Install
        ↓
App ID is stored
        ↓
AppContext updates
        ↓
Installed Apps state changes
        ↓
Installed Apps page updates
```

When a user uninstalls an application:

```text
User clicks Uninstall
        ↓
uninstallApp(app.id)
        ↓
App removed from installed state
        ↓
UI updates automatically
        ↓
Succ
```

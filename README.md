# Welcome to your NeuroAdminDashboard project

A clean, modern React template with TypeScript, Vite, TailwindCSS, and ShadCN UI components. This template provides a solid foundation for building web applications with best practices in mind.

## Tech Features

- ⚡️ **Vite** - Lightning fast build tool
- 🔥 **React 18** - Latest React features
- 🧩 **TypeScript** - Type safety for better developer experience
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🧰 **ShadCN UI** - Accessible and customizable UI components
- 📱 **Responsive Design** - Mobile-first approach
- 🧭 **React Router** - Easy client-side routing
- 🔄 **React Query** - Data fetching and state management
- 🧪 **Form Handling** - React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone this repository:
```bash
git clone https://github.com/your-username/react-template-project.git
cd react-template-project
```

2. Install dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
react-template-project/
├── public/              # Static assets
│   ├── components/      # Reusable components
│   │   └── ui/          # UI components from ShadCN
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and libraries
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── .gitignore
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Customization

- **Styling**: Modify `tailwind.config.ts` to customize your design tokens
- **Components**: Add or modify components in the `src/components` directory
- **Pages**: Create new pages in the `src/pages` directory
- **Routing**: Update routes in `src/App.tsx`

## Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory, ready to be deployed.

--------------------------------------------
Neuro Admin Dashboard – Docker Deployment Guide

This guide walks you through building and running the Neuro Admin Dashboard as a Docker container.

🛠️ 1. Create a Dockerfile

Add a Dockerfile in the root of your NeuroAdminDashboar project directory with the necessary instructions to build and serve the application using Node.js and Nginx.

📂 2. Create a .dockerignore

Add a .dockerignore file to exclude unnecessary files/folders from the Docker build context, such as:

node_modules
dist
.git

🐳 3. Build Docker Image

From the NeuroAdminDashboar project directory, run the following command:

docker build -t neuro-admin-ui .

This creates a Docker image named neuro-admin-ui.

▶️ 4. Run the Docker Container

Run the container with port forwarding:

docker run -d -p 3000:80 --name neuro-admin-ui neuro-admin-ui

The app will be accessible at:

http://<your-ec2-public-ip>:3000

Replace <your-ec2-public-ip> with your actual EC2 instance public IP address.

✅ Done!

You have now containerized and deployed the Neuro Admin Dashboard using Docker.




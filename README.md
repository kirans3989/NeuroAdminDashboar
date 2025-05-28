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
# NeuroAdminDashboard Docker Setup

This README provides instructions for containerizing the NeuroAdminDashboard application using Docker.

## Docker Setup Instructions

### 1. Create a Dockerfile

Create a file named `Dockerfile` in the root directory of your project with the following content:

```
# Use Node.js as the base image for building
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use Nginx to serve the built application
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 2. Create a .dockerignore

Create a file named `.dockerignore` in the root directory of your project:

```
node_modules
npm-debug.log
build
.git
.github
.gitignore
README.md
.env.local
.env.development
```

### 3. Build Docker Image

From the NeuroAdminDashboard directory:

```
docker build -t neuro-admin-ui .
```

### 4. Run the Container

```
docker run -d -p 3000:80 --name neuro-admin-ui neuro-admin-ui
```

Then visit:
```
http://<your-ec2-public-ip>:3000
```
## Additional Information

- The Docker image uses a multi-stage build process to keep the final image size small
- The application is served using Nginx for better performance
- Port 3000 on the host is mapped to port 80 in the container

## Troubleshooting

If you encounter issues:

- Ensure Docker is properly installed and running
- Check if port 3000 is already in use on your host machine
- Verify your application builds correctly outside of Docker
```







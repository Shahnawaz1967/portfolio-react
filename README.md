# Personal Portfolio Website

A modern, responsive portfolio website built with React, Node.js, Express, and Tailwind CSS.

## Features

- Fully responsive design
- Animated UI with Framer Motion
- Contact form with Nodemailer integration
- Project showcase
- Skills and about sections
- Resume download functionality

## Project Structure

\`\`\`
portfolio/
├── client/               # React frontend
│   ├── public/           # Static files
│   └── src/              # React source code
│       ├── components/   # Reusable components
│       └── sections/     # Page sections
└── server/               # Node.js backend
    ├── server.js         # Express server
    └── .env              # Environment variables
\`\`\`

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies for both client and server:
\`\`\`bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
\`\`\`

3. Create a `.env` file in the server directory based on `.env.example`:
\`\`\`
PORT=5000
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=development
\`\`\`

Note: For Gmail, you'll need to use an App Password. See [Google's documentation](https://support.google.com/accounts/answer/185833) for details.

### Running the Application

1. Start the server:
\`\`\`bash
cd server
npm run dev
\`\`\`

2. In a separate terminal, start the client:
\`\`\`bash
cd client
npm run dev
\`\`\`

3. Open your browser and navigate to `http://localhost:5173`

## Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure the build settings:
   - Build Command: `cd client && npm run build`
   - Output Directory: `client/dist`

### Backend (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the build settings:
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && node server.js`
4. Add your environment variables in the Render dashboard

## Customization

- Update the personal information in the components
- Replace placeholder images with your own
- Add your own projects to the Projects section
- Customize the color scheme in the Tailwind configuration

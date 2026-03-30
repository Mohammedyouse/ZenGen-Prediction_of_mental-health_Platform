# ZenGen - Teen Mental Health Platform

ZenGen is a comprehensive mental health support platform designed specifically for teenagers. It combines AI-powered chat assistance with mental wellness tools to provide accessible support and resources.

![ZenGen Logo](public/logo.png)

## Features

- **Mental Health Assessment**: Complete a questionnaire to receive personalized insights about your mental wellbeing
- **AI Chatbot**: Get immediate support and practical coping strategies from our AI assistant
- **Resource Library**: Access curated articles, videos, and guides on mental health topics
- **User Profiles**: Securely track your progress and assessment history

## Quick Start Guide

### Running in VS Code

1. Install dependencies: 
   ```
   npm install
   ```

2. Set up environment variables in `.env`:
   ```
   # ChatBot functionality
   OPENAI_API_KEY=your_openai_api_key_here
   
   # Database connection (pre-configured with Neon PostgreSQL)
   DATABASE_URL=postgresql://neondb_owner:npg_lNLMy2qevG3u@ep-young-union-a1teo6iq-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
   
   # Session security
   SESSION_SECRET=zengen_secret_key_for_sessions
   ```

3. Initialize the database:
   ```
   node init-db.js
   ```

4. Run the application in VS Code:
   - Press F5, or
   - Use Run > Start Debugging, or
   - In terminal: `npx cross-env NODE_ENV=development tsx server/index.ts`

5. Open http://localhost:5000 in your browser

### Running from Command Line

1. Install dependencies:
   ```
   npm install
   ```

2. Initialize the database:
   ```
   node init-db.js
   ```

3. Start the development server:
   ```
   npx cross-env NODE_ENV=development tsx server/index.ts
   ```
   
   On Windows:
   ```
   set NODE_ENV=development && npx tsx server/index.ts
   ```

3. Open http://localhost:5000 in your browser

## Detailed Setup Instructions

For a more comprehensive guide on setting up and running the application, see [VS_CODE_SETUP.md](VS_CODE_SETUP.md).

## Technology Stack

- **Frontend**: React, TypeScript, TailwindCSS, shadcn/ui components
- **Backend**: Express, Node.js
- **AI Integration**: OpenAI API
- **Authentication**: Passport.js
- **Database**: PostgreSQL (optional)

## Project Structure

```
zengen/
├── client/             # Frontend React application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── lib/        # Utility functions
│   │   ├── pages/      # Page components
│   │   └── App.tsx     # Main application component
│   └── index.html      # HTML entry point
├── server/             # Backend Express server
│   ├── auth.ts         # Authentication logic
│   ├── db.ts           # Database connection
│   ├── index.ts        # Server entry point
│   ├── routes.ts       # API routes
│   └── storage.ts      # Data storage interface
└── shared/             # Shared code between frontend and backend
    └── schema.ts       # Database schema and types
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
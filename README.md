# ZenGen — AI-Powered Mental Wellness Platform for Teenagers

[![Production Deployment](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=flat&logo=netlify&logoColor=white)](https://zengen-prediction-platform.netlify.app)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Gemini](https://img.shields.io/badge/Google_Gemini-3.8_Flash-8E75B2?style=flat&logo=google&logoColor=white)](https://ai.google.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon_Serverless-4169E1?style=flat&logo=postgresql&logoColor=white)](https://neon.tech/)

**ZenGen** is a full-stack, AI-powered mental wellness web platform tailored specifically for teenagers and students. It combines validated multi-dimensional self-assessments, secure user session management, interactive grounding widgets, genuine external educational resources, and real-time supportive AI counseling powered by **Google Gemini 3.8 Flash** with automated crisis escalation.

---

## 🌐 Live URLs & Repository

- **Live Production Deployment**: [https://zengen-prediction-platform.netlify.app](https://zengen-prediction-platform.netlify.app)
- **GitHub Repository**: [https://github.com/Mohammedyouse/ZenGen-Prediction_of_mental-health_Platform](https://github.com/Mohammedyouse/ZenGen-Prediction_of_mental-health_Platform)
- **Local Development URL**: `http://localhost:5000`

---

## 🚀 Key Features & Upgrades

### 1. 🔐 Secure Authentication & Session Isolation
- **Dual Flow**: Clean tabbed interface supporting secure Sign In and Account Registration.
- **Form Validation**: Client and server validation with password visibility toggles (`Eye` / `EyeOff`), username/email checks, and error feedback.
- **Secure Sessions**: Protected routes using `express-session`, `connect-pg-simple` / `memorystore`, and salted password hashing (`crypto.scrypt`).
- **User Privacy**: Private assessment histories, chat logs, and profile records are strictly isolated by authenticated user ID.

### 2. 🌓 Dynamic Light & Dark Mode
- Seamless theme switching using `next-themes` with persistent local storage.
- Custom modern design tokens featuring calm slate neutrals and vibrant purple accents (`hsl(265, 83%, 58%)`).
- Zero flash of incorrect theme, accessible focus rings, and high contrast compliant UI across all cards, modals, charts, and buttons.

### 3. 📊 Clinical-Grade Mental Health Assessment & Visualizations
- **Validated 20-Question Questionnaire**: Evaluates Mood/Depressive symptoms, Anxiety/Stress, and Social/Relationship well-being.
- **Multi-Dimensional Recharts Visualizations**:
  - **Radar Chart**: Compares dimension distribution across Mood, Anxiety, and Social wellness.
  - **Bar Chart**: Breakdown of raw and normalized dimension scores with risk threshold indicators.
  - **Longitudinal Trend Chart**: Tracks user score progression over multiple assessments over time.
- **Gemini 3.8 Flash AI Clinical Summary**: Tailored reflection, recommendations, and clear non-diagnostic disclaimer.

### 4. 🤖 AI Support Chatbot (Powered by Gemini 3.8 Flash)
- **Verified Gemini Model**: Connected to Google's latest `gemini-3.8-flash` model via `@google/generative-ai`.
- **Immediate Crisis Escalation**: Automatic keyword safety detection triggers instant **988 Suicide & Crisis Lifeline** guidance and emergency hotline cards.
- **Conversational Memory**: Supports contextual chat history, message timestamps, quick prompt suggestion pills, typing indicators, and one-click retry.

### 5. 🆘 Dedicated Crisis Support Center (`/crisis`)
- **Direct Emergency Access**: One-click calling/texting for 988 Suicide & Crisis Lifeline, Crisis Text Line (741741), The Trevor Project, and International hotlines.
- **Interactive Box Breathing Tool**: Visual 4s inhale — 4s hold — 4s exhale — 4s hold pacing animation for immediate somatic anxiety relief.
- **5-4-3-2-1 Sensory Grounding Exercise**: Guided step-by-step checklist to de-escalate panic attacks.

### 6. 📚 Curated Mental Health Resource Library
- **10+ Verified Medical & Educational Sources**: Real content from NIMH, Mayo Clinic, Child Mind Institute, Sleep Foundation, Johns Hopkins Medicine, and Harvard Health.
- **Multimedia Integration**: Curated educational YouTube videos and peer-reviewed articles.
- **Interactive Filters**: Instant search by title/keywords and category pills (Anxiety, Depression, Mindfulness, Sleep, Academic Stress).

### 7. 👤 Comprehensive User Profile
- Displays authenticated user information, account creation date, and assessment activity summary.
- Interactive Theme Mode selector (Light / Dark / System).
- Secure password change form with validation.
- Complete historical record of previous assessments.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, TypeScript, Vite 6, TailwindCSS, Radix UI primitives, Recharts, Framer Motion, Lucide Icons, `next-themes` |
| **Backend** | Node.js, Express, TypeScript, `tsx`, Passport.js, `express-session`, `cors`, Prometheus metrics |
| **Database & ORM** | PostgreSQL (Neon Serverless), Drizzle ORM, Drizzle Zod |
| **Artificial Intelligence**| Google Gemini 3.8 Flash (`@google/generative-ai`) |
| **DevOps & Hosting** | Netlify (Edge CDN & Serverless functions), GitHub Actions CI/CD |

---

## 📦 Project Directory Structure

```
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable UI widgets & charts
│   │   │   │── AssessmentVisualizations.tsx # Radar, Bar, & Trend charts
│   │   │   │── Navigation.tsx  # Desktop header with ThemeToggle & Crisis button
│   │   │   │── MobileNavigation.tsx # Responsive mobile bottom navigation
│   │   │   │── ThemeToggle.tsx # Accessible Sun/Moon theme switcher
│   │   │   └── ui/             # Radix-based UI components (buttons, cards, dialogs)
│   │   ├── hooks/              # Custom React hooks (use-auth, use-toast)
│   │   ├── pages/              # Application views
│   │   │   │── Home.tsx        # Dynamic dashboard with 4 interactive feature cards
│   │   │   │── auth-page.tsx   # Sign In & Registration portal
│   │   │   │── AssessmentIntro.tsx # Questionnaire introduction & instructions
│   │   │   │── AssessmentQuestion.tsx # Multi-step questionnaire wizard
│   │   │   │── AssessmentResults.tsx  # Score analysis, charts, & Gemini summaries
│   │   │   │── Chat.tsx        # Gemini 3.8 Flash conversational AI support
│   │   │   │── Resources.tsx   # Verified articles & videos library
│   │   │   │── CrisisSupport.tsx # 24/7 hotlines, box breathing & grounding
│   │   │   └── Profile.tsx     # User settings, history, & theme preferences
│   │   ├── App.tsx             # Route definitions & AuthProvider wrapper
│   │   └── index.css           # Design tokens, CSS variables, & animations
├── server/                     # Backend Express server
│   ├── app.ts                  # Express application factory with middleware
│   ├── auth.ts                 # Passport local authentication & password hashing
│   ├── db.ts                   # Neon PostgreSQL Drizzle connection
│   ├── index.ts                # Server entry point (port 5000)
│   ├── metrics.ts              # Prometheus metrics monitoring
│   ├── routes.ts               # REST API endpoints & Gemini 3.8 Flash integration
│   ├── storage.ts              # Database repository interface (Drizzle ORM)
│   └── app.test.ts             # Automated integration tests
├── shared/                     # Universal TypeScript schemas & validation
│   └── schema.ts               # Drizzle database tables & Zod schemas
└── netlify/functions/          # Serverless endpoints for production deployment
```

---

## ⚙️ Local Development Setup

### Prerequisites
- Node.js 18.x or 20.x
- Google Gemini API Key ([Google AI Studio](https://aistudio.google.com/))
- Neon PostgreSQL connection string ([Neon Console](https://neon.tech/))

### 1. Clone & Install
```bash
git clone https://github.com/Mohammedyouse/ZenGen-Prediction_of_mental-health_Platform.git
cd ZenGen-Prediction_of_mental-health_Platform
npm install
```

### 2. Environment Variables
Create a `.env` file in the project root:
```env
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@ep-sample-pooler.us-east-2.aws.neon.tech/zengen?sslmode=require
SESSION_SECRET=your_super_secret_session_key_at_least_32_characters
GEMINI_API_KEY=AIzaSy...your_gemini_api_key_here
```

### 3. Run Automated Tests
```bash
npm test
```
*Executes all API integration tests: Health check, Resources, Gemini assessment scoring, AI chat, Crisis keyword escalation, and Unauthorized route guards.*

### 4. Run TypeScript Check & Production Build
```bash
npm run check
npm run build
```

### 5. Start Local Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5000` in your browser.

---

## ☁️ Production Deployment on Netlify

The frontend is deployed to Netlify with single-page application routing configured via `netlify.toml`.

### Required Netlify Environment Variables
In the **Netlify Dashboard** -> **Site configuration** -> **Environment variables**, set:
- `DATABASE_URL`: Your Neon PostgreSQL connection string.
- `SESSION_SECRET`: A long, randomly generated secret string.
- `GEMINI_API_KEY`: Your Google Gemini API key.
- `NODE_ENV`: `production`

---

## ⚖️ Mental Health Safety & Disclaimer

ZenGen is designed strictly for mental wellness psychoeducation, emotional self-reflection, and supportive conversation. **It does not provide medical or clinical diagnoses, nor does it replace professional mental health therapy or psychiatric treatment.** If you or someone you know is in crisis, call or text **988** (US & Canada), contact the Crisis Text Line by texting **HOME to 741741**, or visit your nearest emergency room.

---

## 📄 License
This project is licensed under the MIT License.

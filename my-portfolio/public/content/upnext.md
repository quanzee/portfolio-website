TLDR

UpNext is a web app prototype designed to alleviate student burnout by breaking down daunting assignments into manageable, deadline-aware study sessions. Developed in roughly 36 hours, this project marked my first foray into the "pressure cooker" environment of a hackathon and served as a deep dive into rapid prototyping with React, Next.js, and Tailwind CSS.

**Role:** Lead UI/UX Designer & Frontend Contributor

**Team:** 3 Members

**Tech Stack:** React, Next.js, TypeScript, Tailwind CSS, Github

**Key Outcome:** A high-fidelity, functional frontend prototype that visualizes student progress and task decomposition.

[Click here to watch a demonstration video of UpNext](https://youtu.be/ZTvxFacrrQI)

### The Problem Space

The prompt was simple: "Build an app or website that solves a problem you experience every day at university."

Our top 2 options after brainstroming were:

**Desk Tracker**: High impact, but required IoT hardware/sensors that were unavailable within 36 hours.

**Assignment Planner**: High emotional resonance and solvable through pure software.

We chose the latter, focusing on the "paralysis" students feel when staring at a massive 40% weighting assignment without knowing where to start.

### Design and User Flow

Because of the limited time, I skipped low-fidelity sketching and moved straight into Figma to build a high-fidelity user flow.

We decided on a web app so that it could be used on both desktop and mobile, although for the purpose of the hackathon, we focused on the desktop version only.

I used ChatGPT to aid me in brainstorming the "User Preference Schema", identifying that an effective planner needs to know not just the deadline, but the user's perceived difficulty and energy levels to truly be "adaptive."

### The "Vibe-Coding" Process

With only one teammate experienced in web development, we adopted a "Semi-Vibe-Coding" workflow. We didn't just let AI write the app; we used it as a pair programmer.

#### The Technical Workflow:
1. **Component Scaffolding**: I fed my Figma designs and CSS requirements into ChatGPT to generate baseline Tailwind components.

2. **Manual Integration**: I manually wired these components into the Next.js file structure, which although was a slower process than directly vibe coding in VS Code, gave me more agency and transparency over the development of the code.

3. **The Version Control Hurdle**: Coordinating merges on GitHub while three people are simultaneously "vibe-coding" created significant merge conflicts. This taught me the importance of atomic commits and clear component separation.

### Challenges

1. **Two Steps Forward, One Step Back**
As a beginner, I encountered the "Two Steps Forward, One Step Back" trap. I would ask the AI to add a feature, which would inadvertently break a previous function. Without a deep understanding of the underlying JavaScript, I had to develop a systematic debugging logic: isolating the broken component and comparing the diffs manually until I understood why the code failed.

2. **Form vs. Function Trade-off**
We faced a critical pivot point: Do we spend 5 hours trying to connect a real LLM backend (API), or do we polish the UI to perfection? Given the hackathon's judging criteria focused on "Showcase Readiness," we chose to mock the backend. We simulated the AI's logic through hard-coded triggers to ensure a seamless presentation experience, a move that prioritised the "User Story" over technical completeness.

### Personal Reflections

1. **Beyond the "AI Trend"**
Watching the winning top 3 teams was a humbling experience. While we focused on a "fanciful" AI-powered app, the winners built simpler, fully functional tools that solved niche problems (like connecting universities across Melbourne around common interests).
**Lesson learned**: AI should be the engine, not the identity. A project stands or falls on the strength of the solution, not the buzzwords in the tech stack. Next time, I would build a "boring" but 100% functional CRUD app before adding any AI layers.

2. **The Shift to "Logic-First" Development**
This hackathon was the catalyst for my current focus in my Master’s program. I realized that while AI can write code, it cannot maintain architectural integrity. This project motivated me to move away from "vibe-coding" and toward deeply understanding data structures and state management, so I can lead the AI rather than follow it.
**Lesson learned**: Whenever given the opportunity, I should always try to understand the mechanisms underlying the code provided by AI instead of purely copying and pasting. It is still important to understand the code.
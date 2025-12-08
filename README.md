# 🔮 Astrology Platform Frontend

A modern https://vedickundli.vercel.app, high-performance frontend for the Vedic Astrology platform, built with [Next.js 16](https://nextjs.org/) and [Bun](https://bun.sh/). This application provides a seamless and interactive user experience for exploring horoscopes, generating kundlis, matchmaking, and more.

## ✨ Features

- **🌟 Daily Rashifal**: AI-powered daily horoscopes with personalized insights.
- **📊 Kundli Generation**: Detailed birth charts and planetary positions.
- **💑 Match Making**: Guna Milan and compatibility analysis for marriage.
- **🔢 Numerology**: Insights based on name and birth date.
- **📅 Panchang**: Daily Hindu calendar details (Tithi, Nakshatra, Yoga).
- **🎨 Modern UI**: Beautiful, responsive design using Tailwind CSS v4 and Radix UI.
- **⚡ High Performance**: Optimized with Bun, Vercel Speed Insights, and lazy loading.
- **🎭 Smooth Animations**: Interactive elements powered by Framer Motion.

## 🚀 Tech Stack

### Core

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Runtime**: [Bun](https://bun.sh/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

### UI & Styling

- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) (Primitives)
- **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler-icons.io/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & `tw-animate-css`
- **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`

### State & Logic

- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Markdown Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown)
- **Graphics**: [OGL](https://github.com/oframe/ogl) (for lightweight WebGL)

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) runtime installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Astrology/frontend_bunJS
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Setup Environment Variables:
   Create a `.env` file in the root directory (refer to `.env.example` if available) and add necessary API keys and endpoints.

### Development

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build & Production

To build the application for production:

```bash
bun run build
```

To start the production server:

```bash
bun start
```

## 📂 Project Structure

```
frontend_bunJS/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # Basic UI elements (Buttons, Inputs, etc.)
│   │   └── ...
│   ├── lib/              # Utility functions and helpers
│   ├── hooks/            # Custom React hooks
│   ├── store/            # Zustand state stores
│   └── styles/           # Global styles
├── public/               # Static assets
├── .env                  # Environment variables
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🌐 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket).
2. Import the project into Vercel.
3. Vercel will detect Next.js and Bun automatically.
4. Add your environment variables in the Vercel dashboard.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## Author

Made with ❤️ by Sumit

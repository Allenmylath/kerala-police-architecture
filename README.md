# Kerala Police AI Architecture

Interactive architecture diagrams for Kerala Police AI-Powered Information Assistant.

## Features

- 🏗️ **System Architecture** - Complete system overview with 5 layers
- 📊 **Data Ingestion Pipeline** - Processing 6,000+ URLs 
- 🔄 **Query Processing Flow** - 7-step query handling with quality mechanisms

## Tech Stack

- Next.js 15
- React 19
- No external dependencies (pure React)

## Deploy to Vercel

### Method 1: Deploy from GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kerala-police-architecture.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"
   - Done! Your site will be live at `https://your-project.vercel.app`

### Method 2: Deploy with Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Accept defaults
   - Your site will be deployed!

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   ```
   http://localhost:3000
   ```

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
kerala-police-architecture/
├── app/
│   ├── layout.js          # Root layout
│   └── page.js            # Main page with all diagrams
├── public/                # Static assets
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
└── README.md             # This file
```

## Features

- ✅ Responsive design
- ✅ Tab-based navigation
- ✅ Color-coded architecture components
- ✅ Interactive hover effects
- ✅ No external CSS files needed
- ✅ Static export ready for any hosting

## License

MIT

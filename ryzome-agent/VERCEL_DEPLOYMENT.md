# Vercel Deployment Guide

## 🚀 Deploy Your Ryzome Agent to Vercel

### Step 1: Go to Vercel
1. Visit [vercel.com](https://vercel.com)
2. Sign in with your GitHub account (or create account if needed)

### Step 2: Import Your Project
1. Click **"New Project"** or **"Add New..."** → **"Project"**
2. Select **"Import Git Repository"**
3. Find your `ryzome-chat` repository
4. Click **"Import"** next to it

### Step 3: Configure Project Settings
1. **Project Name**: `ryzome-agent` (or your preferred name)
2. **Framework Preset**: Next.js (should auto-detect)
3. **Root Directory**: `ryzome-agent` (important!)
4. **Build Command**: `npm run build` (default)
5. **Output Directory**: `.next` (default)
6. **Install Command**: `npm install` (default)

### Step 4: Add Environment Variables
Click **"Environment Variables"** and add these:

```
GEMINI_API_KEY=your_actual_gemini_api_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_APP_URL=https://your-vercel-app-url.vercel.app
```

**Note**: You'll get the `NEXT_PUBLIC_APP_URL` after deployment, so you can add it later.

### Step 5: Deploy
1. Click **"Deploy"**
2. Wait for the build to complete (usually 2-3 minutes)
3. You'll get a live URL like `https://ryzome-agent-xyz.vercel.app`

### Step 6: Update App URL (Optional)
1. Go to your project settings in Vercel
2. Add/update the `NEXT_PUBLIC_APP_URL` environment variable with your live URL
3. Redeploy if needed

## ✅ What You'll Get

After deployment, your Ryzome Agent will be live with:
- ✅ **Custom Hero Image** - Your Subtract.png prominently displayed
- ✅ **Transparent Agent Avatars** - Your Subtract.ico visible in chat
- ✅ **Day/Night Mode Toggle** - Full theme switching
- ✅ **Conversation History** - Ultra-compact cards for efficient browsing
- ✅ **AI-Powered Chat** - Complete Ryzome knowledge with Gemini 2.5 Flash
- ✅ **Markdown Rendering** - Rich text formatting for responses
- ✅ **Database Persistence** - Supabase integration for conversation storage

## 🔧 Troubleshooting

**If build fails:**
- Check that Root Directory is set to `ryzome-agent`
- Verify all environment variables are added correctly
- Make sure your Gemini API key is valid

**If app loads but chat doesn't work:**
- Verify your Gemini API key in environment variables
- Check Supabase environment variables are correct
- Look at Vercel function logs for errors

**If Supabase connection fails:**
- Double-check your Supabase URL and keys
- Make sure your Supabase database schema is set up
- Verify RLS policies are configured correctly

## 🎯 Post-Deployment

Once deployed:
1. **Test the application** - Try sending messages and switching themes
2. **Check conversation history** - Verify database integration works
3. **Test both themes** - Ensure day/night mode works properly
4. **Share your live URL** - Your Ryzome Agent is ready for users!

## 📝 Environment Variables Reference

```env
# Required for AI functionality
GEMINI_API_KEY=your_gemini_api_key

# Required for conversation persistence
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Optional - your live app URL
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

---

**Ready to deploy?** Follow the steps above and your Ryzome Agent will be live in minutes! 🚀

# Supabase Setup Guide

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Choose your organization
5. Fill in project details:
   - **Name**: `ryzome-agent` (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to your location
6. Click "Create new project"
7. Wait for the project to be created (takes 1-2 minutes)

## Step 2: Set Up Database Schema

1. Once your project is ready, go to the **SQL Editor** in the left sidebar
2. Click "New Query"
3. Copy the entire contents of `supabase-schema.sql` from this project
4. Paste it into the SQL editor
5. Click "Run" to execute the schema
6. You should see success messages for all the table creations

## Step 3: Get Your API Keys

1. Go to **Settings** > **API** in the left sidebar
2. You'll see your project details:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **API Keys**:
     - `anon` `public` key (this is safe for client-side)
     - `service_role` `secret` key (keep this secret!)

## Step 4: Update Environment Variables

1. Open your `.env.local` file
2. Update it with your Supabase credentials:

```env
# Gemini AI Configuration
GEMINI_API_KEY=your_actual_gemini_api_key_here

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

## Step 5: Switch to Database Version

Run this command to switch back to the version with database support:

```bash
cd ryzome-agent
mv src/app/api/chat/route.ts src/app/api/chat/route-no-db-backup.ts
mv src/app/api/chat/route-with-db.ts src/app/api/chat/route.ts
```

## Step 6: Test the Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:3001
3. Send a test message
4. Check your Supabase dashboard:
   - Go to **Table Editor** > **conversations**
   - You should see a new conversation created
   - Go to **Table Editor** > **messages**
   - You should see your messages stored

## Verification Checklist

- [ ] Supabase project created
- [ ] Database schema executed successfully
- [ ] Environment variables updated with correct values
- [ ] Switched to database-enabled API route
- [ ] Development server restarted
- [ ] Test message sent successfully
- [ ] Conversation and messages appear in Supabase dashboard

## Troubleshooting

**If you get "supabaseUrl is required" error:**
- Double-check your `NEXT_PUBLIC_SUPABASE_URL` in `.env.local`
- Make sure there are no extra spaces or quotes
- Restart the development server after updating `.env.local`

**If you get database connection errors:**
- Verify your `SUPABASE_SERVICE_ROLE_KEY` is correct
- Check that the database schema was executed successfully
- Ensure your Supabase project is active and running

**If messages aren't being saved:**
- Check the browser console for errors
- Verify the API route is using the database version
- Check Supabase logs in the dashboard under **Logs**

## What You'll Get

Once set up, you'll have:
- ✅ Persistent conversation storage
- ✅ Message history across sessions
- ✅ Conversation management
- ✅ Usage analytics and token tracking
- ✅ Scalable database infrastructure

Ready to set this up? Follow the steps above and let me know if you run into any issues!

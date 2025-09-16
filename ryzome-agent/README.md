# Ryzome Agent - AI Customer Support Chat

A modern AI-powered customer support chat application for Ryzome, built with Next.js, Gemini 2.5 Flash, and Supabase.

## 🚀 Features

- **AI-Powered Responses**: Uses Google Gemini 2.5 Flash for intelligent, context-aware responses
- **Complete Ryzome Knowledge**: Trained on comprehensive Ryzome documentation
- **Streaming Responses**: Real-time message streaming for better user experience
- **Persistent Conversations**: Chat history stored in Supabase PostgreSQL
- **Modern UI**: Built with shadcn/ui and Tailwind CSS
- **Responsive Design**: Works on desktop and mobile devices
- **Quick Actions**: Pre-built buttons for common Ryzome questions

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **UI**: shadcn/ui, Tailwind CSS, Lucide React
- **AI**: Google Gemini 2.5 Flash
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## ⚡ Quick Start (2 Minutes)

### 1. Get Your Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API Key" in the left sidebar
4. Click "Create API Key" 
5. Copy the generated API key

### 2. Set Up Environment Variables

1. Copy your Gemini API key
2. Update `.env.local` with your API key:

```env
# Gemini AI Configuration
GEMINI_API_KEY=your_actual_gemini_api_key_here

# Supabase Configuration (optional for basic testing)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3001
```

### 3. Install and Run

```bash
npm install
npm run dev
```

### 4. Test the Application

1. Open http://localhost:3001
2. Try asking questions like:
   - "What is Ryzome?"
   - "How do I get started?"
   - "How do I add images?"
   - "What are the keyboard shortcuts?"

## 📋 Full Setup with Database

For persistent conversation storage, follow the [Supabase Setup Guide](./SUPABASE_SETUP.md).

## 🎯 What Users Can Ask

The AI assistant can help with:
- "What is Ryzome?" - Overview and core concepts
- "How do I get started?" - Step-by-step onboarding
- "How do I add images?" - Feature-specific guidance
- "What are keyboard shortcuts?" - Productivity tips
- "How do I connect nodes?" - Advanced workflows
- And much more based on comprehensive Ryzome documentation!

## 📁 Project Structure

```
ryzome-agent/
├── src/
│   ├── app/
│   │   ├── api/chat/route.ts      # Chat API endpoint
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Main page
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatContainer.tsx  # Main chat component
│   │   │   ├── MessageBubble.tsx  # Individual message
│   │   │   └── MessageInput.tsx   # Message input field
│   │   └── ui/                    # shadcn/ui components
│   └── lib/
│       ├── gemini.ts              # Gemini AI service
│       ├── ryzome-context.ts      # Ryzome documentation context
│       ├── supabase.ts            # Supabase client
│       └── utils.ts               # Utility functions
├── supabase-schema.sql            # Database schema
├── SUPABASE_SETUP.md             # Database setup guide
└── README.md                      # This file
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add your environment variables in Vercel's dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:
- `GEMINI_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_APP_URL` (your production URL)

## 🔍 API Endpoints

### POST /api/chat

Send a message to the AI assistant.

**Request Body:**
```json
{
  "message": "What is Ryzome?",
  "conversationId": "optional-conversation-id",
  "history": [
    {
      "role": "user",
      "content": "Previous message"
    }
  ]
}
```

**Response:**
- Streaming text response
- `X-Conversation-Id` header with conversation ID

## 🎨 Customization

### Adding New Quick Actions

Edit `src/components/chat/MessageInput.tsx` and add new buttons:

```tsx
<Button
  variant="outline"
  size="sm"
  onClick={() => onSend("Your custom question")}
  disabled={disabled}
  className="text-xs"
>
  Custom Action
</Button>
```

### Updating Ryzome Context

The system automatically loads all markdown files from the `../ryzome-wikis/` directory. To update the AI's knowledge:

1. Edit the markdown files in the `ryzome-wikis` folder
2. Restart the development server
3. The AI will have access to the updated content

## 📊 Monitoring

The application logs:
- Token usage for cost monitoring
- API errors and performance metrics
- Database operations (when using Supabase)

Check your Vercel dashboard and Supabase logs for monitoring.

## 🔒 Security

- Database uses Row Level Security (RLS)
- API keys are server-side only
- Input validation on all endpoints
- Rate limiting recommended for production

## 🐛 Troubleshooting

**If you get API errors:**
- Make sure your Gemini API key is correct
- Check that you have API quota remaining
- Verify the key has the right permissions

**If the UI doesn't load:**
- Make sure you're on the correct port (check terminal output)
- Check the terminal for any compilation errors

**If responses are slow:**
- This is normal for the first request (cold start)
- Subsequent requests should be much faster

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

---

Built with ❤️ for the Ryzome community

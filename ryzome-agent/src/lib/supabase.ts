import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Conversation {
  id: string
  created_at: string
  updated_at: string
  title: string
}

export interface Message {
  id: string
  conversation_id: string
  content: string
  role: 'user' | 'assistant'
  created_at: string
  tokens_used?: number
}

export interface ChatAnalytics {
  id: string
  conversation_id: string
  question_type?: string
  response_time_ms: number
  tokens_used: number
  created_at: string
}

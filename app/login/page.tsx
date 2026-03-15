'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { BookOpen, Eye, EyeOff, Loader2 } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); setLoading(false) }
    else { router.push('/dashboard'); router.refresh() }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md animate-scale-in">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-crimson-gradient shadow-crimson-lg mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="gothic-title text-3xl font-semibold text-gradient-crimson mb-2">NotesSaver</h1>
          <p className="text-ash-dark text-sm">Your thoughts, preserved in darkness</p>
        </div>
        <div className="card p-8">
          <h2 className="gothic-title text-xl text-ash-light mb-6 text-center">Welcome Back</h2>
          {error && <div className="mb-5 p-3 rounded-lg border border-crimson/40 bg-crimson/10 text-crimson-glow text-sm">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-ash text-sm mb-2 font-medium">Email Address</label>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="input-field" />
            </div>
            <div>
              <label htmlFor="password" className="block text-ash text-sm mb-2 font-medium">Password</label>
              <div className="relative">
                <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required className="input-field pr-12" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-ash-dark hover:text-ash transition-colors">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2 mt-2">
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" />Signing in...</> : 'Sign In'}
            </button>
          </form>
          <p className="text-center text-ash-dark text-sm mt-6">
            Don't have an account?{' '}
            <Link href="/signup" className="text-crimson-glow hover:text-white transition-colors font-medium">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

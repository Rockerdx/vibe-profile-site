'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface AuthTokens {
  accessToken: string
  refreshToken: string
  expiresIn: number
}

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  getAccessToken: () => string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
const TOKEN_KEY = 'vibe_admin_tokens'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored tokens on mount
    const tokens = getStoredTokens()
    if (tokens?.accessToken) {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const getStoredTokens = (): AuthTokens | null => {
    if (typeof window === 'undefined') return null
    const stored = localStorage.getItem(TOKEN_KEY)
    return stored ? JSON.parse(stored) : null
  }

  const setStoredTokens = (tokens: AuthTokens | null) => {
    if (typeof window === 'undefined') return
    if (tokens) {
      localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens))
    } else {
      localStorage.removeItem(TOKEN_KEY)
    }
  }

  const login = async (username: string, password: string) => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Login failed')
    }

    const tokens: AuthTokens = await response.json()
    setStoredTokens(tokens)
    setIsAuthenticated(true)
  }

  const logout = () => {
    setStoredTokens(null)
    setIsAuthenticated(false)
  }

  const getAccessToken = (): string | null => {
    const tokens = getStoredTokens()
    return tokens?.accessToken || null
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, getAccessToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

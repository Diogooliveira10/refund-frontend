import { useState } from "react"
import { createContext } from "react"

type AuthContext = {
  session: null | UserAPIResponse
}

export const AuthContext = createContext({} as AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null)

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  )
}

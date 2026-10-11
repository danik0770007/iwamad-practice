import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type LikesContextValue = { likes: number; addLike: () => void }

const LikesContext = createContext<LikesContextValue | null>(null)

type LikesProviderProps = { children: ReactNode }

export function LikesProvider({ children }: LikesProviderProps) {
  const [likes, setLikes] = useState<number>(0)
  const addLike = () => setLikes((count) => count + 1)

  return <LikesContext.Provider value={{ likes, addLike }}>{children}</LikesContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLikes(): LikesContextValue {
  const context = useContext(LikesContext)
  if (context === null) {
    throw new Error('useLikes must be used inside <LikesProvider>')
  }
  return context
}

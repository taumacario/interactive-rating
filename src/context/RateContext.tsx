import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'

interface RateContextData {
  hideThanks: boolean
  setHideThanks: Function
  rate: number
  setRate: Function
  bla: () => void
}

interface RateContextProviderProps {
  children: ReactNode
}

export const RateContext = createContext({} as RateContextData)

export function RateContextProvider({ children } : RateContextProviderProps) {
  const [hideThanks, setHideThanks] = useState(true)
  const [rate, setRate] = useState(0)

  function bla() {
    setHideThanks(false)
  }
  
  return(
    <RateContext.Provider value={{hideThanks, setHideThanks, rate, setRate, bla}}>
      {children}
    </RateContext.Provider>
  );
}
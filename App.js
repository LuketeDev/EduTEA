import { useEffect, useState } from "react"
import { LoginField } from "./src/components/LoginField"
import { LoginScreen } from "./src/screens/LoginScreen"
import { SplashScreen } from "./src/screens/SplashScreen"

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash')
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('login')
    }, 3000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      {currentScreen === 'splash' && <SplashScreen />}
      {currentScreen === 'login' && <LoginScreen />}
    </>
  )
}
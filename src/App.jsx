import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  console.log('time', time)
  console.log('isRunning', isRunning)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {

        setTime((prevTime) => prevTime + 1)


      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isRunning])

  const StartTimer = () => {
    console.log('StartTimer')
    setIsRunning(true)


  }

  const PauseTimer = () => {
    setIsRunning(false)
  }

  const ResetTimer = () => {
    setTime(0)
  }

  return (
    <>


      <div>
        <h1>{time}</h1>
      </div>


      <div>
        <button onClick={StartTimer}>Start</button>
        <button onClick={PauseTimer}>Pause</button>
        <button onClick={ResetTimer}>Reset</button>
      </div>
    </>
  )
}

export default App

import { Habit } from './components/Habit'
import './App.css'
import "./styles/global.css"

export function App() {
  return (
    <div className="App">
      <Habit completed={1}/>
      <Habit completed={2}/>
      <Habit completed={3}/>
      <Habit completed={4}/>
    </div>
  )
}

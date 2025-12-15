import { useState } from 'react'
import AuthChoicePage from './pages/AuthChoice'
import { BrowserRouter,Routes,Route, } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthChoicePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/Notfound"


function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index  element={<Home/>}/>

      <Route path="*" element={<NotFound/>}/>    
      {/* any element which s not defined will be shown this page   */}
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

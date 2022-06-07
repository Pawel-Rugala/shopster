import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Inna from './Inna'

export default function Router() {
 return (
  <BrowserRouter>
   <Routes>
    <Route index element={<App />} />
    <Route path='/inna' element={<Inna />} />
   </Routes>
  </BrowserRouter>
 )
}

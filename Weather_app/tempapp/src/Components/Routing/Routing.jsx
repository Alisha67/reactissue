import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import HomeBootStrap from '../HomeBootStrap'
import About from './About'

const Routing = () => {
  return (
<>
<BrowserRouter>
<HomeBootStrap/>
<Routes>
<Route path="/homepage" element={<Home/>} />
<Route path="/aboutpage" element={<About/>} />

</Routes>

</BrowserRouter>
</>
  )
}

export default Routing

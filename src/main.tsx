import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DasboardProfile from './Componentes/DasboardProfile.tsx'
import ProtecterRouter from './Componentes/ProtecterRouter.tsx'
import Dashboard from './Componentes/Dashboard.tsx'
import Narbar from './Componentes/Narbar.tsx'
import SingleBook from './Componentes/SingleBook.tsx'
import Layoute from './Componentes/Layout.tsx'
import SessionHelpers from './helpers/SessionHelpers.tsx'
import { CalendarDemo } from './Componentes/Calendaris.tsx'      
import Soto from './Componentes/Soto.tsx'  
import Votacion from './Componentes/Votacion.tsx'
import CreateContextodo from './Contexto/CreateContext.tsx'
createRoot(document.getElementById('root')!).render(   

  <StrictMode>
    <CreateContextodo>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Rutas que tendrán Navbar */}

        {/* <Route path='/router' element={<SessionHelpers></SessionHelpers>} >   </Route>
        <Route element={<Layoute />}>

          <Route
            path="/user/:token"
            element={<DasboardProfile />}
          />
          <Route
            path="/book/:id"
            element={<SingleBook />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtecterRouter>
                <Dashboard />
              </ProtecterRouter>
            }
          />

        </Route>
 
  */}
        {/* <Route path='/calendar' element={<CalendarDemo></CalendarDemo>} >
        </Route>
         */}
        {/* <Route  path='/elemnto'  element={<Soto></Soto>}  ></Route> */}
        <Route path='/votaciones'  element={<Votacion></Votacion>} ></Route>
      </Routes>
    </BrowserRouter> 

    </CreateContextodo>

    
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { UserAuthPage } from './Features/User/Pages/UserAuth.tsx'
import { LandingPage } from './Features/LandingPage/Pages/LandingPage.tsx'
import { MenuCreationPage } from './Features/Menu/Pages/MenuCreation.tsx'
import { RouteAuthProvider } from './Features/RouteAuthProvider.tsx'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>

        {/*Public Routes*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<UserAuthPage />} />
        {/*Protected Routes*/}
        <Route element={<RouteAuthProvider />}>
          <Route path="dashboard" element={<MenuCreationPage />} />
        </Route>
      </Route>
    </>
  )
)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}>
    </RouterProvider>
  </StrictMode>,
)

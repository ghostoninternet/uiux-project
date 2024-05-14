import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import { Fragment } from 'react'
import DefaultLayouts from './components/DefaultLayouts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <Router>
      <div className="app">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              let Layout = DefaultLayouts
 
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }
 
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
      </div>
      <ToastContainer autoClose={5000} pauseOnHover={false} draggable={true}  />
    </Router>
  )
}

export default App

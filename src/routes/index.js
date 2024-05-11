import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp }
]

export { publicRoutes }
import Calendar from "../pages/Calendar"
import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

const publicRoutes = [
  { path: '/', component: Home },
<<<<<<< HEAD
  { path: '/sign-in', component: SignIn, layout: null },
  { path: '/sign-up', component: SignUp, layout: null }
=======
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
  { path: '/calendar', component: Calendar },
>>>>>>> 9a1961350a0132a44e107b65f1196a3f52413868
]

export { publicRoutes }
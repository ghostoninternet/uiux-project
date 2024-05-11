import Calendar from "../pages/Calendar"
import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import KPIdetail from "../pages/KPIdetail"
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/sign-in', component: SignIn },
  { path: '/sign-up', component: SignUp },
  { path: '/calendar', component: Calendar },
  { path: '/kpi', component: KPIdetail },
]

export { publicRoutes }
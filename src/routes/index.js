/* eslint-disable no-unused-vars */
import Dashboard from "../pages/Dashboard"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import KPIdetail from "../pages/KPIdetail"
import ViewKPI from "../pages/ViewKPI/ViewKPI"
import Profile from "../pages/Profile"
import Home from "../pages/Home"

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/kpi', component: ViewKPI },
  { path: '/kpi/view-detail', component: KPIdetail },
  { path: '/profile', component: Profile },
  { path: '/sign-in', component: SignIn, layout: null },
  { path: '/sign-up', component: SignUp, layout: null },
]

export { publicRoutes }
import Calendar from "../pages/Calendar"
import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import KPIdetail from "../pages/KPIdetail"
import ViewKPI from "../pages/ViewKPI/ViewKPI"
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/sign-in', component: SignIn, layout: null },
  { path: '/sign-up', component: SignUp, layout: null },
  { path: '/calendar', component: Calendar },
  { path: '/kpi', component: ViewKPI },
  { path: '/kpi/view-detail', component: KPIdetail }
]

export { publicRoutes }
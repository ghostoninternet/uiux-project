/* eslint-disable no-unused-vars */
import Calendar from "../pages/Calendar"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import KPIdetail from "../pages/KPIdetail"
import ViewKPI from "../pages/ViewKPI/ViewKPI"
import Profile from "../pages/Profile"
const publicRoutes = [
  { path: '/', component: Calendar },
  { path: '/sign-in', component: SignIn, layout: null },
  { path: '/sign-up', component: SignUp, layout: null },
  { path: '/kpi', component: ViewKPI },
  { path: '/profile', component: Profile},
  { path: '/kpi/view-detail', component: KPIdetail }
]

export { publicRoutes }
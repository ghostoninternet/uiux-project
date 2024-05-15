/* eslint-disable no-unused-vars */
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import KPIdetail from "../pages/KPIdetail"
import ViewKPI from "../pages/ViewKPI/ViewKPI"
import Profile from "../pages/Profile"
import Home from "../pages/Home"
import Calendar from "../pages/Calendar"
import Setting from "../pages/Setting"
import Edit from "../pages/Profile/components/Edit"

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Home },
  { path: '/calendar', component: Calendar },
  { path: '/kpi', component: ViewKPI },
  { path: '/kpi/view-detail', component: KPIdetail },
  { path: '/profile', component: Profile },
  { path: '/setting', component: Setting },
  { path: '/profile/edit', component: Edit },
  { path: '/sign-in', component: SignIn, layout: null },
  { path: '/sign-up', component: SignUp, layout: null }
]

export { publicRoutes }
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
import Chart from "../pages/Chart"

import MobileHome from "../mobilePages/Home"
import MobileKpi from '../mobilePages/Kpi'
import KpiDetail from "../pages/KPIdetail"
import NoHeaderMobileLayout from "../components/MobileLayout/noHeaderMobileLayout"
import MobileCreateKpi from "../mobilePages/CreateKpi"
import MobileKpiDetail from "../mobilePages/KpiDetail"
import CreateTask from "../mobilePages/CreateTask"
import MobileTaskDetail from "../mobilePages/TaskDetail"
import User from "../mobilePages/User"
import NoPaddingMobileLayout from "../components/MobileLayout/NopaddingMobileLayout"
import UserLayout from "../components/MobileLayout/UserLayout"
import MobileSignUp from "../mobilePages/SignUp"
import MobileSignIn from "../mobilePages/SignIn"
import MobileSettings from "../mobilePages/Settings"
import MobileCalendar from "../mobilePages/Calendar"
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/calendar', component: Calendar },
  { path: '/kpi', component: ViewKPI },
  { path: '/kpi/view-detail', component: KPIdetail },
  { path: '/profile', component: Profile },
  { path: '/setting', component: Setting },
  { path: '/profile/edit', component: Edit },
  { path: '/chart', component: Chart },
  { path: '/sign-in', component: SignIn, layout: null },
  { path: '/sign-up', component: SignUp, layout: null },

  { path: '/mobile', component: MobileHome },
  { path: '/mobile/kpi', component: MobileKpi },
  { path: '/mobile/calendar', component: MobileCalendar},
  { path: '/mobile/kpi/create', component: MobileCreateKpi, layout: NoHeaderMobileLayout },
  { path: '/mobile/kpi/view-detail', component: MobileKpiDetail, layout: NoHeaderMobileLayout },
  { path: '/mobile/kpi/task/create', component: CreateTask, layout: NoHeaderMobileLayout },
  { path: '/mobile/kpi/task/detail', component: MobileTaskDetail, layout: NoHeaderMobileLayout },
  { path: '/mobile/user', component: User, layout: UserLayout },
  { path: '/mobile/sign-up', component: MobileSignUp, layout: null },
  { path: '/mobile/sign-in', component: MobileSignIn, layout: null },
  { path: '/mobile/settings', component: MobileSettings, layout: NoHeaderMobileLayout },
]

export { publicRoutes }
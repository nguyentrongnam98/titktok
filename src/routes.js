import Following from './page/Flowing/Flowing';
import Home from './page/Home/Home';
import Upload from './page/Upload/Upload';
import HeaderOnly from './components/Layout/HeaderOnly';
const publicRoutes = [
  {
      path:'/',
      component:Home
  },
  {
    path:'/following',
    component:Following
  },
  {
    path:'/upload',
    component:Upload,
    layout:HeaderOnly
  }
]

const privateRoutes = []

export {
    publicRoutes,
    privateRoutes
}
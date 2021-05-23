import {lazy} from 'react'

const routes = [
  { path: "/", exact: true, component: lazy(() => import('views/customer/home/index')) },
  { path: "/search", exact: false, component: lazy(() => import('views/customer/search/search')) },
  { path: "/category", exact: false, component: lazy(() => import('views/customer/search/category')) },
  { path: "/package/:vendorId/:packageId", exact: false, component: lazy(() => import('views/customer/package/detail')) },
  { path: "/profile", exact: false, component: lazy(() => import('views/customer/profile/index')) },
  { path: "/favorite", exact: false, component: lazy(() => import('views/customer/favorite/index')) },
  { path: "/chat", exact: false, component: lazy(() => import('views/customer/chat/index')) },
  { path: "/settings", exact: false, component: lazy(() => import('views/customer/settings/index')) },
  { path: "/cart", exact: false, component: lazy(() => import('views/customer/cart/index')) },
  { path: "/invite", exact: false, component: lazy(() => import('views/customer/profile/invite')) },
  { path: "/account", exact: true, component: lazy(() => import('_pages/account')) },
  { path: "/setting", exact: true, component: lazy(() => import('_pages/setting/index')) },
  { path: "/:username", exact: false, component: lazy(() => import('views/customer/vendor/profile')) },
  // 404
  { path: "*", exact: true, component: lazy(() => import('layouts/pageNotFound')) },
];

export default routes

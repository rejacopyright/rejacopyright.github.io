import {lazy} from 'react'

const routes = [
  { path: "/vendor", exact: true, component: lazy(() => import('_pages/dashboard/index')) },
  { path: "/vendor/dashboard", exact: true, component: lazy(() => import('_pages/dashboard/index')) },
  { path: "/vendor/product", exact: true, component: lazy(() => import('views/vendor/product/index')) },
  { path: "/vendor/product/add", exact: true, component: lazy(() => import('views/vendor/product/add')) },
  { path: "/vendor/profile", exact: false, component: lazy(() => import('views/vendor/profile/index')) },

  // PAGES
  { path: "/vendor/pages/blank", exact: false, component: lazy(() => import('_pages/_blank')) },
  { path: "/vendor/pages/data", exact: false, component: lazy(() => import('_pages/data/index')) },
  { path: "/vendor/pages/email", exact: false, component: lazy(() => import('_pages/email/index')) },
  { path: "/vendor/pages/profile", exact: false, component: lazy(() => import('_pages/profile/index')) },
  // CODING
  { path: "/vendor/coding", exact: true, component: lazy(() => import('_components/coding')) },
  // FORMS
  { path: "/vendor/form/basic", exact: true, component: lazy(() => import('_form/basic')) },
  { path: "/vendor/form/decimal", exact: true, component: lazy(() => import('_form/decimal')) },
  { path: "/vendor/form/editor", exact: true, component: lazy(() => import('_form/editor')) },
  { path: "/vendor/form/search", exact: true, component: lazy(() => import('_form/search')) },
  { path: "/vendor/form/select", exact: true, component: lazy(() => import('_form/select')) },
  // ICONS
  { path: "/vendor/icons/feather", exact: true, component: lazy(() => import('_icons/feather')) },
  { path: "/vendor/icons/unicons", exact: true, component: lazy(() => import('_icons/unicons')) },
  // PLUGINS
  { path: "/vendor/plugins/calendar", exact: true, component: lazy(() => import('_plugins/calendar')) },
  { path: "/vendor/plugins/chart", exact: true, component: lazy(() => import('_plugins/chart')) },
  { path: "/vendor/plugins/image", exact: true, component: lazy(() => import('_plugins/image')) },
  { path: "/vendor/plugins/images", exact: true, component: lazy(() => import('_plugins/images')) },
  { path: "/vendor/plugins/scroll", exact: true, component: lazy(() => import('_plugins/scroll')) },
  { path: "/vendor/plugins/slider", exact: true, component: lazy(() => import('_plugins/slider')) },
  { path: "/vendor/plugins/sortable", exact: true, component: lazy(() => import('_plugins/sortable')) },
  // UI
  { path: "/vendor/ui/accordion", exact: true, component: lazy(() => import('_ui/accordion')) },
  { path: "/vendor/ui/alert", exact: true, component: lazy(() => import('_ui/alert')) },
  { path: "/vendor/ui/align", exact: true, component: lazy(() => import('_ui/align')) },
  { path: "/vendor/ui/badge", exact: true, component: lazy(() => import('_ui/badge')) },
  { path: "/vendor/ui/button", exact: true, component: lazy(() => import('_ui/button')) },
  { path: "/vendor/ui/card", exact: true, component: lazy(() => import('_ui/card')) },
  { path: "/vendor/ui/chat", exact: true, component: lazy(() => import('_ui/chat')) },
  { path: "/vendor/ui/dropdown", exact: true, component: lazy(() => import('_ui/dropdown')) },
  { path: "/vendor/ui/image", exact: true, component: lazy(() => import('_ui/image')) },
  { path: "/vendor/ui/list", exact: true, component: lazy(() => import('_ui/list')) },
  { path: "/vendor/ui/load", exact: true, component: lazy(() => import('_ui/load')) },
  { path: "/vendor/ui/loading", exact: true, component: lazy(() => import('_ui/loading')) },
  { path: "/vendor/ui/modal", exact: true, component: lazy(() => import('_ui/modal')) },
  { path: "/vendor/ui/progress", exact: true, component: lazy(() => import('_ui/progress')) },
  { path: "/vendor/ui/tab", exact: true, component: lazy(() => import('_ui/tab')) },
  { path: "/vendor/ui/table", exact: true, component: lazy(() => import('_ui/table')) },
  { path: "/vendor/ui/title", exact: true, component: lazy(() => import('_ui/title')) },

  // 404
  { path: "*", exact: true, component: lazy(() => import('layouts/pageNotFound')) },
];

export default routes

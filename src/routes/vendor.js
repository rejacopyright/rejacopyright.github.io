import {lazy} from 'react'

const routes = [
  // Dashboard
  { path: "/vendor", exact: true, component: lazy(() => import(`_templates/pages/dashboard/index`)) },
  { path: "/vendor/dashboard", exact: true, component: lazy(() => import(`_templates/pages/dashboard/index`)) },
  // Product
  { path: "/vendor/product", exact: true, component: lazy(() => import(`views/vendor/product/index`)) },
  { path: "/vendor/product/add", exact: true, component: lazy(() => import(`views/vendor/product/add`)) },
  { path: "/vendor/product/edit/:product_id", exact: true, component: lazy(() => import(`views/vendor/product/add`)) },
  // Gallery
  { path: "/vendor/gallery", exact: true, component: lazy(() => import(`views/vendor/gallery/index`)) },
  { path: "/vendor/gallery/add", exact: true, component: lazy(() => import(`views/vendor/gallery/add`)) },
  { path: "/vendor/gallery/edit/:gallery_id", exact: true, component: lazy(() => import(`views/vendor/gallery/add`)) },
  // Gallery
  { path: "/vendor/package", exact: true, component: lazy(() => import(`views/vendor/package/index`)) },
  { path: "/vendor/package/add", exact: true, component: lazy(() => import(`views/vendor/package/add`)) },
  { path: "/vendor/package/detail/:package_id", exact: true, component: lazy(() => import(`views/vendor/package/detail`)) },
  { path: "/vendor/package/edit/:package_id", exact: true, component: lazy(() => import(`views/vendor/package/add`)) },
  // Profile
  { path: "/vendor/profile", exact: false, component: lazy(() => import(`views/vendor/profile/index`)) },

  // PAGES
  { path: "/vendor/pages/blank", exact: false, component: lazy(() => import(`_templates/pages/_blank`)) },
  { path: "/vendor/pages/data", exact: false, component: lazy(() => import(`_templates/pages/data/index`)) },
  { path: "/vendor/pages/email", exact: false, component: lazy(() => import(`_templates/pages/email/index`)) },
  { path: "/vendor/pages/profile", exact: false, component: lazy(() => import(`_templates/pages/profile/index`)) },
  { path: "/vendor/pages/timeline", exact: false, component: lazy(() => import(`_templates/pages/timeline/index`)) },
  // CODING
  { path: "/vendor/coding", exact: true, component: lazy(() => import(`_components/coding`)) },
  // FORMS
  { path: "/vendor/form/advanced", exact: true, component: lazy(() => import(`_templates/form/advanced`)) },
  { path: "/vendor/form/basic", exact: true, component: lazy(() => import(`_templates/form/basic`)) },
  { path: "/vendor/form/decimal", exact: true, component: lazy(() => import(`_templates/form/decimal`)) },
  { path: "/vendor/form/editor", exact: true, component: lazy(() => import(`_templates/form/editor`)) },
  { path: "/vendor/form/select", exact: true, component: lazy(() => import(`_templates/form/select`)) },
  // ICONS
  { path: "/vendor/icons/feather", exact: true, component: lazy(() => import(`_templates/icons/feather`)) },
  { path: "/vendor/icons/unicons", exact: true, component: lazy(() => import(`_templates/icons/unicons`)) },
  // PLUGINS
  { path: "/vendor/plugins/calendar", exact: true, component: lazy(() => import(`_templates/plugins/calendar`)) },
  { path: "/vendor/plugins/chart", exact: true, component: lazy(() => import(`_templates/plugins/chart`)) },
  { path: "/vendor/plugins/image", exact: true, component: lazy(() => import(`_templates/plugins/image`)) },
  { path: "/vendor/plugins/images", exact: true, component: lazy(() => import(`_templates/plugins/images`)) },
  { path: "/vendor/plugins/scroll", exact: true, component: lazy(() => import(`_templates/plugins/scroll`)) },
  { path: "/vendor/plugins/slider", exact: true, component: lazy(() => import(`_templates/plugins/slider`)) },
  { path: "/vendor/plugins/sortable", exact: true, component: lazy(() => import(`_templates/plugins/sortable`)) },
  // UI
  { path: "/vendor/ui/accordion", exact: true, component: lazy(() => import(`_templates/ui/accordion`)) },
  { path: "/vendor/ui/alert", exact: true, component: lazy(() => import(`_templates/ui/alert`)) },
  { path: "/vendor/ui/align", exact: true, component: lazy(() => import(`_templates/ui/align`)) },
  { path: "/vendor/ui/badge", exact: true, component: lazy(() => import(`_templates/ui/badge`)) },
  { path: "/vendor/ui/button", exact: true, component: lazy(() => import(`_templates/ui/button`)) },
  { path: "/vendor/ui/card", exact: true, component: lazy(() => import(`_templates/ui/card`)) },
  { path: "/vendor/ui/chat", exact: true, component: lazy(() => import(`_templates/ui/chat`)) },
  { path: "/vendor/ui/dropdown", exact: true, component: lazy(() => import(`_templates/ui/dropdown`)) },
  { path: "/vendor/ui/image", exact: true, component: lazy(() => import(`_templates/ui/image`)) },
  { path: "/vendor/ui/list", exact: true, component: lazy(() => import(`_templates/ui/list`)) },
  { path: "/vendor/ui/load", exact: true, component: lazy(() => import(`_templates/ui/load`)) },
  { path: "/vendor/ui/loading", exact: true, component: lazy(() => import(`_templates/ui/loading`)) },
  { path: "/vendor/ui/modal", exact: true, component: lazy(() => import(`_templates/ui/modal`)) },
  { path: "/vendor/ui/progress", exact: true, component: lazy(() => import(`_templates/ui/progress`)) },
  { path: "/vendor/ui/tab", exact: true, component: lazy(() => import(`_templates/ui/tab`)) },
  { path: "/vendor/ui/table", exact: true, component: lazy(() => import(`_templates/ui/table`)) },
  { path: "/vendor/ui/title", exact: true, component: lazy(() => import(`_templates/ui/title`)) },

  // User
  { path: "/:username", exact: true, component: lazy(() => import('views/customer/vendor/profile')) },
  // 404
  { path: "*", exact: true, component: lazy(() => import(`views/_layouts/pageNotFound`)) },
];

export default routes

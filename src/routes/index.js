import { routerFactory } from "lemejs"

import { appNotFound } from "../components/appNotFound"
import { appHomePage } from "../components/appHomePage"
import { appPageSearchResult } from "../components/appPageSearchResult"

const router = routerFactory()

router.add({
  hash: '/',
  validator: /^#\/$/,
  component: appHomePage,
  isInitial: true
})

router.add({
  hash: '/search-result',
  validator: /^#\/search-result$/,
  component: appPageSearchResult,
  isInitial: true
})


router.add({
  hash: 'not-found',
  validator: /^#\/not-found$/,
  component: appNotFound,
  isDefault: true
})

export { router }
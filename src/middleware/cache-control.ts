import { ServerResponse } from "http"
import { CacheHeaders, PageWithCacheHeaders } from "../types"

const cacheControl = (values: CacheHeaders) => (req: Request, res: ServerResponse, next: any) => {
  const cacheControlValue = Object.entries(values)
    .map(([key, value]) => `${key}=${value}`)
    .join(',')

  res.setHeader('Cache-Control', cacheControlValue)

  next()
}

export const createCacheControlMiddleware = (pageWithCacheHeaders: PageWithCacheHeaders) => {
  const pagePath = pageWithCacheHeaders[0];
  const cacheHeaders = pageWithCacheHeaders[1];

  return {
    path: pagePath,
    handler: cacheControl(cacheHeaders)
  }
}

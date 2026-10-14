export function withBasePath(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

export function getRouteFromPathname(pathname: string): string {
  const base = import.meta.env.BASE_URL
  const route = pathname.startsWith(base) ? `/${pathname.slice(base.length)}` : pathname
  return route.replace(/\/+$/, '') || '/'
}

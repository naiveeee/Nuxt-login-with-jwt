export const getTokenFromCookie = req => {
  if (!req.headers.cookie) return null
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('token='))
  if (!jwtCookie) return
  return jwtCookie.split('=')[1]
}

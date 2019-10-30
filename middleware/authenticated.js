export default function({ store, route, redirect }) {
  const user = store.state.users.user
  const blockedRoute = /\/login\/*/g
  const qrRoute = /^\/qr\/*/g

  if (!(user || route.path.match(blockedRoute) || route.path.match(qrRoute))) {
    redirect('/login')
  }
}

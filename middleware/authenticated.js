export default function({ store, route, redirect}) {
    const user = store.state.users.user;
    //const blockedRoute = /\/routename\/*/g; blocks users form accessing any of the other pages 
    //if (!user && route.path.match(blockedRoute))
    if (!user){
        redirect('/login');
    }
}
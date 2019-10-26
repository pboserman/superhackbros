import JWTDecode from 'jwt-decode';
import cookieparser from "cookieparser";
export const actions = {
    nuxtServerInit({commit}, {req}) {
        if(process.server && process.static) return;
        if(!req.headers.cookie) return;
        const parsed = cookieparser.parse(req.headers.cookie);
        const accessTokenCookie = parsed.access_token;

        if(!accessTokenCookie) return;
        const decode = JWTDecode(accessTokenCookie);

        if(decode) {
            commit('users/SET_USER', {
                uid: decode.user_id,
                email: decode.email
            });
        }
    }
};
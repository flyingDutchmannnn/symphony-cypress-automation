import LoginRoute from "./routes/login/loginRoute.core.api";
import PostsRoute from "./routes/posts/postsRoute.core.api";
import SignupRoute from "./routes/signup/singupRoute.core.api";

export default class SymphonyApi {
    
    static signupRoute = SignupRoute;
    static loginRoute = LoginRoute;
    static postsRoute = PostsRoute;
}
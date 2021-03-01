
import HomePage from '../Pages/HomePage';
import PostPage from '../Pages/PostPage';
//import Login from '../Pages/HomePage';
//import LoginAdmin from '../Pages/admin-login';


const appRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/post/:id',
        component: PostPage,
    },


];

export default appRoutes;
import Index from './components/Index';
import UserAdd from './components/user/Add';
import Edit from './components/user/Edit';
export const routes = [{
        path: '/',
        component: Index,
        name: 'Home'
    },
    {
        path: '/user/add',
        component: UserAdd,
        name: 'AddUser'
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: Edit
    },
    { path: "*", redirect: "/" }

];
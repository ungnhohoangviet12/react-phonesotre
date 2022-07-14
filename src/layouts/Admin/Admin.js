import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from '../../components/admin/PostList';
import PostCreate from '../../components/admin/PostCreate';
import PostEdit from '../../components/admin/PostEdit';
import UserList from '../../components/admin/UserList';
import UserCreate from '../../components/admin/UserCreate';
import UserEdit from '../../components/admin/UserEdit';


function AppAdmin() {
    return (
        <div className="App">
            <Admin dataProvider={restProvider('http://localhost:3000/')}>
                <Resource name='products' list={PostList} create={PostCreate} edit={PostEdit} />
                <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} />
            </Admin>
        </div>
    );
}

export default AppAdmin;

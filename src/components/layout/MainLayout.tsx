import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logOut } from '../../redux/features/auth/authSlice';

const { Header, Content } = Layout;

//* items
// const items: MenuProps['items'] = [
//   {
//     key: 'Deshbord',
//     label: <NavLink to="/admin/deshbord">Deshbord</NavLink>,
//   },
//   {
//     key: 'User Management',
//     label: 'User Management',
//     children: [
//       {
//         key: 'Create Admin',
//         label: <NavLink to="/admin/create-admin"> Create Admin</NavLink>,
//       },
//       {
//         key: 'Create Faculty',
//         label: <NavLink to="/admin/create-faculty"> Create Faculty</NavLink>,
//       },
//       {
//         key: 'Create Student',
//         label: <NavLink to="/admin/create-student"> Create Student</NavLink>,
//       },
//     ],
//   },
// ];

const MainLayout = () => {

  const dispatch = useAppDispatch()
  const handleLogOut = () => {
    dispatch(logOut())
  };

  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header style={{ padding: 0 }}>
            {' '}
            <Button onClick={handleLogOut}>Logout</Button>{' '}
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;

import { Layout, Menu } from 'antd';
import { sideberItemsGenerator } from '../../utils/sideberItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import { useAppSelector } from '../../redux/hooks';
import { currentUser } from '../../redux/features/auth/authSlice';

const { Sider } = Layout;

const userRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student',
};

const Sidebar = () => {
  const user = useAppSelector(currentUser);
  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sideberItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sideberItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      sidebarItems = sideberItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: 'white',
            height: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {' '}
          PH- Univercity
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={sidebarItems}
        />
      </Sider>
    </>
  );
};

export default Sidebar;

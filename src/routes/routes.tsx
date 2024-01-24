import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Register from '../pages/Register';
import { adminPaths } from './admin.routes';
import { routeGenerator } from '../utils/routesGenerators';
import { facultyPaths } from './faculty.routes';
import { studentPaths } from './student.routes';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <App />,
    //** Make Sure When Using Children do not use '/' Use Case Only(about) */
    //*Relative Path
    children: routeGenerator(adminPaths),
  },
  {
    path: '/faculty',
    element: <App />,
    children: routeGenerator(facultyPaths),
  },
  {
    path: '/student',
    element: <App />,
    children: routeGenerator(studentPaths),
  },
  //*Absolute Path
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;

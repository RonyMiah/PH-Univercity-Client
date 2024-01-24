import FacultyDashbord from '../pages/faculty/FacultyDashbord';
import OfferedCourse from '../pages/faculty/OfferedCourse';

export const facultyPaths = [
  {
    name: 'Deshbord',
    path: 'deshbord',
    element: <FacultyDashbord />,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <OfferedCourse />,
  },
];

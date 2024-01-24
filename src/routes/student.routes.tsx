import StudentDeshbord from '../pages/student/StudentDeshbord';
import StudentOfferCourse from '../pages/student/StudentOfferCourse';

export const studentPaths = [
  {
    name: 'Deshbord',
    path: 'deshbord',
    element: <StudentDeshbord />,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <StudentOfferCourse />,
  },
];

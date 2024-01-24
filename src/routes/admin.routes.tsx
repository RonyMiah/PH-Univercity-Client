import AdminDeshbord from '../pages/admin/AdminDeshbord';
import CreateStudent from '../pages/admin/CreateStudent';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import AcademicSemester from '../pages/admin/academicManagement/AcademicSemester';

export const adminPaths = [
  {
    name: 'Deshbord',
    path: 'deshbord',
    element: <AdminDeshbord />,
  },
  {
    name: 'Academic Management',
    children: [
      {
        name: 'Academic Semester',
        path: 'academic-semester',
        element: <AcademicSemester />,
      },
    ],
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent />,
      },
      {
        name: 'Create Member',
        path: 'create-member',
        element: <CreateStudent />,
      },
    ],
  },
];

//////////////////////////////******* */

//!Hard Coded Way And Programitical way
// export const adminPaths = [
//   {
//     //* index : true ->> eita kore dile /admin path aa ei show korbe AdminDeshbord
//     //* index: true,
//     path: 'deshbord',
//     element: <AdminDeshbord />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
// ];

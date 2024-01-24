// const array = [1, 2, 3, 4, 5];

// const result = array.reduce((acumulator, item) => {
//   //   console.log(acumulator);
//   //   console.log('ITEMS ,,', item);

//   acumulator.push(acumulator + item);
//   return acumulator;
// }, []); // []/ 0 is initial state ..

// console.log('Final result', result);
export const adminPaths2 = [
  {
    name: 'Deshbord',
    path: 'deshbord',
    element: 'AdminDeshbord ',
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: 'CreateAdmin ',
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: 'CreateFaculty ',
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: 'CreateStudent ',
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: 'NAVLINK',
    });
  }

  //* ForEach and Map Defarence ==> foreach kisoi return kore na but Map Array Return kore

  //* Map return er pore jodi amra return korte chai tahole { return ...} and jodi amra return korte na chai tahole ({......}) ei structure aa code korte pari
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,

      children: item.children.map((child) => ({
        key: child.name,
        label: 'Navlink ',
      })),
    });
  }

  return acc;
}, []);



//  const newArray1 = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

console.log(newArray);

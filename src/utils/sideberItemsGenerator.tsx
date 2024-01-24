import { NavLink } from 'react-router-dom';
import { TSideberItem, TUserPath } from '../types';

export const sideberItemsGenerator = (items: TUserPath[], role) => {
  //* For Sideber Daynamic
  const sidebarItems = items.reduce((acc: TSideberItem[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name} </NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name} </NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};

import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import AddDept from '../pages/dept/AddDept';
import DeptList from '../pages/dept/DeptList';
import AddEmp from '../pages/emp/AddEmp';
import EmpList from '../pages/emp/EmpList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'dept', element: <DeptList /> },
      { path: 'add-dept', element: <AddDept /> },
      { path: 'emp', element: <EmpList /> },
      { path: 'add-emp', element: <AddEmp /> },
    ],
  },
]);

export default router;
 
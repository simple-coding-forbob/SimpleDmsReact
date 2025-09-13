import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AddDept from "../pages/dept/AddDept";
import DeptDetail from "../pages/dept/DeptDetail";
import DeptList from "../pages/dept/DeptList";
import AddEmp from "../pages/emp/AddEmp";
import EmpDetail from "../pages/emp/EmpDetail";
import EmpList from "../pages/emp/EmpList";
import AddFileDb from "../pages/filedb/AddFileDb";
import FiledbList from "../pages/filedb/FiledbList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "dept", element: <DeptList /> },
      { path: "add-dept", element: <AddDept /> },
      { path: "dept-detail/:dno", element: <DeptDetail /> },
      { path: "emp", element: <EmpList /> },
      { path: "add-emp", element: <AddEmp /> },
      { path: "emp-detail/:eno", element: <EmpDetail /> },
      { path: "fileDb", element: <FiledbList /> },
      { path: "add-fileDb", element: <AddFileDb /> },
    ],
  },
]);

export default router;

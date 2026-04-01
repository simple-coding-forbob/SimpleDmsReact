import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";

// 인터넷주소와 화면을 연결하는 곳: 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // { index: true, path: "/", element: <Home /> },
      // 위와 같이 코딩하면 인터넷주소와 화면이 연결됩니다. 예) /(http://localhost:5173/) 주소는 Home 화면이 뜹니다.
    ],
  },
]);

export default router;


import { Link } from "react-router-dom";
import { Meta } from "react-head";

const EmpList = () => {


  return (
    <>
      <Meta name="description" content="사원 조회 페이지입니다." />
      <h1 className="text-2xl font-bold mb-6">사원 조회</h1>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="w-[100%] border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
          placeholder="사원명 검색"
        />
        <button
          className="bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-r min-w-[5rem]"
        >
          검색
        </button>
      </div>

      <div>
        <table className="w-[100%] border border-gray-200">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="px-4 py-2 border-b">eno</th>
              <th className="px-4 py-2 border-b">ename</th>
              <th className="px-4 py-2 border-b">job</th>
              <th className="px-4 py-2 border-b">manager</th>
              <th className="px-4 py-2 border-b">hiredate</th>
              <th className="px-4 py-2 border-b">salary</th>
              <th className="px-4 py-2 border-b">commission</th>
              <th className="px-4 py-2 border-b">dno</th>
            </tr>
          </thead>
          <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <Link to="#">1</Link>
                </td>
                <td className="px-4 py-2 border-b">2</td>
                <td className="px-4 py-2 border-b">3</td>
                <td className="px-4 py-2 border-b">4</td>
                <td className="px-4 py-2 border-b">5</td>
                <td className="px-4 py-2 border-b">6</td>
                <td className="px-4 py-2 border-b">7</td>
                <td className="px-4 py-2 border-b">8</td>
              </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        {/* 페이징 플로그인 부분 */}
      </div>
    </>
  );
};

export default EmpList;

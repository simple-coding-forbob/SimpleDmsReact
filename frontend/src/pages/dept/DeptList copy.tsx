import { Link } from "react-router-dom";
import { Meta } from "react-head";

const DeptList = () => {


  return (
    <>
      <Meta name="description" content="부서 조회 페이지입니다." />
      <h1 className="text-2xl font-bold mb-6">부서 조회</h1>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-l p-2 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="부서명 검색"
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
              <th className="px-4 py-2 border-b">dname</th>
              <th className="px-4 py-2 border-b">loc</th>
            </tr>
          </thead>
          <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <Link to="#">1</Link>
                </td>
                <td className="px-4 py-2 border-b">2</td>
              </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        {/* 페이징 플로그인 */}
      </div>
    </>
  );
};

export default DeptList;

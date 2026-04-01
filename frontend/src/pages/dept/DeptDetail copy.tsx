
import { Meta } from "react-head";

function DeptDetail() {

  return (
    <>
      <Meta name="description" content="부서 상세조회 페이지입니다." />
      <h1 className="text-2xl font-bold mb-6">부서 상세조회</h1>

      <form>
        <div className="mb-4">
          <label htmlFor="dname" className="block mb-1">
            dname
          </label>
          <input
            type="text"
            id="dname"
            name="dname"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="loc" className="block mb-1">
            loc
          </label>
          <input
            type="text"
            id="loc"
            name="loc"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-green-700 text-white p-2 rounded hover:bg-green-800"
          >
            수정
          </button>
          <button
            type="button"
            className="flex-1 bg-red-600 text-white p-2 rounded hover:bg-red-700"
          >
            삭제
          </button>
        </div>
      </form>
    </>
  );
}

export default DeptDetail;


import { Meta } from "react-head";

function EmpDetail() {

  return (
    <>
      <Meta name="description" content="사원 상세조회 페이지입니다." />
      <h1 className="text-2xl font-bold mb-6">사원 상세조회</h1>

      <form>
        {/* ename */}
        <div className="mb-4">
          <label htmlFor="ename" className="block mb-1">
            ename
          </label>
          <input
            type="text"
            id="ename"
            name="ename"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* job */}
        <div className="mb-4">
          <label htmlFor="job" className="block mb-1">
            job
          </label>
          <input
            type="text"
            id="job"
            name="job"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* manager */}
        <div className="mb-4">
          <label htmlFor="manager" className="block mb-1">
            manager
          </label>
          <input
            type="number"
            id="manager"
            name="manager"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* hiredate */}
        <div className="mb-4">
          <label htmlFor="hiredate" className="block mb-1">
            hiredate
          </label>
          <input
            type="date"
            id="hiredate"
            name="hiredate"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* salary */}
        <div className="mb-4">
          <label htmlFor="salary" className="block mb-1">
            salary
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* commission */}
        <div className="mb-4">
          <label htmlFor="commission" className="block mb-1">
            commission
          </label>
          <input
            type="number"
            id="commission"
            name="commission"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* dno */}
        <div className="mb-4">
          <label htmlFor="dno" className="block mb-1">
            dno
          </label>
          <input
            type="number"
            id="dno"
            name="dno"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* 버튼 */}
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

export default EmpDetail;

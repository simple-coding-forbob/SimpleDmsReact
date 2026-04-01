
import { Meta } from "react-head";

function AddDept() {

  return (
    <>
      <Meta name="description" content="부서 추가 페이지입니다." />
      <h1 className="text-2xl font-bold mb-6">부서 추가</h1>

      <form>
        {/* dname 입력 */}
        <div className="mb-4">
          <label htmlFor="dname" className="block mb-1">
            dname
          </label>
          <input
            type="text"
            id="dname"
            name="dname"
            placeholder="부서"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* loc 입력 */}
        <div className="mb-4">
          <label htmlFor="loc" className="block mb-1">
            loc
          </label>
          <input
            type="text"
            id="loc"
            name="loc"
            placeholder="loc"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* 버튼 */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
        >
          저장
        </button>
      </form>
    </>
  );
}

export default AddDept;

// FiledbList.tsx
import { Meta } from "react-head";

const GalleryList = () => {


  return (
    <div className="container mx-auto p-4">
      <Meta name="description" content="Gallery 조회 페이지입니다." />
      <h1 className="text-2xl font-bold mb-4">Gallery 조회</h1>

      {/* 검색 */}
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Search by title"
        />
        <button
          className="bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-r min-w-[5rem]"
        >
          검색
        </button>
      </div>

      {/* 카드 리스트 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            className="border rounded shadow hover:shadow-md overflow-hidden"
          >
            <img
              src="#"
              loading="lazy"
              alt="1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="font-bold text-lg">2</h5>
              <div className="mt-2 flex space-x-2">
                <button
                  className="px-2 py-1 bg-red-500 rounded text-white"
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center mt-6">
      </div>
    </div>
  );
};

export default GalleryList;

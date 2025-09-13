// FiledbService.ts
import type ApiResponse from "../types/ApiResponse";
import type IFileDb from "../types/IFileDb";
import common from "./CommonService";

// 전체 조회 (like 검색 + 페이징)
const getAll = (searchKeyword: string, page: number, size: number) => {
  return common.get<ApiResponse<IFileDb[]>>(
    `/fileDb?searchKeyword=${searchKeyword}&page=${page}&size=${size}`
  );
};

// 삭제
const remove = (fid: number) => {
  return common.delete(`/fileDb/${fid}`);
};

// 업로드
const insert = (uploadFiledb: IFileDb, fileData: File) => {
  const formData = new FormData();
  formData.append("fileTitle", uploadFiledb.fileTitle);
  formData.append("fileContent", uploadFiledb.fileContent);
  formData.append("fileData", fileData);

  return common.post("/fileDb", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const FiledbService = {
  getAll,
  remove,
  insert,
};

export default FiledbService;

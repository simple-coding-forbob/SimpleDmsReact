// axios 공통함수 : 벡엔드 연동
import type IDept from "../types/dept/IDept";
import type IDeptList from "../types/dept/IDeptList";
import common from "./CommonService";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (searchKeyword:string, page:number, size:number) => {
  return common.get<IDeptList>(`/api/dept?searchKeyword=${searchKeyword}&page=${page}&size=${size}`);
};

// 상세 조회
const get = (dno:number | null) => {
  return common.get<IDept>(`/api/dept/${dno}`);
};

// 저장함수
const create = (data:IDept) => {
  return common.post<IDept>("/api/dept", data);
};

// 수정함수
const update = (dno:number | null, data:IDept) => {
  return common.put<number | null>(`/api/dept/${dno}`, data);
};

// 삭제함수
const remove = (dno:number | null) => {
  return common.delete<number | null>(`/api/dept/${dno}`);
};

const DeptService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default DeptService;

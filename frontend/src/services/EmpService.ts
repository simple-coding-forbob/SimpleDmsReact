// axios 공통함수 : 벡엔드 연동
import type IEmp from "../types/dept/IEmp";
import type IEmpList from "../types/dept/IEmpList";
import common from "./CommonService";

const getAll = (searchKeyword:string, page:number, size:number) => {
  return common.get<IEmpList>(`/emp?searchKeyword=${searchKeyword}&page=${page}&size=${size}`);
};

const get = (eno:number | null) => {
  return common.get<IEmp>(`/emp/${eno}`);
};

const create = (data:IEmp) => {
  return common.post<IEmp>("/emp", data);
};

const update = (eno:number | null, data:IEmp) => {
  return common.put<number | null>(`/emp/${eno}`, data);
};

const remove = (eno:number | null) => {
  return common.delete<number | null>(`/emp/${eno}`);
};

const EmpService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default EmpService;

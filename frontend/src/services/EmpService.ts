// axios 공통함수 : 벡엔드 연동
import type IEmp from "../types/dept/IEmp";
import common from "./CommonService";

const getAll = (ename:string, page:number, size:number) => {
  return common.get<Array<IEmp>>(`/basic/emp?ename=${ename}&page=${page}&size=${size}`);
};

const get = (eno:number | null) => {
  return common.get<IEmp>(`/basic/emp/${eno}`);
};

const create = (data:IEmp) => {
  return common.post<IEmp>("/basic/emp", data);
};

const update = (eno:number | null, data:IEmp) => {
  return common.put<number | null>(`/basic/emp/${eno}`, data);
};

const remove = (eno:number | null) => {
  return common.delete<number | null>(`/basic/emp/deletion/${eno}`);
};

const EmpService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default EmpService;

export default interface IEmp {
    eno?: number | null ,
    ename: string,
    job: string,
    manager?: string | number,
    hiredate: string,
    salary?: string | number,
    commission?: string | number | null,
    dno?: string | number
}
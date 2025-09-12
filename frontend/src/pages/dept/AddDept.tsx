import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import DeptService from "../../services/DeptService";
import deptValidation from "../../utils/deptValidation";
import type IDept from "../../types/dept/IDept";

function AddDept() {
  const navigate = useNavigate();

  const save = async (data: IDept) => {
    try {
      const response = await DeptService.create(data);
      console.log(response.data);
      alert("부서가 성공적으로 저장되었습니다!");
      navigate("/dept");
    } catch (e) {
      console.error(e);
      alert("저장 중 오류가 발생했습니다.");
    }
  };

  const formik = useFormik({
    initialValues: {
      dname: "",
      loc: "",
    },
    validationSchema: deptValidation,
    onSubmit: (data: IDept) => {
      save(data);
    },
  });

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">부서 추가</h1>

      <form onSubmit={formik.handleSubmit}>
        {/* dname 입력 */}
        <div className="mb-4">
          <label htmlFor="dname" className="mb-1">
            dname
          </label>
          <input
            type="text"
            id="dname"
            name="dname"
            placeholder="부서"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500"
            value={formik.values.dname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.dname && formik.errors.dname && (
            <div className="text-red-500">{formik.errors.dname}</div>
          )}
        </div>

        {/* loc 입력 */}
        <div className="mb-4">
          <label htmlFor="loc" className="block font-medium mb-1">
            loc
          </label>
          <input
            type="text"
            id="loc"
            name="loc"
            placeholder="loc"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500"
            value={formik.values.loc}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.loc && formik.errors.loc && (
            <div className="text-red-500">{formik.errors.loc}</div>
          )}
        </div>

        {/* 버튼 */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddDept;

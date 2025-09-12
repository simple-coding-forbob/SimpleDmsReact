type isMobileProps = {
  isMobile: boolean;
};

const LeftMenu = ({ isMobile }:isMobileProps) => {
  return (
    <>
      {/* PC 메뉴 */}
      <li>
        <a href="#" className="hover:underline">
          홈
        </a>
      </li>
      <li className="relative group">
        <a href="#" className="hover:underline">
          부서
        </a>
        {/* group-hover:block : 부모에 hover 하면 보임, (기본:hidden) */}
        {/* w-[단위] */}
        <ul className={isMobile?"":"drop-down-item"}>
          <li className="m-2">
            <a href="/dept" className="hover:underline">
              부서조회
            </a>
          </li>
          <li className="m-2">
            <a href="/add-dept" className="hover:underline">
              부서추가
            </a>
          </li>
        </ul>
      </li>
      <li className="relative group">
        <a href="#" className="hover:underline">
          사원
        </a>
        <ul className={isMobile?"":"drop-down-item"}>
          <li className="m-2">
            <a href="/emp" className="hover:underline">
              사원조회
            </a>
          </li>
          <li className="m-2">
            <a href="/add-emp" className="hover:underline">
              사원추가
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default LeftMenu;

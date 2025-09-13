import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // TODO: md:xxx (768px 이상에서 적용), lg:xxx (1024px 이상에서 적용), 기본은 모바일 우선 디자인
    <nav className="bg-blue-600 text-white">
      <div className="flex justify-between items-center h-16 px-4">
        {/* Logo + 메뉴 */}
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold">simple-coding</div>
          <ul className="hidden md:flex gap-4">
            {/* PC 메뉴 */}
            <li>
              <a href="/" className="hover:underline">
                홈
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="hover:underline">
                부서
              </a>
              {/* group-hover:block : 부모에 hover 하면 보임, (기본:hidden) */}
              {/* w-[단위] */}
              <ul className="drop-down-item">
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
              <ul className="drop-down-item">
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
            <li className="relative group">
              <a href="#" className="hover:underline">
                FileDb
              </a>
              <ul className="drop-down-item">
                <li className="m-2">
                  <a href="/fileDb" className="hover:underline">
                    FileDb 조회
                  </a>
                </li>
                <li className="m-2">
                  <a href="/add-fileDb" className="hover:underline">
                    FileDb 추가
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* 햄버거 + 로그인 메뉴 */}
        <div className="flex items-center gap-4">
          {/* 로그인 메뉴 (PC) */}
          <ul className="hidden md:flex gap-4">
            <li>
              <a href="#" className="hover:underline">
                회원가입
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                로그인
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                마이페이지
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Logout
              </a>
            </li>
          </ul>
          {/* 햄버거 버튼 (모바일) */}
          <button
            className="md:hidden"
            aria-label="햄버거 메뉴 열기/닫기"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* 모바일 메뉴: md:hidden (758px 이상에서 숨김) */}
      {/* flex-col : 세로 바꾸기  */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2">
          <ul className="flex flex-col gap-2">
            {/* PC 메뉴 */}
            <li>
              <a href="/">홈</a>
            </li>
            <li className="relative group">
              <a href="#">부서</a>
              {/* w-[단위] */}
              <ul>
                <li className="m-2">
                  <a href="/dept">부서조회</a>
                </li>
                <li className="m-2">
                  <a href="/add-dept">부서추가</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#">사원</a>
              <ul>
                <li className="m-2">
                  <a href="/emp">사원조회</a>
                </li>
                <li className="m-2">
                  <a href="/add-emp">사원추가</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="hover:underline">
                FileDb
              </a>
              <ul className="drop-down-item">
                <li className="m-2">
                  <a href="/fileDb" className="hover:underline">
                    FileDb 조회
                  </a>
                </li>
                <li className="m-2">
                  <a href="/add-fileDb" className="hover:underline">
                    FileDb 추가
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              <a href="#">회원가입</a>
            </li>
            <li>
              <a href="#">로그인</a>
            </li>
            <li>
              <a href="#">마이페이지</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

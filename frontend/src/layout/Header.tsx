import { useState } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

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
            <LeftMenu isMobile={false} />
          </ul>
        </div>

        {/* 햄버거 + 로그인 메뉴 */}
        <div className="flex items-center gap-4">
          {/* 로그인 메뉴 (PC) */}
          <ul className="hidden md:flex gap-4">
            <RightMenu />
          </ul>
          {/* 햄버거 버튼 (모바일) */}
          <button className="md:hidden" 
                  aria-label="햄버거 메뉴 열기/닫기"
                  onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* 모바일 메뉴: md:hidden (758px 이상에서 숨김) */}
      {/* flex-col : 세로 바꾸기  */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2">
          <ul className="flex flex-col gap-2">
            <LeftMenu isMobile={true} />
          </ul>
          <ul className="flex flex-col gap-2 mt-2">
            <RightMenu />
          </ul>
        </div>
      )}
    </nav>
  );
}

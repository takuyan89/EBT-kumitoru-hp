import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";

export const Head = () => {
  return (
    <header className="h-[80px] px-[20px] flex justify-between fixed top-0 left-0 w-full items-center z-[6] bg-white md:bg-opacity-0 md:h-[120px] md:px-[40px] lg:bg-opacity-100">
      <div>
        <a>
          <img
            className="w-[120px] md:w-[160px]"
            src="https://storage.googleapis.com/studio-design-asset-files/projects/7kadMmzW3G/s-2400x579_v-frms_webp_a8d3e5b1-8df1-4d11-b494-e7259b9dffb6_small.webp"
            alt="Logo"
          />
        </a>
      </div>
      <div className="flex items-center">
        <a className="hidden lg:block font-medium text-sm mr-[28px]">特徴</a>
        <a className="hidden lg:block font-medium text-sm mr-[28px]">
          選ばれる理由
        </a>
        <a className="hidden lg:block font-medium text-sm mr-[28px]">
          制作の流れ
        </a>
        <a className="hidden lg:block font-medium text-sm mr-[28px]">
          料金プラン
        </a>
        <a className="hidden lg:block font-medium text-sm mr-[28px]">
          制作実績
        </a>
        <Link
          href="#name"
          className="bg-gradient-to-r from-[#249dc3] to-[#2769d3] border-0 rounded-xl  flex py-[8px] px-[12px] items-center md:py-[18px] md:px-[24px]"
        >
          <p className="mr-[10px] bg-white">
            <IoMailOutline />
          </p>
          <p className="text-xs text-[#FFF] h-[28px] font-black flex items-center">
            資料請求
          </p>
        </Link>
      </div>
    </header>
  );
};

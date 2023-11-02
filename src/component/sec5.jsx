import { IoMailOutline } from "react-icons/io5";

export const Sec5 = () => {
  return (
    <section className="py-[40px] px-[25px] relative bg-[#2769d3] flex flex-col items-center justify-center md:py-[80px] md:px-[60px]">
      <div className="opacity-40 w-full h-full absolute top-0 left-0 before:bg-[url(https://images.unsplash.com/photo-1532292060982-8bfb986808e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8MXx8Ymx1ZSUyMHdlYnxlbnwwfHx8fDE2NDI2NjI0NDQ&ixlib=rb-1.2.1&q=80&w=1080)] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-cover before:bg-center"></div>
      <p className="text-xl mb-[10px] text-[#FFF] font-black z-[2] md:text-3xl md:mb-[15px]">
        無料でご相談承っております。
      </p>
      <p className="mb-[20px] text-[#FFF] z-[2]  md:text-lg">
        何も決まっていない状況でも構いません。お気軽にお問い合わせ下さい。
      </p>
      <a className="border rounded-md bg-[#FFF] flex py-[12px] px-[24px] items-center z-[2]">
        <p className="mr-[10px] bg-[#2782d3]">
          <IoMailOutline />
        </p>
        <p className="text-[#2782d3] h-[28px] font-bold flex items-center">
          資料請求
        </p>
      </a>
    </section>
  );
};

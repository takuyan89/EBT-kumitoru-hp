export const Foot = () => {
  return (
    <section className="py-[25px] pr-[50px] pl-[40px] flex flex-col border-t-2 border-[#EEE] items-center md:justify-between md:flex-row">
      <div className="flex justify-center opacity-50">
        <a className="mr-[20px] mb-[10px] text-xs font-light md:mb-0">
          特定商取引法に基づく表記
        </a>
        <a className="mb-[10px] text-xs font-light md:mb-0">
          プライバシーポリシー
        </a>
      </div>
      <p className="mt-[5px] text-[#acacac] text-xs font-light opacity-40">
        ©︎ 2022 合同会社SasaTech
      </p>
    </section>
  );
};

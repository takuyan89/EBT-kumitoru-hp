export const Sec9 = () => {
  return (
    <section className="pt-[48px] pb-[60px] px-[40px] md:py-[60px] md:p-[80px]  lg:pl-[300px] lg:pr-[375px]">
      <a id="name"></a>
      <p className="flex justify-center text-2xl font-black mb-[10px] ">
        資料請求
      </p>
      <div className="border-2 border-[#000] rounded-sm w-[40px] m-auto mb-[30px]"></div>
      <div className="mb-[30px]">
        <div className="mb-[20px]">
          <div className="flex items-end mb-[10px]">
            <p className="mr-[10px] font-black">会社名</p>
            <p className="text-sm text-stone-500">※任意</p>
          </div>
          <div className="border-solid border-[1px] border-slate-300 rounded h-[60px] flex items-center pl-[20px] ">
            <p className="text-sm text-slate-300">会社名を入力してください</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="flex items-end mb-[10px]">
            <p className="mr-[10px] font-black">氏名</p>
            <p className="text-sm text-rose-500">※必須</p>
          </div>
          <div className="border-solid border-[1px] border-slate-300 rounded h-[60px] flex items-center pl-[20px] ">
            <p className="text-sm text-slate-300">会社名を入力してください</p>
          </div>
        </div>
        <div className="mb-[20px]">
          <div className="flex items-end mb-[10px]">
            <p className="mr-[10px] font-black">電話番号</p>
            <p className="text-sm text-rose-500">※必須</p>
          </div>
          <div className="border-solid border-[1px] border-slate-300 rounded h-[60px] flex items-center pl-[20px] ">
            <p className="text-sm text-slate-300">会社名を入力してください</p>
          </div>
        </div>
        <div>
          <div className="flex items-end mb-[10px]">
            <p className="mr-[10px] font-black">メールアドレス</p>
            <p className="text-sm text-rose-500">※必須</p>
          </div>
          <div className="border-solid border-[1px] border-slate-300 rounded h-[60px] flex items-center pl-[20px] ">
            <p className="text-sm text-slate-300">会社名を入力してください</p>
          </div>
        </div>
      </div>
      <p className="mb-[50px]">
        送信することで、
        <span className="text-blue-500 underline underline-offset-1">
          プライバシーポリシー
        </span>
        に同意したことになります
      </p>
      <div className="bg-gradient-to-r from-[#249dc3] to-[#2769d3] border rounded-xl flex justify-center items-center py-4">
        <p className="text-[#FFF]">送信する</p>
      </div>
    </section>
  );
};

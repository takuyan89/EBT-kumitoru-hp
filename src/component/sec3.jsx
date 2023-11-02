export const Sec3 = () => {
  return (
    <section className="h-auto w-full pt-[60px] pb-[20px] px-[25px] relative md:pt-[80px] md:pb-[40px] md:px-[80px] lg:py-[80px] lg:px-[60px] before:bg-[url(https://images.unsplash.com/photo-1504610926078-a1611febcad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8MjR8fGJsYWNrfGVufDB8fHx8MTY0MjQ3MzgyNw&ixlib=rb-1.2.1&q=80&w=1080)] before:absolute before:h-full before:w-full before:z-[-2] before:left-0 before:top-0 before:bg-cover before:bg-[left_calc(50%)_top_calc(0%)] before:brightness-[0.6] lg:before:bg-[left_calc(50%)_top_calc(50%)]">
      <div className="w-full mb-[30px] h-[49px] text-center md:mb-[50px]">
        <p className="w-full text-xl text-[#FFF] font-black mb-[10px] md:text-2xl">
          私たちが選ばれる、3つの理由
        </p>
        <div className="border border-[#FFF] w-1/4 m-auto md:w-20"></div>
      </div>

      <div className="flex flex-col w-full lg:flex-row">
        <div className="mb-[30px] lg:mb-0 lg:mr-[40px] lg:justify-start lg:flex lg:flex-col">
          <div className="mb-[20px] h-[200px] w-full relative before:bg-[url(https://images.unsplash.com/photo-1522542550221-31fd19575a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8N3x8ZGVzaWdufGVufDB8fHx8MTY0Mjc3NTQ3Mw&ixlib=rb-1.2.1&q=80&w=1080)] before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-cover before:bg-[left_calc(50%)_top_calc(50%)] before:rounded-md"></div>
          <div className="w-full">
            <p className="text-[#FFF] text-lg font-bold mb-[10px]">
              格安なのに最高品質のデザイン
            </p>
            <p className="text-[#FFF] whitespace-nowrap text-sm mb-[20px]">
              私たちは、ノーコードでサイトを制作しています。
              <br />
              そのため、無駄な工数を発生させず、安く提供し
              <br className="hidden lg:block" />
              てい
              <br className="md:hidden" />
              ます。
            </p>
          </div>
        </div>
        <div className="mb-[30px] lg:mb-0 lg:mx-[20px] lg:justify-start lg:flex lg:flex-col">
          <div className="mb-[20px] h-[200px] w-full relative before:bg-[url(https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8MTl8fGN1c3RvbWVyfGVufDB8fHx8MTY0Mjc3NjI1Mg&ixlib=rb-1.2.1&q=80&w=1080)] before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-cover before:bg-[left_calc(50%)_top_calc(50%)] before:rounded-md"></div>
          <div className="w-full">
            <p className="text-[#FFF] text-lg font-bold mb-[10px]">
              お客様のご要望を「汲み取り」ます
            </p>
            <p className="text-[#FFF] whitespace-nowrap text-sm mb-[20px]">
              何よりもお客様のご要望を重要視しています。お任せ
              <br className="hidden lg:block" />
              した
              <br className="md:hidden" />
              い、デザインに拘りたい、記事を更新したい、
              <br className="hidden md:block lg:hidden" />
              な<br className="hidden lg:block" />
              どお客様
              <br className="md:hidden" />
              ごとのニーズをヒアリングでお聞きし、ご要
              <br className="hidden lg:block" />
              望を汲み取り
              <br className="md:hidden" />
              ます。
            </p>
          </div>
        </div>
        <div className="mb-[30px] lg:mb-0 lg:ml-[40px]">
          <div className="mb-[20px] h-[200px] w-full relative before:bg-[url(https://images.unsplash.com/photo-1639111503666-56295742ed85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mjh8fHBjJTIwd2hpdGV8ZW58MHx8fHwxNjQyNzc2MzU2&ixlib=rb-1.2.1&q=80&w=1080)] before:absolute before:h-full before:w-full before:left-0 before:top-0 before:bg-cover before:bg-[left_calc(50%)_top_calc(50%)] before:rounded-md"></div>
          <div className="w-full">
            <p className="text-[#FFF] text-lg font-bold mb-[10px]">
              サブスクリプションだから
              <br />
              制作から保守管理まで全てお任せ
            </p>
            <p className="text-[#FFF] whitespace-nowrap text-sm mb-[20px]">
              お客様の負担を極力減らすため、当社では面倒な雑務
              <br className="hiden lg:block" />や
              <br className="md:hidden" />
              細々とした作業を引き受けています。
              <br />
              そのため、お客様は煩わしいことでお時間を奪われる
              <br className="hidden lg:block" />
              こと
              <br className="md:hidden" />
              はありません。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Sec4 = () => {
  return (
    <section className="pt-[60px] pb-[40px] px-[25px] md:py-[80px] md:px-[40px] lg:pt-[100px] lg:pb-[80px] lg:px-[60px] lg:flex lg:flex-col lg:items-center">
      <p className="text-xl font-black mb-[10px] justify-center flex md:text-2xl">
        制作の流れ
      </p>
      <div className="m-auto border mb-[30px] border-black w-[60px] h-[3px] bg-black lg:mb-[50px]"></div>
      <div>
        {/* main */}
        <div className="py-[25px] px-[40px] mb-[20px] flex flex-col items-start border-[1px] border-solid border-[#ccc] rounded-xl md:p-[40px] md:flex-row md:items-center">
          <div className="mb-[15px] flex items-center md:m-0 md:w-[240px]">
            <p className="text-2xl w-[50px] font-black text-stone-300 md:text-3xl  md:flex md:justify-start">
              01
            </p>
            <p className="font-bold md:flex md:justify-start md:text-lg">
              お問い合わせ
            </p>
          </div>
          <p className="text-sm leading-6 lg:leading-5">
            このサイトのフォームからお問い合わせ下さい。
            <br />
            気軽な質問でも勿論構いませんので、何か気になることが一つで
            <br className="hidden md:block lg:hidden" />
            もあればご連絡く
            <br className="hidden lg:block" />
            ださい。
            <br />
            休日・祝日を除き、基本的に3営業日内に返信させていただきま
            <br className="hidden md:block lg:hidden" />
            す。
          </p>
        </div>
        <div className="py-[25px] px-[40px] mb-[20px] flex flex-col items-start border-[1px] border-solid border-[#ccc] rounded-xl md:p-[40px] md:flex-row md:items-center">
          <div className="mb-[15px] flex items-center md:m-0 md:w-[240px]">
            <p className="text-2xl w-[50px] font-black text-stone-300 md:text-3xl  md:flex md:justify-start">
              02
            </p>
            <p className="font-bold md:flex md:justify-start md:text-lg">
              無料相談
            </p>
          </div>
          <p className="text-sm leading-6 lg:leading-5">
            チャットやビデオ通話、電話などお客様に適した形で無料相談を
            <br className="hidden md:block lg:hidden" />
            承っています。
            <br />
            制作に関することから、料金やオプション、契約内容など様々な
            <br className="hidden md:block lg:hidden" />
            ご質問に　お答え
            <br className="hidden lg:block" />
            いたします。
          </p>
        </div>
        <div className="py-[25px] px-[40px] mb-[20px] flex flex-col items-start border-[1px] border-solid border-[#ccc] rounded-xl md:p-[40px] md:flex-row md:items-center">
          <div className="mb-[15px] flex items-center md:m-0 md:w-[240px]">
            <p className="text-2xl w-[50px] font-black text-stone-300 md:text-3xl  md:flex md:justify-start">
              03
            </p>
            <p className="font-bold md:flex md:justify-start md:text-lg">
              ヒアリング
            </p>
          </div>
          <p className="text-sm leading-6 lg:leading-5">
            サイトのイメージや納期、入れたいコンテンツなどをお聞きいた
            <br className="hidden md:block lg:hidden" />
            します。
            <br />
            拘りたい方には勿論対応致しますし、任せたいという場合はこち
            <br className="hidden md:block lg:hidden" />
            らでニュアンスを
            <br className="hidden lg:block" />
            汲み取らせて頂きます。
          </p>
        </div>
        <div className="py-[25px] px-[40px] mb-[20px] flex flex-col items-start border-[1px] border-solid border-[#ccc] rounded-xl md:p-[40px] md:flex-row md:items-center">
          <div className="mb-[15px] flex items-center md:m-0 md:w-[240px]">
            <p className="text-2xl w-[50px] font-black text-stone-300 md:text-3xl  md:flex md:justify-start">
              04
            </p>
            <p className="font-bold md:flex md:justify-start md:text-lg">
              制作開始
            </p>
          </div>
          <p className="text-sm leading-6 lg:leading-5">
            ヒアリングを元にサイトの構成イメージを送らせて頂きますの
            <br className="hidden md:block lg:hidden" />
            で、もし問題無いよ
            <br className="hidden lg:block" />
            うでしたらそれを元にホームページの制作を
            <br className="hidden md:block lg:hidden" />
            始めさせて頂きます。
          </p>
        </div>
      </div>
    </section>
  );
};

import { AiOutlineRight } from "react-icons/ai";

export const Sec7 = () => {
  return (
    <section className="pt-[48px] bg-[#249dc9] flex flex-col md:pt-[56px] md:pb-[40px] lg:pt-[60px]">
      <div className="mb-[40px] px-[16px] flex flex-col items-center">
        <p className="text-2xl font-black m-[10px] text-[#FFF] md:text-3xl">
          制作実績
        </p>
        <div className="border rounded h-[3px] border-white bg-white w-[40px]"></div>
      </div>
      <div className="px-[32px] flex overflow-x-auto lg:px-[48px]">
        <a className="w-[240px] mb-[24px] mx-[16px] md:max-w-[calc(33%-32px)] lg:w-[calc(33%-32px)]">
          <img
            className="mb-[16px] "
            src="https://storage.googleapis.com/studio-cms-assets/projects/7kadMmzW3G/s-1920x1080_v-frms_webp_0f7dd3ae-ee73-4430-bc91-7cb228696c8a_small.webp"
            alt="Logo"
          />
          <div className="flex flex-col justify-start">
            <div className="border rounded border-[#EEE] bg-[#EEE] mb-[12px] py-[5px] px-[12px] w-[110px]">
              <p className="text-[#249dc3] text-xs font-bold">サービスサイト</p>
            </div>
            <p className="text-[#FFF] font-bold w-[240px] lg:w-[360px]">
              サウナファクトリー様 サービスHP
            </p>
          </div>
        </a>
        <a className="w-[240px] mb-[24px] mx-[16px] md:max-w-[calc(33%-32px)] lg:w-[calc(33%-32px)]">
          <img
            className="mb-[16px]"
            src="https://storage.googleapis.com/studio-cms-assets/projects/7kadMmzW3G/s-2400x1260_v-frms_webp_13a72456-8a81-4b90-a5b7-ad5c4df6b844_small.webp"
            alt="Logo"
          />
          <div className="flex flex-col justify-start">
            <div className="border rounded border-[#EEE] bg-[#EEE] mb-[12px] py-[5px] px-[12px] w-[135px]">
              <p className="text-[#249dc3] text-xs font-bold">
                コーポレートサイト
              </p>
            </div>
            <p className="text-[#FFF] font-bold w-[240px] lg:w-[360px]">
              日本維新の会 大平まさひろ様 公式ホームページ
            </p>
          </div>
        </a>
        <a className="w-[240px] mb-[24px] mx-[16px] md:max-w-[calc(33%-32px)] lg:w-[calc(33%-32px)]">
          <img
            className="mb-[16px]"
            src="https://storage.googleapis.com/studio-cms-assets/projects/7kadMmzW3G/s-2400x1115_v-frms_webp_c2149b22-1539-4a4c-a44f-1d7953f3ddef_small.webp"
            alt="Logo"
          />
          <div className="flex flex-col justify-start">
            <div className="border rounded border-[#EEE] bg-[#EEE] mb-[12px] py-[5px] px-[12px] w-[135px]">
              <p className="text-[#249dc3] text-xs font-bold">
                コーポレートサイト
              </p>
            </div>
            <p className="text-[#FFF] font-bold w-[240px] lg:w-[360px]">
              株式会社うぷ様 コーポレートHP
            </p>
          </div>
        </a>
        <a className="w-[240px] mb-[24px] mx-[16px] md:max-w-[calc(33%-32px)] lg:w-[360px]">
          <img
            className="mb-[16px]"
            src="https://storage.googleapis.com/studio-cms-assets/projects/7kadMmzW3G/s-2400x1261_v-frms_webp_0ff0f093-dc7c-4760-a9be-6ceb43d312c8_small.webp"
            alt="Logo"
          />
          <div className="flex flex-col justify-start">
            <div className="border rounded border-[#EEE] bg-[#EEE] mb-[12px] py-[5px] px-[12px] w-[135px]">
              <p className="text-[#249dc3] text-xs font-bold">
                コーポレートサイト
              </p>
            </div>
            <p className="text-[#FFF] font-bold w-[240px] lg:w-[360px]">
              有限会社北谷造園土木様 コーポレートHP
            </p>
          </div>
        </a>
      </div>
      <a className="border border-[#FFF] bg-[#FFF] rounded-[48px] mt-[12px] mb-[24px] py-[16px] pr-[16px] pl-[28px] flex items-center m-auto">
        <p className="text-[#249dc9] text-sm font-bold mr-[4px] flex items-center">
          制作実績の一覧
        </p>
        <p className="text-[#249dc9] text-xl">
          <AiOutlineRight />
        </p>
      </a>
    </section>
  );
};

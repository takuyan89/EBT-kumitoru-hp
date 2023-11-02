import { Foot } from "@/component/foot";
import { Head } from "@/component/head";
import { Kv } from "@/component/kv";
import { Sec1 } from "@/component/sec1";
import { Sec2 } from "@/component/sec2";
import { Sec3 } from "@/component/sec3";
import { Sec4 } from "@/component/sec4";
import { Sec5 } from "@/component/sec5";
import { Sec6 } from "@/component/sec6";
import { Sec7 } from "@/component/sec7";
import { Sec8 } from "@/component/sec8";
import { Sec9 } from "@/component/sec9";
import Link from "next/link";
import Image from "next/image";
import { IoMailOutline } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <Head />

      <div className="h-[300px] flex justify-center">
        <Link href="./blog">
          <p className="text-black mt-[200px]">Sub Page</p>
        </Link>
      </div>
      <main className="w-full mt-[100px] md:mt-[160px]">
        <Kv />
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
        <Sec6 />
        <Sec7 />
        <Sec8 />
        <Sec9 />
      </main>
      <footer></footer>
      <Foot />
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Noto_Sans_Mono, Geo } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const noto = Noto_Sans_Mono({ subsets: ["latin"] });
const geo = Geo({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>hbd ryan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hbdrobot.ico" />
      </Head>
      <main className="bg-hero flex flex-col items-center w-screen min-h-screen bg-no-repeat bg-cover space-y-20">
      <div className="my-24"><iframe src="https://giphy.com/embed/u55ZNiwbKnNALmBFwi" width="100%" height="100%" allowFullScreen></iframe></div>
        <div className="rounded-xl mt-72 p-3 backdrop-blur-sm bg-indigo-900/40">
          <div className={geo.className}>
            <h1 className="text-8xl text-white ">Happy Birthday Ryan!</h1>
          </div>
        </div>
        <div className="pt-52 pb-24">
          <div className={noto.className}>
            <p className="text-white text-lg max-w-4xl">Dear Ryan,<br/><br/>
            Hope you have a happy 20th birthday! <br/>Last year, I was up early in the morning to &quot;code&quot; you a birthday website for fun cause I thought you might like it. I have a feeling we will be celebrating together much more so I thought why not keep the idea going. I&apos;m better at making websites now too, which is partially thanks to you. You are so amazing and I am very grateful to have met you and become as close as we are because you bring me a lot of happiness. I think you are very special and I hope all your aspirations come true in the future cause you deserve it :) Enjoy being in your twenties and all your upcoming adventures! 
            <br/><br/>Love, Alison &lt;3</p>
          </div>
        </div>
      </main>
    </>
  );
}

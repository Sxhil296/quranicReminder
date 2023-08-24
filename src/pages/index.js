import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import ReminderComponent from "@/components/ReminderComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Quranic Reminders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReminderComponent />
    </>
  );
}

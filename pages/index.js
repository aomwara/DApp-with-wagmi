import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useAccount } from "wagmi";

export default function Home() {
  const { data } = useAccount();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ marginBottom: "20px" }}>
          Welcome to <a href="#">DApp</a>
        </h1>
        <ConnectButton />
        <div style={{ paddingTop: "20px" }}> {data?.address}</div>
        <hr />
        <Link href="/home">Go to Home</Link>
      </main>
    </div>
  );
}

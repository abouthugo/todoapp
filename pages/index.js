import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello world</h1>

        <ul className="w-1/4 grid grid-rows-2 gap-y-2">
          <li className="rounded-lg shadow-xl bg-white">
            <div className="p-5">
              <p>Some todo item</p>
            </div>
          </li>
          <li className="rounded-lg shadow-xl bg-white">
            <div className="p-5">
              <p>Some todo item</p>
            </div>
          </li>
          <li className="rounded-lg shadow-xl bg-white">
            <div className="p-5">
              <p>Some todo item</p>
            </div>
          </li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <p>Created by Hugo Perdomo</p>
      </footer>
    </div>
  );
}

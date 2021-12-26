import { useState } from "react";
import Head from "next/head";
import TodoList from "../components/TodoList";
import styles from "../styles/Home.module.css";

const dummyList = [
  { id: 1, name: "Buy a new microphone" },
  { id: 2, name: "Clean the house" },
  { id: 3, name: "Practice some guitar" },
  { id: 4, name: "Create new content" },
  { id: 5, name: "Go to sleep early" },
];

export default function Home() {
  const [sideBarOn, setSideBar] = useState(true);
  const [taskList, settaskList] = useState(dummyList);
  const toggleSidebar = () => {
    setSideBar(!sideBarOn);
  };

  const handleNewTask = (task) => {
    settaskList([...taskList, task]);
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Todo App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon-new.ico" />
        </Head>

        <nav className="bg-neutral-800 py-2 px-6 text-white flex justify-between">
          <div className="flex ">
            <button
              type="button"
              className="w-9 h-7 hover:cursor-pointer hover:bg-neutral-700 box-border grid justify-center items-center py-1"
              onClick={() => toggleSidebar()}
            >
              <div className="w-5 h-px bg-white"></div>
              <div className="w-5 h-px bg-white"></div>
              <div className="w-5 h-px bg-white"></div>
            </button>
            <input
              type="text"
              placeholder="Search"
              className="text-black box-border px-2 ml-2"
            />
          </div>

          <span>
            <button
              type="button"
              className="hover:bg-neutral-700 text-lg px-3 hover:cursor-pointer h-7 box-border"
            >
              +
            </button>
          </span>
        </nav>

        <div className={styles.content}>
          <aside
            className={`bg-neutral-50 text-zinc-500 w-64 pl-6 transition-transform ease-in-out duration-200 ${
              sideBarOn ? "" : "-ml-64"
            }`}
          >
            Sidebar
          </aside>
          <main className={styles.main}>
            <TodoList todos={taskList} handleNewTask={handleNewTask} />
          </main>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Created by Hugo Perdomo</p>
      </footer>
    </>
  );
}

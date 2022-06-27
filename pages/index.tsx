import { useState } from "react";
import Head from "next/head";
import TodoList from "../components/TodoList";
import NoTasksSVG from "../components/NoTasksSVG";
import styles from "../styles/Home.module.css";
import AddTask from "../components/AddTask";

export default function Home() {
  // Tracks the state of the sidebar when user clicks icon
  const [sideBarOn, setSideBar] = useState(false);
  // Our database of tasks
  const [taskList, setTaskList]: [Task[], Function] = useState([]);

  // Listener for when user clicks hamburger icon
  const toggleSidebar = () => {
    setSideBar(!sideBarOn);
  };

  // Function that handles new tasks additions. It gets passed down as a prop to the Task List component
  const handleNewTask = (task: Task) => {
    setTaskList([...taskList, task]);
  };

  /**
   * Function responsible for updating a task when it has been edited
   * @param task
   */
  const onTaskChange = (task: Task) => {
    const mapNewList = (t: Task) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    };

    setTaskList(taskList.map(mapNewList));
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Todo App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="favicon-new.ico" />
        </Head>

        <nav className="bg-neutral-800 py-2 px-6 text-white flex justify-between">
          <div className="flex">
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
              className="text-black box-border px-2 ml-2 rounded-sm transition-colors duration-200 bg-neutral-600 placeholder-white hover:bg-white hover:placeholder-black"
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
            {/* TODO: Here we need to apply a different title depending on the sidebar */}
            <h1 className="border-b-2 mb-6">Inbox</h1>
            <TodoList todos={taskList} onTaskChange={onTaskChange} />
            <AddTask handleNewTask={handleNewTask} />
            {!taskList.length && <NoTasksSVG />}
          </main>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Created by Hugo Perdomo</p>
      </footer>
    </>
  );
}
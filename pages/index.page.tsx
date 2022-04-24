import type { NextPage } from "next";
import Link from "next/link";
import TaskList from "./component/TaskList";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/add">タスクの追加</Link>
      <TaskList></TaskList>
    </div>
  );
};

export default Home;

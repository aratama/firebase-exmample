import type { NextPage } from "next";
import Link from "next/link";
import TaskList from "./component/TaskList";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/add">Add</Link>
      <TaskList></TaskList>
    </div>
  );
};

export default Home;

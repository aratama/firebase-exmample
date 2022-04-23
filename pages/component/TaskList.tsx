import styles from "../../styles/Home.module.css";
import { FC } from "react";
import { TaskItem } from "./TaskItem";
import { useTodoTaskList } from "../../src/infrastructure/task";

const TaskList: FC = () => {
  const [snapshot, loading, error] = useTodoTaskList();
  if (loading) {
    return <></>;
  } else if (error) {
    return <p>{error.message}</p>;
  } else if (snapshot) {
    return (
      <div className={styles.container}>
        <table>
          <tbody>
            {snapshot.docs.map((doc) => (
              <TaskItem key={doc.id} doc={doc}></TaskItem>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    throw new Error("somehting happeed!");
  }
};

export default TaskList;

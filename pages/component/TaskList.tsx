import { FC } from "react";
import { TaskItem } from "./TaskItem";
import { useTodoTaskList } from "../../src/infrastructure/task";

const TaskList: FC = () => {
  const [snapshot, loading, error] = useTodoTaskList();
  if (error) {
    return <p>{error.message}</p>;
  } else if (snapshot) {
    return (
      <table>
        <tbody>
          {snapshot.docs.map((doc) => (
            <TaskItem key={doc.id} doc={doc}></TaskItem>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <></>;
  }
};

export default TaskList;

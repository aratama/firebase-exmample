import { QueryDocumentSnapshot } from "firebase/firestore";
import { FC } from "react";
import { completeTodoTask } from "../../src/infrastructure/task";
import { TodoTask } from "../../src/model/TodoTask";

export const TaskItem: FC<{ doc: QueryDocumentSnapshot<TodoTask> }> = (props: { doc: QueryDocumentSnapshot<TodoTask> }) => {
  const { doc } = props;
  const task: TodoTask = doc.data();
  return (
    <tr key={doc.id}>
      <td>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            completeTodoTask(doc.id);
          }}
        ></input>
      </td>
      <td>{task.name}</td>
    </tr>
  );
};

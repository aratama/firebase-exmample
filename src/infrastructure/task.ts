import { addDoc, collection, doc, FirestoreDataConverter, QueryDocumentSnapshot, updateDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../firebase";
import { TodoTask } from "../model/TodoTask";

const TodoTaskConverter: FirestoreDataConverter<TodoTask> = {
  toFirestore: (task: TodoTask) => task,
  fromFirestore: (snapshot: QueryDocumentSnapshot<TodoTask>) => snapshot.data(),
};

export function useTodoTaskList() {
  return useCollection(collection(firestore, "task").withConverter(TodoTaskConverter), { snapshotListenOptions: {} });
}

export async function addTodoTask(task: TodoTask): Promise<void> {
  await addDoc(collection(firestore, "task").withConverter(TodoTaskConverter), task);
}

export async function completeTodoTask(taskId: string): Promise<void> {
  await updateDoc(doc(firestore, "task", taskId).withConverter(TodoTaskConverter), { done: true });
}

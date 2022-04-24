import { addDoc, collection, doc, FirestoreDataConverter, orderBy, query, QueryDocumentSnapshot, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../firebase";
import * as z from "zod";

const todoTaskSchema = z.object({
  name: z.string(),
  done: z.boolean(),
  createdAt: z.union([z.date(), z.instanceof(Timestamp).transform((timestamp) => timestamp.toDate())]),
});

export type TodoTask = z.infer<typeof todoTaskSchema>;

const TodoTaskConverter: FirestoreDataConverter<TodoTask> = {
  toFirestore: (task: TodoTask) => task,
  fromFirestore: (snapshot: QueryDocumentSnapshot<TodoTask>) => todoTaskSchema.parse(snapshot.data()),
};

export function useTodoTaskList() {
  return useCollection(query(collection(firestore, "task").withConverter(TodoTaskConverter), orderBy("createdAt")));
}

export async function addTodoTask(name: string): Promise<void> {
  const task: TodoTask = {
    name,
    done: false,
    createdAt: serverTimestamp() as unknown as Date,
  };
  await addDoc(collection(firestore, "task").withConverter(TodoTaskConverter), task);
}

export async function completeTodoTask(taskId: string): Promise<void> {
  await updateDoc(doc(firestore, "task", taskId).withConverter(TodoTaskConverter), { done: true });
}

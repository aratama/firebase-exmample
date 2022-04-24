import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { addTodoTask } from "../src/infrastructure/task";
import styles from "../styles/Add.module.css";

const Add: NextPage = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link href="/">
        <a>戻る</a>
      </Link>
      <div className={styles.inputItem}>
        <label>タスクの名前</label>
        <input
          value={name}
          onInput={(e) => {
            setName(e.currentTarget.value);
          }}
        ></input>
      </div>
      <div className={styles.footer}>
        <button
          onClick={async () => {
            await addTodoTask(name);
            await router.push("/");
          }}
        >
          タスクを追加する
        </button>
      </div>
    </div>
  );
};

export default Add;

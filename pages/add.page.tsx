import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { addTodoTask } from "../src/infrastructure/task";
import styles from "../styles/Home.module.css";

const Add: NextPage = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Link href="/">
        <a>戻る</a>
      </Link>

      <input
        value={name}
        onInput={(e) => {
          setName(e.currentTarget.value);
        }}
      ></input>

      <button
        onClick={async () => {
          await addTodoTask({ name, done: false });
          await router.push("/");
        }}
      >
        追加
      </button>
    </div>
  );
};

export default Add;

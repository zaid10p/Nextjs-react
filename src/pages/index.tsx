import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ todos }: any) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <h3>TODOS LIST :</h3>

        {todos.map((todo: any) => (
          <p
            key={todo.id}
            style={{ marginTop: "10px", textDecoration: "underline" }}
          >
            <Link href={"/todos/" + todo.id}>{todo.todo}</Link>
          </p>
        ))}
      </div>
    </>
  );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export async function getStaticProps() {
  const url = "https://dummyjson.com/todos?limit=" + getRandomInt(25);
  const res = await fetch(url);
  const { todos } = await res.json();
  return {
    props: {
      todos,
    },
    // after 5 seconds it will revalidate and get new data with random limit
    revalidate: 5,
  };
}

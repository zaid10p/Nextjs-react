import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ todos }: any) {
  console.log(todos);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <h3>Next 13 app</h3>

        {todos.map((todo: any) => (
          <p key={todo.id} style={{ marginTop: "10px" }}>
            <Link href={"/todos/" + todo.id}>{todo.todo}</Link>
          </p>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://dummyjson.com/todos?limit=10");
  const { todos } = await res.json();
  return {
    props: {
      todos,
    },
  };
}

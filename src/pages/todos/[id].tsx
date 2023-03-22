import { GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function Todos({ todo }: any) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h3>{todo.todo}</h3>
      <p>Completed : {todo.completed.toString()}</p>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  return {
    // Only `/todos/1` and `/todos/2` are generated at build time
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    // Enable statically generating additional pages
    // For example: `/todos/3`
    fallback: true,
  };
}
// This also gets called at build time
export const getStaticProps: GetStaticProps<{}> = async (context) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://dummyjson.com/todos/${context?.params?.id}`);
  const todo = await res.json();
  // Pass post data to the page via props
  return {
    props: { todo },
    // Re-generate the post at most once per 10 second
    // if a request comes in
    revalidate: 10,
  };
};

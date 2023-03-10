import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "./todosAction";

export default function Todos() {
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>Todos App </h1>

      {isLoading && <h3>loading...</h3>}
      {error && <h3>{error.message}</h3>}

      <section>
        {todos &&
          todos.map((todo) => {
            const { id, title } = todo;

            return (
              <article key={id}>
                <h2 style={{ backgroundColor: "#00aaff", paddingLeft: "10px" }}>
                  {id}
                </h2>
                <h2>{title}</h2>
              </article>
            );
          })}
      </section>
    </div>
  );
}

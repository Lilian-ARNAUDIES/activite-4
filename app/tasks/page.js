import Link from "next/link";

export const metadata = {
  title: "Toutes les tâches | Next.js App",
  description: "Liste de toutes les tâches.",
};

export default async function TasksPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const tasks = await res.json();

  return (
    <div>
      <h1>Liste des tâches</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/tasks/task/${task.id}`}>
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

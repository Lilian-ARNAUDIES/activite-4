import TaskList from '../components/TaskList'

export const metadata = {
  title: 'Liste de tâches',
  description: 'Une liste de tâches à réaliser',
};

async function getTasks() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  if (!res.ok) {
    throw new Error('Échec de la récupération des données');
  }

  const tasks = await res.json();
  return tasks;
}

export default async function Home() {
  const tasks = await getTasks();

  return (
    <div>
      <h1>Liste des tâches</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

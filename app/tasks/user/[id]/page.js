import TaskList from '../../../../components/TaskList';

export async function generateMetadata({ params }) {
    const { id } = params;
    return {
      title: `Tâches de l'utilisateur n°${id}`,
      description: `Liste des tâches de l'utilisateur n°${id}`,
    };
}
  
  async function getUserTasks(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`, {
      cache: 'force-cache',
    });
  
    if (!res.ok) {
      throw new Error(`Échec de la récupération des tâches pour l'utilisateur ${userId}`);
    }
  
    return res.json();
  }
  
  export default async function UserTasksPage({ params }) {
    const { id } = await params;
    const tasks = await getUserTasks(id);
  
    return (
      <div>
        <h1>Tâches de l’utilisateur {id}</h1>
        <TaskList tasks={tasks} />
      </div>
    );
  }
  
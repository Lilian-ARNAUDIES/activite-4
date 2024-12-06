export async function generateMetadata({ params }) {
    const { id } = params;

    return {
        title: `Détails de la tâche n°${id}`,
        description: `Page affichant les détails de la tâche n°${id}`,
    };
}
  
  async function getTask(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      cache: 'force-cache',
    });
  
    if (!res.ok) {
      throw new Error(`Échec de la récupération de la tâche ${id}`);
    }
  
    return res.json();
  }
  
  export default async function TaskDetailsPage({ params }) {
    const task = await getTask(params.id);
  
    return (
      <div>
        <h1>Détails de la tâche {params.id}</h1>
        <p><strong>Titre :</strong> {task.title}</p>
        <p><strong>Statut :</strong> {task.completed ? 'Terminée' : 'En cours'}</p>
      </div>
    );
  }
  
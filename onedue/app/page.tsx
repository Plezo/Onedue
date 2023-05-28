import getQueryClient from './util/getQueryClient'
import { dehydrate } from '@tanstack/react-query'
import Hydrate from './util/HydrateClient'

interface Todo {
  todo_id: string;
  list_id?: string;
  user_id: string;
  name: string;
  description?: string;
  due_date?: Date;
  completed?: boolean;
}

interface List {
  list_id: string;
  user_id: string;
  list_name: string;
  todos: Todo[];
}

const getLists = async () => {
  const url = 'http://localhost:3000/api/lists'
	const res = await fetch(url);
	const lists: List[] = await res.json();

	return lists;
}

export default async function Home() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(['lists'], getLists);
	const dehydratedState = dehydrate(queryClient);

  return (
    <main>
      <Hydrate state={dehydratedState}>
        <h1>Inbox will be here</h1>
      </Hydrate>
    </main>
  )
}

import getQueryClient from '../../util/getQueryClient'
import { dehydrate } from '@tanstack/react-query'
import Hydrate from '../../util/HydrateClient'
import TodoList from '../../components/Todo';

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
  list_id?: string;
  user_id: string;
  list_name: string;
  todos?: Todo[];
}

const getList = async (list_id: string) => {
  const url = `http://localhost:3000/api/lists/${list_id}`
	const res = await fetch(url);
	const list: List = await res.json();

	return list;
}

export default async function List(list_id: string) {
  console.log(list_id)
  const queryClient = getQueryClient();
	await queryClient.prefetchQuery(['list'], () => getList(list_id));
	const dehydratedState = dehydrate(queryClient);

  return (
    <main>
      <Hydrate state={dehydratedState}>
        <TodoList list_id={list_id} id={''} user_id={''} name={''}/>
      </Hydrate>
    </main>
  )
}

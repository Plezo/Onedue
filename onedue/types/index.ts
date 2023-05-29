export interface Todo {
    id: string;
    list_id?: string;
    user_id: string;
    name: string;
    description?: string;
    due_date?: Date;
    completed?: boolean;
}
  
export interface List {
    id: string;
    user_id: string;
    name: string;
    todos: Todo[];
}
interface todoI {
  done: boolean;
  task: string;
}

const todos: todoI[] = [
  { done: false, task: "take out the trash" },
  { done: true, task: "pet the animal" },
  { task: "walk the streets", done: false },
  { task: "play some music", done: true },
  { task: "argue online", done: false },
  { task: "call potential voters", done: false }
];

export { todos, todoI };

interface todoI {
  done: boolean;
  task: string;
  id: number;
}

const todosData: todoI[] = [
  { done: false, task: "take out the trash", id: 1 },
  { done: true, task: "pet the animal", id: 2 },
  { task: "walk the streets", done: false, id: 3 },
  { task: "play some music", done: true, id: 4 },
  { task: "argue online", done: false, id: 5 },
  { task: "call potential voters", done: false, id: 6 }
];

export { todosData, todoI };

export type Lesson = {
  id: number;
  title: string;
  content: string;
  date: string;
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a library for building user interfaces. It is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you build user interfaces out of individual pieces called components.",
    date: "2025-01-01",
  },
  {
    id: 2,
    title: "What is a component?",
    content:
      "A component is a piece of a user interface that can be reused. It is a self-contained module that renders a part of the user interface. It can be a button, a form, a list, etc.",
    date: "2025-01-02",
  },
  {
    id: 3,
    title: "What is a prop?",
    content:
      "A prop is a property of a component. It is a way to pass data from a parent component to a child component. It can be a string, a number, a boolean, an object, or a function.",
    date: "2025-01-03",
  },
  {
    id: 4,
    title: "What is a state?",
    content:
      "A state is a piece of data that can be changed. It is a way to store data that can be changed by the user. It can be a string, a number, a boolean, an object, or a function.",
    date: "2025-01-04",
  },
  {
    id: 5,
    title: "What is a hook?",
    content:
      "A hook is a function that can be used to store data. It is a way to store data that can be changed by the user. It can be a string, a number, a boolean, an object, or a function.",
    date: "2025-01-05",
  },
  {
    id: 6,
    title: "What is a context?",
    content:
      "A context is a piece of data that can be shared between components. It is a way to store data that can be shared between components. It can be a string, a number, a boolean, an object, or a function.",
    date: "2025-01-06",
  },
  {
    id: 7,
    title: "What is tanstack router?",
    content:
      "Tanstack Router is a library for routing in React. It is a declarative, efficient, and flexible JavaScript library for routing in React. It lets you build user interfaces out of individual pieces called components.",
    date: "2025-01-07",
  },
  {
    id: 8,
    title: "What is tailwindcss?",
    content:
      "Tailwindcss is a library for styling in React. It is a declarative, efficient, and flexible JavaScript library for styling in React. It lets you build user interfaces out of individual pieces called components.",
    date: "2025-01-08",
  },
  {
    id: 9,
    title: "What is a framework?",
    content:
      "A framework is a library for building user interfaces. It is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you build user interfaces out of individual pieces called components.",
    date: "2025-01-09",
  },
  {
    id: 10,
    title: "What is a library?",
    content:
      "A library is a collection of functions and classes that can be used to build user interfaces. It is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you build user interfaces out of individual pieces called components.",
    date: "2025-01-10",
  },
];

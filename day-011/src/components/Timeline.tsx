import { Post } from "./Post";

const POSTS = [
  {
    id: 1,
    content: "Hello, world!",
    username: "John Doe",
  },
  {
    id: 2,
    content: "Hello, world! 2",
    username: "Jane Doe",
  },
  {
    id: 3,
    content: "Hello, world! 3",
    username: "John Doe",
  },
];

export type PostType = (typeof POSTS)[number];

export const Timeline = () => {
  return (
    <div className="w-full">
      <ul>
        {POSTS.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

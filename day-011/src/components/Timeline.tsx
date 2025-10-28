import { useEffect, useState } from "react";
import { Post } from "./Post";

export type PostType = {
  id: number;
  username: string;
  content: string;
};

const FALLBACK_POSTS = [
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
];

export const Timeline = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-full">
      <ul>
        {posts.length > 0 &&
          posts.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        {posts.length === 0 &&
          FALLBACK_POSTS.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
      </ul>
    </div>
  );
};

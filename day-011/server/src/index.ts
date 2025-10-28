import Fastify from "fastify";

console.log("Hello, world!");

const server = Fastify({
  logger: true,
});

const POSTS = [
    {
        id: 1,
        content: "Hello, world!",
        username: "John Doe",
    },
    {
        id: 2,
        content: "Hello, world! 2",
        username: "Jane Doe"
    },
]

server.get("/", (request, response) => {
  response.send("Hello, world!");
});

server.get("/api/posts", (request, response) => {
  response.send(POSTS);
});

server.post("/api/posts", (request, response) => {
  const post = JSON.parse(request.body as string) as { id: number; content: string; username: string };
  POSTS.push(post);
  response.status(201).send(post);
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});
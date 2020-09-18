import express from "express";
import connect from "../mongo";
import { graphqlHTTP } from "express-graphql";
import schema from "../schemas/schema";

const app = express();
const port = 3000;

connect();

app.get("/", (req, res) => {
  res.json({
    msg: "안녕",
  });
});

app.use(
  `/graphql`,
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`서버 실행!! 포트는? ${port}`);
});

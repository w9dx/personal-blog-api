import { MongoClient, ServerApiVersion } from "mongodb";
export async function connectToDatabase() {
  const uri = "mongodb://127.0.0.1";
  const username = "root";
  const password = "127221";
  const db_name = "full-stack-react-db";
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    auth: {
      username,
      password,
    },
  });
  await client.connect();
  return client.db(db_name);
}

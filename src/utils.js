import { MongoClient, ServerApiVersion } from "mongodb";
export async function connectToDatabase() {
  const uri = process.env.MONGO_URI ?? "mongodb://root:127221/localhost:27017";
  // const username = encodeURIComponent(process.env.DB_USERNAME);
  // const password = encodeURIComponent(process.env.DB_PASSWORD);
  // const auth = {
  //   username,
  //   password,
  // };
  const db_name = process.env.DB_NAME;
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  await client.connect();
  return client.db(db_name);
}

import { Db, MongoClient, ServerApiVersion } from "mongodb";

/**
 * @type {MongoClient}
 */
let client;

/**
 *
 * @param {string?} dbname
 * @returns {Promise<Db>}
 */
export async function connectToDB(dbname) {
  if (!client) {
    try {
      // const username = encodeURIComponent(process.env.DB_USERNAME);
      // const password = encodeURIComponent(process.env.DB_PASSWORD);
      // const auth = {
      //   username,
      //   password,
      // };
      const uri =
        process.env.MONGO_URI ?? "mongodb://root:127221/localhost:27017";
      dbname ??= process.env.DB_NAME ?? "test";
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });

      await client.connect();
      return client.db(dbname);
    } catch (error) {
      console.error("Error To connecting to mongodb", error);
      throw error;
    }
  }
}

export const closeDB = async () => {
  if (client) {
    await client.close();
    console.log("MongoDB connection closed");
    client = null;
  }
};

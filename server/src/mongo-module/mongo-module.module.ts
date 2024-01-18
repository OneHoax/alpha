import { Module } from "@nestjs/common";
import { Db, MongoClient, MongoNotConnectedError } from "mongodb";

@Module({
  providers: [
    {
      provide: "MONGO_CONNECTION",
      useFactory: async (): Promise<Db> => {
        try {
          const client: MongoClient = await MongoClient.connect(
            // "mongodb://admin:pass@localhost:27017/",
            // "mongodb://admin:pass@0.0.0.0:27017/",
            // "mongodb://admin:pass@127.0.0.1:27017/",
            process.env.MONGO_URI,
          );
          return client.db("alpha");
        } catch (e: unknown) {
          console.log(e);
          throw new MongoNotConnectedError("Could not connect to MongoDB");
        }
      },
    },
  ],
  exports: ["MONGO_CONNECTION"],
})
export class MongoModule {}

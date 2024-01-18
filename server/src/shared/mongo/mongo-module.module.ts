import { Logger, Module } from "@nestjs/common";
import { Db, MongoClient, MongoNotConnectedError } from "mongodb";

@Module({
  providers: [
    {
      provide: "MONGO_CONNECTION",
      useFactory: async (): Promise<Db> => {
        try {
          const client: MongoClient = await MongoClient.connect(
            process.env.MONGO_URI,
          );
          return client.db(process.env.MONGO_DB);
        } catch (e: unknown) {
          Logger.error(`Could not connect to MongoDB: ${e}`, MongoModule.name);
          throw new MongoNotConnectedError("Could not connect to MongoDB");
        }
      },
    },
  ],
  exports: ["MONGO_CONNECTION"],
})
export class MongoModule {}

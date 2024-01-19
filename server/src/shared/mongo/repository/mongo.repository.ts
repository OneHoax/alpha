import { Db, ObjectId } from "mongodb";
import { defaultTransform } from "src/shared/mongo/utils/mongo.utils";

export abstract class MongoRepository<I> {
  constructor(
    private readonly collection: string,
    private readonly db: Db,
  ) {}

  public async findOne(id: string): Promise<I> {
    return <I>await this.db
      .collection(this.collection)
      .findOne({ _id: new ObjectId(id) })
      .then(defaultTransform);
  }

  public async findMany(ids: string[]): Promise<I[]> {
    const objectIds = ids.map((id) => new ObjectId(id));

    return <I[]>(
      await this.db
        .collection(this.collection)
        .find({ _id: { $in: objectIds } })
        .toArray()
    ).map(defaultTransform);
  }

  public async findAll(): Promise<I[]> {
    return <I[]>(
      (await this.db.collection(this.collection).find().toArray()).map(
        defaultTransform,
      )
    );
  }
}

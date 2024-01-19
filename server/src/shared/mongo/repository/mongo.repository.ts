import { Db, ObjectId } from "mongodb";

export abstract class MongoRepository<I> {
  constructor(
    private readonly collection: string,
    private readonly db: Db,
  ) {}

  public async findOne(id: string): Promise<I> {
    return <I>(
      await this.db
        .collection(this.collection)
        .findOne({ _id: new ObjectId(id) })
    );
  }

  public async findAll() {
    return <I[]>await this.db.collection(this.collection).find().toArray();
  }
}

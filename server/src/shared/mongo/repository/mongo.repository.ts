import { Db, ObjectId } from "mongodb";
import { defaultTransform } from "src/shared/mongo/utils/mongo.utils";
import { ActionResponseEnum } from "src/shared/response/enum/action-response.enum";
import { ICountResponse } from "src/shared/response/interface/count-response.interface";

export class MongoRepository<I> {
  constructor(
    private readonly collection: string,
    private readonly db: Db,
  ) {}

  async findOne(id: string): Promise<I> {
    return <I>await this.db
      .collection(this.collection)
      .findOne({ _id: new ObjectId(id) })
      .then(defaultTransform);
  }

  async findMany(ids: string[]): Promise<I[]> {
    const objectIds = ids.map((id) => new ObjectId(id));

    return <I[]>(
      await this.db
        .collection(this.collection)
        .find({ _id: { $in: objectIds } })
        .toArray()
    ).map(defaultTransform);
  }

  async findAll(): Promise<I[]> {
    return <I[]>(
      (await this.db.collection(this.collection).find().toArray()).map(
        defaultTransform,
      )
    );
  }

  async createOne(createDto: I): Promise<I> {
    return <I>await this.db.collection(this.collection).insertOne(createDto);
  }

  async updateOne(id: string, updateDto: Partial<I>): Promise<I> {
    return <I>(
      await this.db
        .collection(this.collection)
        .updateOne(new ObjectId(id), updateDto)
    );
  }

  async deleteOne(id: string): Promise<number> {
    return await this.db
      .collection(this.collection)
      .deleteOne(new ObjectId(id))
      .then((r) => r.deletedCount);
  }
}

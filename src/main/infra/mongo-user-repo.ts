import { UserRepo } from "../usecases/find-users";
import { MongoHelper } from "./db/mongo-helper";

export class MongoDbUserRepository implements UserRepo {
  async findAll(): Promise<any> {
    const userCollection = (await MongoHelper.getCollection("users"))
      .find()
      .toArray();
    return userCollection;
  }
}

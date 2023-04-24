import { CreateUser, User } from "../../usecases/create-user";
import { UserRepo } from "../../usecases/find-users";
import { MongoHelper } from "./db/mongo-helper";

export class MongoDbUserRepository implements UserRepo, CreateUser {
  async create({ name, email }: CreateUserController.Request): Promise<User> {
    const userCollection = await MongoHelper.getCollection("users");
    const user: any = await userCollection.insertOne({ name, email });
    return user;
  }

  async findAll(): Promise<any> {
    const userCollection = (await MongoHelper.getCollection("users"))
      .find()
      .toArray();
    return userCollection;
  }
}

export namespace CreateUserController {
  export type Request = {
    name: string;
    email: string;
  };
}

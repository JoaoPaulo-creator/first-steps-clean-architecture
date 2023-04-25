import { CreateUser, User } from "../../usecases/create-user";
import { ExcludeUser } from "../../usecases/delete-user";
import { UserRepo } from "../../usecases/find-users";
import { MongoHelper } from "./db/mongo-helper";

export class MongoDbUserRepository
  implements UserRepo, CreateUser, ExcludeUser
{
  async create({
    name,
    email,
  }: CreateUserControllerTeste.Request): Promise<User> {
    const userCollection = await MongoHelper.getCollection("users");
    const user: any = await userCollection.insertOne({ name, email });
    return user;
  }

  async findAll(): Promise<any> {
    const userCollection = (await MongoHelper.getCollection("users")).find();
    return userCollection.toArray();
  }

  async exits(id: string) {
    return (await MongoHelper.getCollection("users")).findOne({ id });
  }

  async delete(userId: string): Promise<void> {
    const userCollection = await MongoHelper.getCollection("users");
    await userCollection.findOneAndDelete({ userId });
  }
}

export namespace CreateUserControllerTeste {
  export type Request = {
    name: string;
    email: string;
  };
}

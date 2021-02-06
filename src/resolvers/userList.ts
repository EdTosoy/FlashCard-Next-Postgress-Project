import { Query, Resolver } from "type-graphql";
import { User } from "../entities/User";

@Resolver()
export class UserList {
  @Query(() => [User])
  async UserList() {
    const users = await User.find();

    return users;
  }
}

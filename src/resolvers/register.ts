import { hash } from "argon2";
import { Arg, Mutation, Resolver } from "type-graphql";
import { User } from "../entities/User";

@Resolver()
export class Register {
  @Mutation(() => Boolean)
  async register(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Arg("email") email: string
  ) {
    const hashedPassword = await hash(password);
    const usernameExist = await User.findOne({
      where: { username: username },
    });
    const emailExist = await User.findOne({
      where: { email: email },
    });
    if (usernameExist || emailExist) {
      throw new Error("User already exist");
    }
    try {
      await User.insert({
        username,
        password: hashedPassword,
        email,
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

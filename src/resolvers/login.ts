import { verify } from "argon2";
import { Resolver, Arg, Ctx, Field, Mutation, ObjectType } from "type-graphql";
import { createRefreshToken, createAccessToken } from "../Auth";
import { User } from "../entities/User";
import { sendRefreshToken } from "../sendRefreshToken";
import { MyContext } from "../MyContext";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class Login {
  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { res }: MyContext
  ) {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw new Error("User does not Exist");
    }
    const valid = await verify(user.password, password);

    if (!valid) {
      throw new Error("Incorrect Password");
    }
    sendRefreshToken(res, createRefreshToken(user));

    return {
      accessToken: createAccessToken(user),
    };
  }
}

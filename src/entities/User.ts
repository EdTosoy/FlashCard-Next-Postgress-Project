import { IsEmail } from "class-validator";
import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { CartList } from "./CartList";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field(() => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @IsEmail()
  @Column({ unique: true, nullable: true })
  email: string;

  @Field()
  @Column({ unique: true, nullable: true })
  username: string;

  @Field()
  @Column({ nullable: true })
  password: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => CartList, (cartList: CartList) => cartList.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  cartList: CartList[];
}

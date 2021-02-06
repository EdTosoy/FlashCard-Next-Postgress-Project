import { IsEmail } from "class-validator";
import { Field, Int, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

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
}

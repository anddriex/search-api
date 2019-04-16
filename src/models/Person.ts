import {Table, Column, Model, HasMany, DataType} from "sequelize-typescript";
import {Hobby} from "./Hobby";
@Table
export class Person extends Model<Person>{
    @Column(DataType.TEXT)
    name?: string;

    @Column(DataType.DATE)
    birthday?: Date;

    @HasMany(() => Hobby)
    hobbies?: Hobby[];
}



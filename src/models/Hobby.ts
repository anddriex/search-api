import {BelongsTo, Column, Model, Table, ForeignKey} from "sequelize-typescript";
import {Person} from "./Person";
import {DataType} from "sequelize-typescript";
@Table
export class Hobby extends Model<Hobby>{
    @Column(DataType.TEXT)
    name?: string;

    @ForeignKey(() => Person)
    @Column
    personId?: number;

    @BelongsTo(() => Person)
    person?: Person;
}
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Professor from "./Professor";

@Entity("discipline")
export default class Discipline {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne( () => Professor, professor => professor.disciplines)
    professor: Professor
}
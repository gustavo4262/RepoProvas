import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Professors from "./Professor";

@Entity("exams")
export default class exams {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column()
    professorId: number;

    @Column()
    disciplineId: number;

    @Column()
    pdf: string;
}
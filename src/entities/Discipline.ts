import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Exam from "./Exam";
import Professor from "./Professor";

@Entity("disciplines")
export default class Discipline {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Exam, exam => exam.discipline)
    exams: Exam[]

    @ManyToMany(() => Professor)
    @JoinTable()
    professors: Professor[];
}
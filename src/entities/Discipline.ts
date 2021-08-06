import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import Exam from "./Exam";
import Professor from "./Professor";

@Entity("disciplines")
@Unique(['name'])
export default class Discipline {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    image: string

    @OneToMany(() => Exam, exam => exam.discipline)
    exams: Exam[]

    @ManyToMany(() => Professor, professor => professor.disciplines)
    professors: Professor[];
}
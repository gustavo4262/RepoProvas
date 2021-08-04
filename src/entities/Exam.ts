import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import Discipline from "./Discipline";
import Professor from "./Professor";

@Entity("exams")
export default class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    category: string;

    @Column()
    pdf: string;
    
    @ManyToOne(() => Professor, professor => professor.exams)
    professor: Professor;
    
    @ManyToOne(() => Discipline, discipline => discipline.exams)
    discipline: Discipline;

}
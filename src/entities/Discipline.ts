import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Exam from "./Exam";
import Professor from "./Professor";

@Entity("disciplines")
export default class Disciplines {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany( () => Exam, exams => exams.discipline)
    exams: Exam[];
    
    @ManyToMany( () => Professor)
    @JoinTable()
    professor: Professor[];
}
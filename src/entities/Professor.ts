import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique, ManyToMany, JoinTable } from "typeorm";
import Discipline from "./Discipline";
import Exam from "./Exam";

@Entity("professors")
@Unique(['name'])
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @OneToMany(() => Exam, exam => exam.professor)
  exams: Exam[];

  @ManyToMany(() => Discipline, discipline => discipline.professors)
  @JoinTable()
  disciplines: Discipline[];
}
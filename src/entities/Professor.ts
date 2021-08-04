import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm";
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
}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import Discipline from "./Disciplines";

@Entity("professor")
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Discipline, discipline => discipline.professor)
  disciplines: Discipline[]
}
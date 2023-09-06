import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { Photo } from "./Photo";
import { User } from "./User";
import { Rent } from "./Rent";

export type Gender = "male" | "female" | "unissex";
export type Material = "alluminum" | "carbon" | "iron";

@Entity({ name: "bikes" })
export class Bike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 30, unique: false })
  color: string;

  @Column({ nullable: false, length: 10 })
  size: string;

  @Column({
    nullable: false,
    type: "enum",
    enum: ["alluminum", "carbon", "iron"],
  })
  material: Material;

  @Column({
    nullable: false,
    type: "enum",
    enum: ["male", "female", "unissex"],
  })
  gender: Gender;

  @Column({ nullable: false, length: 10 })
  speedkit: string;

  @Column({ nullable: false })
  aro: number;

  @Column({ nullable: false })
  suspensao: boolean;

  @Column({ nullable: false })
  hourlyvalue: number;

  @Column({ nullable: false })
  dailyvalue: number;

  @Column({ nullable: false, length: 200 })
  description: string;

  @ManyToOne(() => Brand)
  @JoinColumn({ name: "idbrand" })
  brand: Brand;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "idcategory" })
  category: Category;

  @OneToMany(() => Photo, (photo) => photo.bike)
  photos: Photo[];

  @ManyToOne(() => User)
  @JoinColumn({ name: "iduser" })
  user: User;



  @OneToMany(() => Rent, (rent) => rent.bike)
  rents: Rent[];
}



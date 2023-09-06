import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Bike } from "./Bike";

@Entity({ name: "photos" })
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 100 })
  filename: string;

  @ManyToOne(()=>Bike,(bike)=>bike.photos)
  @JoinColumn({name:"idbike"})
  bike=Bike;
}

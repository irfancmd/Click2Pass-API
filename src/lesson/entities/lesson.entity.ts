import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;

  @Column({ name: 'category_id' })
  categoryId: number;
}

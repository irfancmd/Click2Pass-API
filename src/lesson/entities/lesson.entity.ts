import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  description?: string;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;

  @Column({ name: 'category_id', type: 'int' })
  categoryId: number;
}

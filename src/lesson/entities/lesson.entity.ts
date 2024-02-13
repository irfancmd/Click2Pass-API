import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'lesson' })
export class Lesson {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  description?: string;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;

  // We have to explicitly specify the foreign key column for an EXISTING database.
  // Otherwise, ORM won't know that this column exists.
  @Column({ name: 'category_id', type: 'bigint', unsigned: true })
  categoryId: number;

  // Telling ORM that the category_id column has a foreign key in it
  @ManyToOne(() => Category, (category) => category.lessons, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;
}

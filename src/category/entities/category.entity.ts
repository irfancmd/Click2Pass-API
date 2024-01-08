import { Lesson } from 'src/lesson/entities/lesson.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Category' })
export class Category {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  description?: string;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;

  // Not putting JoinColumn here because this is actually NOT a real column in the database.
  // The ORM will load lessons that belongs to that category if we load a category eagerly.
  @OneToMany(() => Lesson, (lesson) => lesson.category, { cascade: ['remove'] })
  lessons: Lesson[];
}

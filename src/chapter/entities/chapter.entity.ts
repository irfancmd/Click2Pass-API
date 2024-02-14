import { Lesson } from 'src/lesson/entities/lesson.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'chapter' })
export class Chapter {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  description?: string;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;

  // Not putting JoinColumn here because this is actually NOT a real column in the database.
  // The ORM will load lessons that belongs to that category if we load a category eagerly.
  @OneToMany(() => Lesson, (lesson) => lesson.chapter)
  lessons: Lesson[];
}

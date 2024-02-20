import { Chapter } from 'src/chapter/entities/chapter.entity';
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
  id: string;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  description?: string;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;

  // We have to explicitly specify the foreign key column for an EXISTING database.
  // Otherwise, ORM won't know that this column exists.
  @Column({ name: 'chapter_id', type: 'bigint', unsigned: true })
  chapterId: string;

  // Telling ORM that the chapter_id column has a foreign key in it
  @ManyToOne(() => Chapter, (chapter) => chapter.lessons, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'chapter_id', referencedColumnName: 'id' })
  chapter: Chapter;
}

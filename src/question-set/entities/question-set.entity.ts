import { Question } from 'src/question/entities/question.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'question_set' })
export class QuestionSet {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: string;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  description?: string;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;

  @ManyToMany(() => Question)
  @JoinTable({
    name: 'question_set_question',
    joinColumn: {
      name: 'question_set_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'question_id',
      referencedColumnName: 'id',
    },
  })
  questions: Question[];
}

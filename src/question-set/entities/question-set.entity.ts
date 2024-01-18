// import { Question } from 'src/question/entities/question.entity';
import { Question } from 'src/question/entities/question.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  // JoinTable,
  // ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Question_Set' })
export class QuestionSet {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  description?: string;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;

  // @Column({ name: 'temp_question_ids', type: 'varchar', length: 1024 })
  // tempQuestionIds: string;

  @ManyToMany(() => Question)
  @JoinTable({
    name: 'Question_Set_Question',
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

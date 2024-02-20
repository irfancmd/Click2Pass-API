import { Question } from 'src/question/entities/question.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'exam' })
export class Exam {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: string;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q1Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q1Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q1Id', referencedColumnName: 'id' })
  q1: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q2Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q2Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q2Id', referencedColumnName: 'id' })
  q2: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q3Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q3Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q3Id', referencedColumnName: 'id' })
  q3: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q4Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q4Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q4Id', referencedColumnName: 'id' })
  q4: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q5Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q5Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q5Id', referencedColumnName: 'id' })
  q5: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q6Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q6Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q6Id', referencedColumnName: 'id' })
  q6: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q7Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q7Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q7Id', referencedColumnName: 'id' })
  q7: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q8Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q8Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q8Id', referencedColumnName: 'id' })
  q8: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q9Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q9Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q9Id', referencedColumnName: 'id' })
  q9: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q10Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q10Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q10Id', referencedColumnName: 'id' })
  q10: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q11Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q11Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q11Id', referencedColumnName: 'id' })
  q11: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q12Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q12Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q12Id', referencedColumnName: 'id' })
  q12: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q13Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q13Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q13Id', referencedColumnName: 'id' })
  q13: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q14Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q14Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q14Id', referencedColumnName: 'id' })
  q14: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q15Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q15Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q15Id', referencedColumnName: 'id' })
  q15: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q16Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q16Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q16Id', referencedColumnName: 'id' })
  q16: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q17Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q17Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q17Id', referencedColumnName: 'id' })
  q17: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q18Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q18Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q18Id', referencedColumnName: 'id' })
  q18: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q19Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q19Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q19Id', referencedColumnName: 'id' })
  q19: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q20Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q20Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'q20Id', referencedColumnName: 'id' })
  q20: Question;

  @Column({ name: 'question_count', type: 'int' })
  questionCount: number;

  @Column({ name: 'start_time', type: 'datetime', nullable: true })
  startTime?: Date;

  @Column({ name: 'end_time', type: 'datetime', nullable: true })
  endTime?: Date;

  @Column({ name: 'achieved_score', type: 'int', nullable: true })
  achievedScore?: number;

  @Column({ name: 'total_score', type: 'int', nullable: true })
  totalScore?: number;

  @Column({
    name: 'examinee_id',
    type: 'bigint',
    unsigned: true,
    nullable: true,
  })
  examineeId?: string;

  @Column({ name: 'test_completed', type: 'tinyint', nullable: true })
  testCompleted?: boolean;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;
}

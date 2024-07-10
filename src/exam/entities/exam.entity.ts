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

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q1Id', referencedColumnName: 'id' })
  q1: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q2Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q2Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q2Id', referencedColumnName: 'id' })
  q2: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q3Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q3Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q3Id', referencedColumnName: 'id' })
  q3: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q4Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q4Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q4Id', referencedColumnName: 'id' })
  q4: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q5Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q5Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q5Id', referencedColumnName: 'id' })
  q5: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q6Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q6Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q6Id', referencedColumnName: 'id' })
  q6: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q7Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q7Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q7Id', referencedColumnName: 'id' })
  q7: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q8Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q8Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q8Id', referencedColumnName: 'id' })
  q8: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q9Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q9Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q9Id', referencedColumnName: 'id' })
  q9: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q10Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q10Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q10Id', referencedColumnName: 'id' })
  q10: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q11Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q11Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q11Id', referencedColumnName: 'id' })
  q11: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q12Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q12Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q12Id', referencedColumnName: 'id' })
  q12: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q13Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q13Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q13Id', referencedColumnName: 'id' })
  q13: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q14Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q14Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q14Id', referencedColumnName: 'id' })
  q14: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q15Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q15Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q15Id', referencedColumnName: 'id' })
  q15: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q16Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q16Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q16Id', referencedColumnName: 'id' })
  q16: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q17Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q17Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q17Id', referencedColumnName: 'id' })
  q17: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q18Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q18Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q18Id', referencedColumnName: 'id' })
  q18: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q19Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q19Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q19Id', referencedColumnName: 'id' })
  q19: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q20Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q20Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q20Id', referencedColumnName: 'id' })
  q20: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q21Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q21Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q21Id', referencedColumnName: 'id' })
  q21: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q22Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q22Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q22Id', referencedColumnName: 'id' })
  q22: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q23Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q23Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q23Id', referencedColumnName: 'id' })
  q23: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q24Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q24Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q24Id', referencedColumnName: 'id' })
  q24: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q25Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q25Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q25Id', referencedColumnName: 'id' })
  q25: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q26Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q26Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q26Id', referencedColumnName: 'id' })
  q26: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q27Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q27Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q27Id', referencedColumnName: 'id' })
  q27: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q28Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q28Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q28Id', referencedColumnName: 'id' })
  q28: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q29Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q29Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q29Id', referencedColumnName: 'id' })
  q29: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q30Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q30Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q30Id', referencedColumnName: 'id' })
  q30: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q31Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q31Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q31Id', referencedColumnName: 'id' })
  q31: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q32Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q32Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q32Id', referencedColumnName: 'id' })
  q32: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q33Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q33Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q33Id', referencedColumnName: 'id' })
  q33: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q34Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q34Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q34Id', referencedColumnName: 'id' })
  q34: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q35Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q35Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q35Id', referencedColumnName: 'id' })
  q35: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q36Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q36Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q36Id', referencedColumnName: 'id' })
  q36: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q37Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q37Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q37Id', referencedColumnName: 'id' })
  q37: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q38Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q38Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q38Id', referencedColumnName: 'id' })
  q38: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q39Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q39Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q39Id', referencedColumnName: 'id' })
  q39: Question;

  @Column({ type: 'bigint', unsigned: true, nullable: true })
  q40Id?: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  q40Ans?: string;

  @OneToOne(() => Question, { onUpdate: 'CASCADE', onDelete: 'SET NULL' })
  @JoinColumn({ name: 'q40Id', referencedColumnName: 'id' })
  q40: Question;

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

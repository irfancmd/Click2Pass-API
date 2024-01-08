import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Question' })
export class Question {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ name: 'question_text', type: 'varchar', length: 512 })
  questionText: string;

  @Column({
    name: 'question_media_url',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  questionMediaUrl?: string;

  @Column({ name: 'question_media_type', type: 'tinyint', nullable: true })
  questionMediaType?: number;

  @Column({ name: 'num_options_visible', type: 'smallint', nullable: true })
  numberOfOptionsVisible?: number;

  @Column({ name: 'question_type', type: 'tinyint' })
  questionType?: number;

  @Column({ name: 'correct_answer_text', type: 'varchar', length: 256 })
  correctAnswerText: string;

  @Column({ name: 'answer_option_1_text', type: 'varchar', length: 512 })
  answerOption1Text: string;

  @Column({
    name: 'answer_option_1_media_url',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  answerOption1MediaUrl?: string;

  @Column({
    name: 'answer_option_1_media_type',
    type: 'tinyint',
    nullable: true,
  })
  answerOption1MediaType?: number;

  @Column({
    name: 'answer_option_2_text',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  answerOption2Text?: string;

  @Column({
    name: 'answer_option_2_media_url',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  answerOption2MediaUrl?: string;

  @Column({
    name: 'answer_option_2_media_type',
    type: 'tinyint',
    nullable: true,
  })
  answerOption2MediaType?: number;

  @Column({
    name: 'answer_option_3_text',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  answerOption3Text?: string;

  @Column({
    name: 'answer_option_3_media_url',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  answerOption3MediaUrl?: string;

  @Column({
    name: 'answer_option_3_media_type',
    type: 'tinyint',
    nullable: true,
  })
  answerOption3MediaType?: number;

  @Column({
    name: 'answer_option_4_text',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  answerOption4Text?: string;

  @Column({
    name: 'answer_option_4_media_url',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  answerOption4MediaUrl?: string;

  @Column({
    name: 'answer_option_4_media_type',
    type: 'tinyint',
    nullable: true,
  })
  answerOption4MediaType?: number;

  @Column({
    name: 'answer_option_5_text',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  answerOption5Text?: string;

  @Column({
    name: 'answer_option_5_media_url',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  answerOption5MediaUrl?: string;

  @Column({
    name: 'answer_option_5_media_type',
    type: 'tinyint',
    nullable: true,
  })
  answerOption5MediaType?: number;

  @Column({
    name: 'answer_option_6_text',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  answerOption6Text?: string;

  @Column({
    name: 'answer_option_6_media_url',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  answerOption6MediaUrl?: string;

  @Column({
    name: 'answer_option_6_media_type',
    type: 'tinyint',
    nullable: true,
  })
  answerOption6MediaType?: number;

  @Column({ name: 'category_id', type: 'int' })
  categoryId: number;

  @Column({ name: 'category_name', type: 'varchar', length: 64 })
  categoryName: string;

  @Column({ name: 'lesson_id', type: 'int' })
  lessonId: number;

  @Column({ name: 'lesson_name', type: 'varchar', length: 64 })
  lessonName: string;

  @Column({ name: 'subject_id', type: 'int', nullable: true })
  subjectId?: number;

  @Column({ name: 'subject_name', type: 'varchar', length: 64, nullable: true })
  subjectName?: string;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;
}

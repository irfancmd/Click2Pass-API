import { Chapter } from 'src/chapter/entities/chapter.entity';
import { Curriculum } from 'src/curriculum/entities/curriculum.entity';
import { Lesson } from 'src/lesson/entities/lesson.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'question' })
export class Question {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: string;

  @Column({ name: 'question_text', type: 'varchar', length: 512 })
  questionText: string;

  @Column({
    name: 'question_media_url',
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  questionMediaUrl?: string;

  @Column({ name: 'question_media_type', type: 'tinyint' })
  questionMediaType?: number;

  @Column({ name: 'num_options_visible', type: 'tinyint' })
  numberOfOptionsVisible?: number;

  @Column({ name: 'question_type', type: 'tinyint' })
  questionType?: number;

  @Column({
    name: 'correct_answer_text',
    type: 'varchar',
    length: 256,
  })
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

  @Column({
    name: 'chapter_id',
    type: 'bigint',
    unsigned: true,
    nullable: true,
  })
  chapterId?: string;

  @OneToOne(() => Chapter, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'chapter_id', referencedColumnName: 'id' })
  chapter: Chapter;

  @Column({ name: 'lesson_id', type: 'bigint', unsigned: true, nullable: true })
  lessonId?: string;

  @OneToOne(() => Lesson, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'lesson_id', referencedColumnName: 'id' })
  lesson: Lesson;

  @Column({
    name: 'curriculum_id',
    type: 'bigint',
    unsigned: true,
    nullable: true,
  })
  curriculumId?: string;

  @OneToOne(() => Curriculum, {
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'curriculum_id', referencedColumnName: 'id' })
  curriculum: Curriculum;

  @Column({ name: 'creation_time', type: 'timestamp' })
  creationTime: Date;
}

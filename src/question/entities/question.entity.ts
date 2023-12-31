import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  questionText: string;
  questionMediaUrl: string;
  questionMediaType: number;
  numberOfOptionsVisible: number;
  questionType: number;
  correctAnswerText: string;
  answerOption1Text: string;
  answerOption1MediaUrl: string;
  answerOption1MediaType: number;
  answerOption2Text: string;
  answerOption2MediaUrl: string;
  answerOption2MediaType: number;
  answerOption3Text: string;
  answerOption3MediaUrl: string;
  answerOption3MediaType: number;
  answerOption4Text: string;
  answerOption4MediaUrl: string;
  answerOption4MediaType: number;
  answerOption5Text: string;
  answerOption5MediaUrl: string;
  answerOption5MediaType: number;
  answerOption6Text: string;
  answerOption6MediaUrl: string;
  answerOption6MediaType: number;
}

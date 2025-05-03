import { User } from '../../user/entities/user.entity';
import { Question } from '../../question/entities/question.entity';

export class Answer {
    id: number;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    questionId: number;
    user: User;
    question: Question;
}

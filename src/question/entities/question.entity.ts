import { User } from '../../user/entities/user.entity';
import { Answer } from '../../answer/entities/answer.entity';

export class Question {
    id: number;
    title: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    user: User;
    answers: Answer;

}

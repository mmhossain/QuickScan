import { IOption } from './option';

export interface IQuestion {
    GenreId: string;
    QuestionId: string;
    Level: string;
    Type: string;
    CategoryId: string;
    Title: string;
    Options: IOption[];
}
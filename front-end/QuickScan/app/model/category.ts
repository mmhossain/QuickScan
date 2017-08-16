import { IGenre } from './genre';

export interface ICategory {
    CategoryId: string;
    Title: string;
    Priority: number;
    Genre: IGenre;
}
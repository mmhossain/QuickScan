import { IGenre } from './genre';
import { ICategory } from './category';

export interface IGenreAndCategory {
    Genre: IGenre;
    Categories: ICategory[];
}
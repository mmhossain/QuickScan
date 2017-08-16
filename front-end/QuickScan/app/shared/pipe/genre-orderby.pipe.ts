import { Pipe, PipeTransform } from "@angular/core";

import { IGenreAndCategory } from '../../model/genre-and-category';

@Pipe({
  name: "genreOrderByPriority"
})
export class GenreSortPipe implements PipeTransform {
  transform(values: IGenreAndCategory[]): IGenreAndCategory[] {
    values.sort((a: IGenreAndCategory, b: IGenreAndCategory) => {
      if (a.Genre.Priority < b.Genre.Priority) {
        return -1;
      } else if (a.Genre.Priority > b.Genre.Priority) {
        return 1;
      } else {
        return 0;
      }
    });

    return values;
  }
}
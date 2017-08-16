import { Pipe, PipeTransform } from "@angular/core";

import { ICategory } from '../../model/category';

@Pipe({
  name: "categoryOrderByPriority"
})
export class CategorySortPipe implements PipeTransform {
  transform(values: ICategory[]): ICategory[] {
    values.sort((a: ICategory, b: ICategory) => {
      if (a.Priority < b.Priority) {
        return -1;
      } else if (a.Priority > b.Priority) {
        return 1;
      } else {
        return 0;
      }
    });

    return values;
  }
}
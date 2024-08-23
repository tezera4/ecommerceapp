import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  private categoryService = inject(CategoryService);
  ngOnInit(): void {
    this.getAllCategory();
  }
  categoryList: any = {
    message: '',
    result: false,
    data: [
      {
        categoryId: 0,
        categoryName: '',
        parentCategoryId: 0,
        userId: null,
      },
    ],
  };

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res: any) => {
      if (res.result) {
        this.categoryList = res;
      }
    });
  }
}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryFormData } from './CategoryFormData';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit, OnChanges {

  categories: Category[] = [];
  categoryFormData: CategoryFormData=new CategoryFormData("", "", "");
  savedCategory: Category = {
    categoryId: '',
    categoryName: '',
    parentId: '',
    displayImage: '',
    isParent: false,
    isChild: false
  };

  @Input() editCategoryData = "";

  constructor(private categoryService:CategoryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.editCategoryData = changes['editCategoryData'].currentValue;
    this.editCategory();
  }

  ngOnInit(): void {
    this.categoryService.getCategoryDropdown().subscribe(
      res => {
        console.log(res);
        this.categories=res
      }
    )

    this.editCategory();
  }

  selectParent(value: any){
    this.categoryFormData.parentCategory = value;
  }

  confirmationMessage: string="Data saved successfully.";
  submitForm(form: any) : void {
    if (form.valid) {
      this.savedCategory.categoryId=this.categoryFormData.id;
      this.savedCategory.categoryName=this.categoryFormData.name;
      this.savedCategory.parentId = this.categoryFormData.parentCategory;

      console.log('Form data:', this.savedCategory);
      this.categoryService.saveCategoryForm(this.savedCategory).subscribe(
        res => this.confirmationMessage=res
      );
      alert(this.confirmationMessage)
      window.location.reload()
      this.categoryFormData = new CategoryFormData("", "", "");
    }
  }

  editCategory() {
    if(this.editCategoryData!="") {
      this.categoryService.getCategory(this.editCategoryData).subscribe(
        res => {
          console.log(res);
          this.categoryFormData.id=res[0].categoryId;
          this.categoryFormData.name=res[0].categoryName;
          this.categoryFormData.parentCategory=res[0].parentId;
        }
      );
      
    }
  }

}

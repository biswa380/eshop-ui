import { Component, Input, OnInit, Output } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import { Category } from 'src/app/interface/category';
import { CategoryTree } from 'src/app/interface/category-tree';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: CategoryTree[] = [];
  categoryTreeStr:any[] = [];
  hideediticon = true;
  enableedit = false;
  categoryToEdit = "";
  constructor(private categoryService:CategoryService) { 
    
  }


  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      res => {
        console.log(res);
        this.categories=res
      }
    )
  }

  editEnable(){
    this.enableedit=true;
    this.hideediticon = false;
  }

  editCategory(categoryId:string){
    this.categoryToEdit = categoryId;
  }

  confirmationMessage: string="Category deleted successfully.";
  deleteCategory(categoryId:string) {
    this.categoryService.deleteCategory(categoryId).subscribe(
      res => {
        console.log(res);
        this.confirmationMessage=res;
      }
    )
    alert(this.confirmationMessage)
    window.location.reload()
  }
}

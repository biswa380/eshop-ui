import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';

@Component({
  selector: 'app-dynamic-tree',
  templateUrl: './dynamic-tree.component.html',
  styleUrls: ['./dynamic-tree.component.css']
})
export class DynamicTreeComponent implements OnInit {

  @Input() childCategories: Category[] = [];
 
  parentCategories: Category[] = [];
  constructor() { }
  dynamicDisplay:boolean = false;
  ngOnInit(): void {
    this.childCategories.forEach(c => {
      if(c.parentId==null){
        this.parentCategories.push(c);
      }
    })
  }

  childList:Category[] =[];
  getChildForParent(parentId:string) {
    this.childList = [];
    this.childCategories.forEach(c => {
      if(c.parentId===parentId){
        this.childList.push(c);
      }
    })
    console.log(this.childList);
  }

}

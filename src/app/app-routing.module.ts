import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CategoryComponent } from './component/category/category.component';
import { CategoryFormComponent } from './component/category-form/category-form.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "category", component : CategoryComponent},
  {path : "add_category", component : CategoryFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

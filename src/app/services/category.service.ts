import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interface/category';
import { CategoryFormData } from '../component/category-form/CategoryFormData';

const BASE_URL = ["http://localhost:8090/category"]
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  getCategories() : Observable<any>{
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': '*'
    })
    return this.http.get(BASE_URL+"/categoryTree", {headers: headers});
  }

  getCategoryDropdown() : Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': '*'
    })
    return this.http.get(BASE_URL+"/categories/all", {headers: headers});
  }

  getCategory(categoryId:string) : Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': '*'
    })
    return this.http.get(BASE_URL+"/categories/"+categoryId, {headers: headers});
  }

  saveCategoryForm(categoryForm: Category) : Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': '*'
    })
    return this.http.post(BASE_URL+"/saveCategory", categoryForm, {headers: headers});
  }

  deleteCategory(categoryId: string) : Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': '*'
    })
    return this.http.post(BASE_URL+"/delete/"+categoryId, {headers: headers});
  }
}

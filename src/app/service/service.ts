import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'

})

export class fatchServices {

    constructor(
        private _http: HttpClient
    ){}

    getProduct(limit: number){
        return this._http.get('https://fakestoreapi.com/products?limit=' + limit);
    }
    deleteProduct(data: number){
        return this._http.delete('https://fakestoreapi.com/products/' + data);
    }
    getCategories(){
        return this._http.get('https://fakestoreapi.com/products/categories');
    }
    addProduct(data: any){
        return this._http.post('https://fakestoreapi.com/products', data);
    }
}

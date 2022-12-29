import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fatchServices } from '../service/service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['../app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddProductComponent implements OnInit {

  categories: any;
  addProduct!: FormGroup;
  title: FormControl | undefined;
  price: FormControl | undefined;
  description: FormControl | undefined;
  image: FormControl | undefined;
  category: FormControl | undefined;

  showCategory = false;

  constructor(
    private _fatchApiServices : fatchServices,
    private formBuilder: FormBuilder,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getCategories();

    this.title = new FormControl('', [Validators.required]);
    this.price = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.image = new FormControl('', [Validators.required]);
    this.category = new FormControl('', [Validators.required]);

    this.addProduct = this.formBuilder.group({
      title : this.title,
      price : this.price,
      description : this.description,
      image : this.image,
      category : this.category
  });
  }

  async getCategories(){
    await this._fatchApiServices.getCategories().subscribe((res) => {
      this.categories = res;
      console.log('res get', res);

    });
  }

  async saveData(){
    let data = {
      title : this.addProduct?.get('title')?.value,
      price : this.addProduct?.get('price')?.value,
      description : this.addProduct?.get('description')?.value,
      image : this.addProduct?.get('image')?.value,
      category : this.addProduct?.get('category')?.value,
    }

    console.log('saveData', data);
    setTimeout(async () => {
      console.log('saveDepartment data: ', data);
      await this._fatchApiServices.addProduct(data).subscribe(
        (res) => {
          console.log('res');
          if(res){
            this.router.navigateByUrl('');
            alert('add product success');
          }
        }, (error) => {
          console.log('error', error);
        }
      );
    }, 100);

  }

  cancel(){
    this.router.navigateByUrl('');
  }

  openCategory(){
    this.showCategory = true;
  }

  selectedCategory(data: string){
    this.showCategory = false;
    this.addProduct?.get('category')?.setValue(data);
  }

}

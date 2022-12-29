import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fatchServices } from '../service/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  product: any;
  throttle = 300;
  direction = "";
  scrollDistance = 1;
  scrollUpDistance = 2;
  notscrolly = true;


  limit = 10;

  constructor(
    private _fatchApiServices : fatchServices,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  async getProduct(){
    await this._fatchApiServices.getProduct(this.limit).subscribe((res) => {
      this.product = res;
      this.notscrolly = true;
      console.log('res get', res);

    });
  }

  // deleteProduct(id: number){
  //   this._fatchApiServices.deleteProduct(id).subscribe(res => this.product);
  // }


  // fungsi ini berlaku karena api delete product dari fake api tidak benar benar
  // mendelete product dari data base, return dari api tersebut adalah data yang di delete bukan data product yang tersisa
  // maka untuk fitur delete solusi yang bisa saya berikan adalah filter array
  deleteProduct(id: number){
    this.product = this.product.filter((res: { id: number; }) => res.id !== id);
    alert('delete product sucess')
  }

  addProduct(){
    this.router.navigateByUrl('add-product');
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos == max )   {
      this.limit += this.limit
      this.getProduct();
    }
  }

}

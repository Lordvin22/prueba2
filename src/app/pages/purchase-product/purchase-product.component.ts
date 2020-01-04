import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'; 
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-purchase-product',
  templateUrl: './purchase-product.component.html',
  styleUrls: ['./purchase-product.component.css']
})
export class PurchaseProductComponent implements OnInit {


  product: any = {
    name: '',
    description: '',
    stock: '',
    price:'',
    quantity: ''

  }

  public row = [];

  constructor(private api: ApiService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.product.id = this.router.snapshot.params.id;
    this.loadProduct();
  }

  loadProduct(){
    this.product['url'] = "get_product.php";
    this.api.get(this.product).subscribe( data =>{
      console.log(data);
      if(data.message_type == 'success'){
        this.product = data.data[0];
        console.log(this.product);
      } 
      
    });
  }

  purchaseProduct(){
    this.product['url'] = "purchase_product.php";
    this.api.get(this.product).subscribe( data =>{
      console.log(data);
      if(data.message_type == 'success'){
      
      }
    });
  }

}

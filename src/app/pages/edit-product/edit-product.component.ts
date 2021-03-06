import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../../service/api.service'; 

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public product = {
    id: '',
    name: '',
    description: '',
    stock: '',
    price: ''
  }

  alert: string = '';
  constructor( private api: ApiService ,private router: ActivatedRoute) { }

  ngOnInit() {
    
    this.product.id = this.router.snapshot.params.id;
    console.log(this.product);
    this.editProduct();
  }

  editProduct(){
    this.product['url'] = "get_product.php";
    this.api.get(this.product).subscribe( data =>{
      console.log(data);
      if(data.message_type == 'success'){
        this.product = data.data[0];
        console.log(this.product);
      } 
    });
  }

  updateProduct(){
    this.product['url'] = "update_product.php";
    this.api.get(this.product).subscribe( data =>{
      if(data.message_type == 'success'){
       this.alert = this.alert + '<div class="alert alert-success alert-dismissible fade show" role="alert">product edited succesfully <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>';
      }
    });
  }

}

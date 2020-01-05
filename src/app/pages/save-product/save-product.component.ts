import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'; 
@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.css']
})
export class SaveProductComponent implements OnInit {

  product: any = {
    id: '',
    name: '',
    description: '',
    stock: '',
    price:'',
  }



   public row = [];

  constructor(private api: ApiService ){

  }

  ngOnInit(){
    this.getList();   
  }
  

getList(){
  this.product['url'] = "get_list.php";
  this.api.get(this.product).subscribe( data =>{
    if(data.message_type == 'success'){
      this.row = data.data;
      // console.log(this.row);
    }

    
  });
}
  saveProduct(){
    this.product['url'] = "save_product.php";
    this.api.get(this.product).subscribe( data =>{
      if(data.message_type == 'success'){
       this.row.push(data.data);
       this.product.name = '';
       this.product.description = '';
       this.product.stock = '';
       this.product.price = '';
      }
    });
  }

  deleteProduct(id: any, index ){
    this.api.get({id:id,url:"delete_product.php"}).subscribe( data =>{
      if(data.message_type == 'success'){
       this.getList();
      }
    });
  }

  sortByName() {
     this.row.sort((a,b) => a.name.localeCompare(b.name));
    }

    sortById() {
      this.getList();
      this.row.sort((a,b) => a.id - b.id);
     }

     onSubmited(){
       this.saveProduct();
     }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'; 
@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.css']
})
export class SaveProductComponent implements OnInit {

  product: any = {
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

    sortBy() {
      this.product['url'] = "get_list.php";
    this.api.get(this.product).subscribe( data =>{
      if(data.message_type == 'success'){
       this.row.push(data.data);
       this.row.sort((a,b) => a.product.name.localeCompare(b.product.name));
       console.log(this.row);
      }
    });
     
    }
  

}

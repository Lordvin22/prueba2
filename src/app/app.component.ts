import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba';

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
    this.product['url'] = "get_list.php";
    this.api.get(this.product).subscribe( data =>{
      if(data.message_type == 'success'){
        this.row = data.data;
        console.log(this.row);
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
  
}

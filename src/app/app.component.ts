import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

  product: any = {
    name: '',
    description: '',
    stock: '',
    price:'',
  }

  constructor(private api: ApiService ){

  }
  saveProduct(){
    this.product['url'] = "save_product.php";
    this.api.get(this.product)
    .then( data =>{
      console.log(data);
    });
  }
}

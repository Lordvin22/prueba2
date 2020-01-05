import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {
  product: any = {
    // id: '',
    product_id: '',
    name: '',
    price: '',
    date: '',
    quantity: ''
  }
  public row = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getPurchaseList();
  }

  getPurchaseList(){
    this.product['url'] = "get_list_purchase.php";
  this.api.get(this.product).subscribe( data =>{
    if(data.message_type == 'success'){
      this.row = data.data;
      // console.log(this.row);
    }

    
  });
  }

}

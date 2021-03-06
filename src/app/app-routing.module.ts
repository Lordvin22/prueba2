import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { SaveProductComponent } from './pages/save-product/save-product.component';
import { PurchaseProductComponent } from './pages/purchase-product/purchase-product.component';
import { PurchaseListComponent } from './pages/purchase-list/purchase-list.component';


const routes: Routes = [
  { path: '',  component: SaveProductComponent},
  { path: 'save-product',  component: SaveProductComponent},
  { path: 'edit-product/:id',  component: EditProductComponent },
  { path: 'purchase-product/:id', component: PurchaseProductComponent },
  { path: 'purchase-list', component: PurchaseListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SaveProductComponent } from './pages/save-product/save-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { PurchaseProductComponent } from './pages/purchase-product/purchase-product.component';
import { PurchaseListComponent } from './pages/purchase-list/purchase-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveProductComponent,
    EditProductComponent,
    PurchaseProductComponent,
    PurchaseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersService } from './shared/orders.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Route } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ModalUpdateOrderComponent } from './modal-update-order/modal-update-order.component';
import {MatDialogModule} from '@angular/material/dialog';


const appRoutes: Route[] = [{ 
  path: 'orders', 
  component: OrdersComponent 
}, { 
  path: 'order-list', 
  component: OrderListComponent 
}, {
  path: '', 
  component: OrdersComponent
}]

var firebaseConfig = {
  apiKey: "AIzaSyCJT8Q8Tin4tG3wzeC2Qpgr6XOj3lK_F9s",
  authDomain: "cafeteria-fn.firebaseapp.com",
  projectId: "cafeteria-fn",
  storageBucket: "cafeteria-fn.appspot.com",
  messagingSenderId: "859653587514",
  appId: "1:859653587514:web:e517012db42dcdc78bab03"
};

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderListComponent,
    ModalUpdateOrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent],
  entryComponents: [ModalUpdateOrderComponent]
})
export class AppModule { }

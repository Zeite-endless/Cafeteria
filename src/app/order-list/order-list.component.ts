import { ModalUpdateOrderComponent } from './../modal-update-order/modal-update-order.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  coffeeOrder: any;

  constructor(private dbService: OrdersService, private snack: MatSnackBar, private modal: MatDialog) { }

  ngOnInit(): void {
    this.dbService.getData().subscribe(data =>{
      this.coffeeOrder = data.map(item =>{
        return{
          ...item.payload.doc.data() as any,
          id: item.payload.doc.id
        }
     })
     this.orderArray();
   })
  }

  orderArray(){
    this.coffeeOrder = this.coffeeOrder.sort((a: any, b: any) =>{
      if(a.timestamp && b.timestamp){
        return b.timestamp - a.timestamp
      } else{
        return -1
      }
    })
  }

  deleteItem(param: any){
    if(window.confirm('Deseja realmente excluir este item?')){
      this.dbService.deleteData(param);
      this.snack.open('Item Excluido!', 'Fechar', {duration:5000, horizontalPosition: 'center', verticalPosition: 'top', panelClass: 'warn'})
    }
   
  }

  updateItem(param: any){
    console.log(param)
    this.modal.open(ModalUpdateOrderComponent, {
      width: '90%',
      data: param
    })
  }
}

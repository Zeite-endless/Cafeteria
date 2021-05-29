import { MatSnackBar } from '@angular/material/snack-bar';
import { OrdersService } from './../shared/orders.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-update-order',
  templateUrl: './modal-update-order.component.html',
  styleUrls: ['./modal-update-order.component.scss']
})
export class ModalUpdateOrderComponent implements OnInit {

  formCoffee: any;
  coffees = ['Americano', 'Pingado', 'Capuccino', 'Latte', 'Expresso', 'Machiato', 'Chocolate Quente', 'Chá']
  id: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private orderService: OrdersService, private dialogRef: MatDialogRef<ModalUpdateOrderComponent>, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.formCoffee = new FormGroup({
      customerName: new FormControl(this.data.customerName, Validators.required),
      customerOrder: new FormControl(this.data.customerOrder, Validators.required),
      quantidade: new FormControl(this.data.quantidade, Validators.required),
      tamanho: new FormControl(this.data.tamanho, Validators.required)
    });

    this.id = this.data.id
  }

  salvarPedidos(data: any){
    this.orderService.updateData(this.id, data.value);
    this.snack.open('Pedido Atualizado', 'Fechar', {duration: 5000, verticalPosition: 'top', horizontalPosition: 'center'})
    this.dialogRef.close();
  }

}

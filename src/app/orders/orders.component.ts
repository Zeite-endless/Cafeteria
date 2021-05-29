import { Component, OnInit } from '@angular/core';
import {OrdersService } from '../shared/orders.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  coffees = ['Americano', 'Pingado', 'Capuccino', 'Latte', 'Expresso', 'Machiato', 'Chocolate Quente', 'Chá']
  coffeeOrder: any;

  formCoffee = new FormGroup({
    customerName: new FormControl('', Validators.required),
    customerOrder: new FormControl('', Validators.required),
    quantidade: new FormControl('', Validators.required),
    tamanho: new FormControl('', Validators.required)
  })

  constructor(private _os: OrdersService, private dbService: OrdersService, private snack: MatSnackBar) { }

  ngOnInit() {
    
  }

  salvarPedidos(param: any){
    this.dbService.saveData(param.value)
    this.snack.open('Pedido Registrado!', 'Fechar', {duration:5000, horizontalPosition: 'center', verticalPosition: 'top'})
  }
}

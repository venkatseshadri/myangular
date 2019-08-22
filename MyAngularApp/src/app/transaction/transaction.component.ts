import { Component } from '@angular/core';

@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html'
})
export class myTransaction {
   title: string = "Transaction Details";
   heading: string = "Personal Finance";
   details:string = "Details";
}
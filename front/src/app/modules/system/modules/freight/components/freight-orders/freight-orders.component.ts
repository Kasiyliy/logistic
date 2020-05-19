import {Component, Input, OnInit} from '@angular/core';
import {RealFreightOrder} from "../../../../../../core/models/entities/real-freight-order";

@Component({
    selector: 'app-freight-orders',
    templateUrl: './freight-orders.component.html',
    styleUrls: ['./freight-orders.component.css']
})
export class FreightOrdersComponent implements OnInit {

    @Input()
    freightOrders: RealFreightOrder[];

    constructor() {
    }

    ngOnInit(): void {
    }

}

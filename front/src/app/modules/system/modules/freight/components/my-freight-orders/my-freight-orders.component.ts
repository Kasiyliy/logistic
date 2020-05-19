import {Component, OnInit} from '@angular/core';
import {RealFreightOrder} from "../../../../../../core/models/entities/real-freight-order";
import {FreightOrderService} from "../../../../../../core/services/freight-order.service";

@Component({
    selector: 'app-my-freight-orders',
    templateUrl: './my-freight-orders.component.html',
    styleUrls: ['./my-freight-orders.component.css']
})
export class MyFreightOrdersComponent implements OnInit {

    freightOrders: RealFreightOrder[];

    constructor(private freightOrderService: FreightOrderService) {
    }

    ngOnInit(): void {
        this.freightOrderService.getMyFreightOrders().subscribe(perf => {
            this.freightOrders = perf;
        })
    }
}

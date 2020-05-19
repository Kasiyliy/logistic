import {Component, OnInit} from '@angular/core';
import {FreightOrderService} from "../../../../../../core/services/freight-order.service";
import {RealFreightOrder} from "../../../../../../core/models/entities/real-freight-order";

@Component({
    selector: 'app-list-freight',
    templateUrl: './list-freight.component.html',
    styleUrls: ['./list-freight.component.css']
})
export class ListFreightComponent implements OnInit {

    freightOrders: RealFreightOrder[];

    constructor(private freightOrderService: FreightOrderService) {
    }

    ngOnInit(): void {
        this.freightOrderService.getAllFreightOrders().subscribe(perf => {
            this.freightOrders = perf;
        })
    }

}

import {Component, OnInit} from '@angular/core';
import {RealFreightOrder} from "../../../../../../core/models/entities/real-freight-order";
import {FreightOrderService} from "../../../../../../core/services/freight-order.service";
import {ActivatedRoute} from "@angular/router";
import {mergeMap} from "rxjs/operators";

@Component({
    selector: 'app-user-freight-orders',
    templateUrl: './user-freight-orders.component.html',
    styleUrls: ['./user-freight-orders.component.css']
})
export class UserFreightOrdersComponent implements OnInit {

    freightOrders: RealFreightOrder[];

    constructor(private freightOrderService: FreightOrderService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.pipe(
            mergeMap(perf => {
                return this.freightOrderService.getAllByUserFreightOrders(perf.id);
            })
        ).subscribe(perf => {
            this.freightOrders = perf;
        })

    }

}

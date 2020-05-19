import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../../../core/services/auth.service";

@Component({
    selector: 'app-freight-nav',
    templateUrl: './freight-nav.component.html',
    styleUrls: ['./freight-nav.component.css']
})
export class FreightNavComponent implements OnInit {


    constructor(public authService: AuthService) {
    }

    ngOnInit(): void {
    }

}

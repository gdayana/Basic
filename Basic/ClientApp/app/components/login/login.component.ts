import { Component, OnInit } from '@angular/core';
import { User } from '../shared/src/app/user.model';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    user: User;


    constructor() { }

    ngOnInit() {

    }
}
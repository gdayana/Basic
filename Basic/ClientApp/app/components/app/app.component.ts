import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Http } from '@angular/http'

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private _httpService: Http) { }
    apiValues: string[] = [];
    ngOnInit() {
        this._httpService.get('/api/values').subscribe(values => {
            this.apiValues = values.json() as string[];
        });
    }
}

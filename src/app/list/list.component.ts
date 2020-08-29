import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared-service.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public loading: boolean;

  @Input() itemList;

  constructor(private _sharedService: SharedService) { }

  public ngOnInit(){
    this._sharedService.getItems()
    .pipe(
      catchError(err => {
        console.log(err)
        return empty();
      })
    )
    .subscribe(response => this.itemList = response);
  }

  public removeItem(id) {
    this.loading = true;
    this._sharedService.removeItem(id)
    .pipe(
      catchError(err => {
        console.log(err)
        return empty();
      })
    )
    .subscribe(response => {
      this.loading = false;
      this.itemList = response
    });
  }

}

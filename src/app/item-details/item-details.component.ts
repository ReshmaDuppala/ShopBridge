import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, catchError } from 'rxjs/operators';
import { SharedService } from '../shared-service.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  public itemDetail;

  constructor(private _route: ActivatedRoute, private _sharedService: SharedService) { }

  ngOnInit() {
    this._route.params
    .pipe(
      switchMap(params => this._sharedService.getItem(params['id'])),
      catchError(err => {
        console.log(err);
        return empty();
      })
    )
    .subscribe(response => {
      this.itemDetail = response;
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _httpClient: HttpClient) { }

  public addItem(params) {
    return this._httpClient.post('https://5f4545593fb92f0016754835.mockapi.io/api/v1/item', params)
    .pipe(
      switchMap(() => this._httpClient.get('https://5f4545593fb92f0016754835.mockapi.io/api/v1/item'))
    )
  }

  public removeItem(id) {
    return this._httpClient.delete(`https://5f4545593fb92f0016754835.mockapi.io/api/v1/item/${id}`)
    .pipe(
      switchMap(() => this._httpClient.get('https://5f4545593fb92f0016754835.mockapi.io/api/v1/item'))
    )
  }

  public getItems() {
    return this._httpClient.get('https://5f4545593fb92f0016754835.mockapi.io/api/v1/item');
  }

  public getItem(id) {
    return this._httpClient.get(`https://5f4545593fb92f0016754835.mockapi.io/api/v1/item/${id}`);
  }
}

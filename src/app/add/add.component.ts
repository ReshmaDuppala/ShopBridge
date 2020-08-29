import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../shared-service.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  public loading: boolean;

  @Output() returnItems = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private _sharedService: SharedService) { }

  public addItemForm = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
  });

  onSubmit(){
    this.loading = true;
    this._sharedService.addItem(this.addItemForm.value)
    .pipe(
      catchError(err => {
        this.loading = false;
        console.log(err)
        return empty();
      })
    )
    .subscribe(response => {
      this.loading = false;
      this.addItemForm.reset();
      this.returnItems.emit(response);
    })
  }

}

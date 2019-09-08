import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = new Subject<boolean>();

  constructor() {
    this.isLoading.next(false);
  }

  show() {
      this.isLoading.next(true);
  }

  hide() {
      this.isLoading.next(false);
  }

}

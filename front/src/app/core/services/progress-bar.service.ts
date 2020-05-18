import {ElementRef, Injectable, ViewChild} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  constructor() {
  }

  public showProgress() {
    document.getElementById('progressBar').style.display = 'block';
  }

  public hideProgress() {
    document.getElementById('progressBar').style.display = 'none';
  }
}

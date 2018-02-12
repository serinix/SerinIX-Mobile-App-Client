import {Component, Input} from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  @Input() public active: boolean;

  constructor() {
    this.active = false;
  }

}

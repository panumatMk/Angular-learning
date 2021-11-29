import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less']
})
export class BasicComponent implements OnInit {

  someText = 'Hello Yo!.';

  showToolTip!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

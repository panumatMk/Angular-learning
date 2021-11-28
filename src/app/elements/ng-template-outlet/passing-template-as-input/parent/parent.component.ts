import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() templateRef!: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}

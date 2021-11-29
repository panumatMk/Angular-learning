import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  books = [{
    data1: 'data1',
    data2: 'data2',
    data3: 'rgba(170,229,213,1)',
  },{
    data1: 'data1',
    data2: 'data2',
    data3: 'rgba(170,229,213,0.7)',
  },{
    data1: 'data1',
    data2: 'data2',
    data3: 'rgba(170,229,213,0.5)',
  },{
    data1: 'data1',
    data2: 'data2',
    data3: 'rgba(170,229,213,0.3)',
  }]

  constructor() { }

  ngOnInit(): void {
  }

}

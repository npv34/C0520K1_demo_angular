import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Output() keyword = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  getValue(event) {
    let value = event.target.value;
    this.keyword.emit(value);
  }

}

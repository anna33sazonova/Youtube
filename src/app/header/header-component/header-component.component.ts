import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  @Output() getSearchedDataFromChild: EventEmitter<string> = new EventEmitter();

public  searchKeyword: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  searchedKeywordSendToParent(): void {
    this.getSearchedDataFromChild.emit(this.searchKeyword);
  }
}

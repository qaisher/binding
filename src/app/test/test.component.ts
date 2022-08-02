import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Qaisher';
  public siteUrl = window.location.href;
  public myId = 'testId';
  public isDisabled = true;
  public successClass = 'text-success';
  public dangerClass = 'text-danger';
  public hasError = true;
  public isSpecial = true;

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }

  public messageStyles = {
    color : "blue",
    fontStyle : "italic"

  }

  public greet(){
    return 'Hello ' + this.name + '. You are at ' + this.siteUrl;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

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

  public greetings = "";
  public message = "";
  

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

  onClick(event:object) {
    console.log('Welcome to Localhost.');
    this.greetings = "Welcome User.";
    console.log(event);
   
  }

  logMessage() {
    this.message = "This message has been logged as a result of the button click.";
  }

  showEmail(value: any) {
    console.log(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

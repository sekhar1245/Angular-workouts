import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div> 
           interpolation example,
                </div>
                <h1>  {{"Hello  "+name.toUpperCase()+" How are you "}}</h1>
                <h3>{{sayHello()}}</h3>
                `,
  styles: [`
      div 
      { 
        color:red
      } 
      h1{
        color:green
      }
      `]
})
export class TestComponent implements OnInit {

  public name="Sekhar";

  constructor() { }

  ngOnInit(): void {
  }
4
sayHello(){
  return "Hey ..."+this.name;
}
}

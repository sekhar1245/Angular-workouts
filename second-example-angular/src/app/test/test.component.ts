import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<div> 
          Inline template using back ticks
                </div>
                <h1>Test component </h1>`,
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

  constructor() { }

  ngOnInit(): void {
  }

}

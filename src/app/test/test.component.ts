import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <div>
              <p>
                Hello, my dude
              </p>

              <p> 
                Welcome to {{name}}
              </p>

              <h1>Here's what interpolation can do</h1>
              <h3>Expression</h3>

              <p>{{2 + 2}}</p>

              <h3>String Concatenation</h3>
              <p>{{"Welcome" + name}}</p>
            </div>
            <div>

            </div>`,
  styles: [``]
})
export class TestComponent implements OnInit {

  public name:string = "The Stank Dank Hole";
  constructor() { }

  ngOnInit(): void {
  }

}

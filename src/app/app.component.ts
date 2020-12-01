import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  print:number;
  printPrev:number;

  printCircle(id:number){
    this.printPrev = this.print;
    this.print = id;
  }
}

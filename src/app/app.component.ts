import { Component } from '@angular/core';

// constant
const FACT = 2.54;
declare let toDecimal : any;
declare let toFraction : any;
declare let Logger : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  // properties
  inch: string = '';
  cm: number = 0;
  inchDecimal: number = 0;
  fractionUsed: boolean = false;
  
  //constructor
  constructor()
  {
    Logger.init(); // Initializing logger
    Logger.enable(); // Enable logging

    //test toDecimal()
    Logger.print("===== toDecimal() =====");
    Logger.print("1 -> " + toDecimal("1"));
    Logger.print("1.2 -> " + toDecimal("1.2"));
    Logger.print("1/2 -> " + toDecimal("1/2"));
    Logger.print("1/16 -> " + toDecimal("1/16"));
    Logger.print("3/2 -> " + toDecimal("3/2"));
    Logger.print("1 2/3 -> " + toDecimal("1 2/3"));
    Logger.print("\n");
    
    //test toFraction()
    Logger.print("===== toFraction() =====");
    Logger.print("1 -> " + toFraction("1"));
    Logger.print("0.1 -> " + toFraction("0.1"));
    Logger.print("1.2 -> " + toFraction("1.2"));
    Logger.print("1.5 -> " + toFraction("1.5"));
    Logger.print("1.96 -> " + toFraction("1.96"));
    Logger.print("1.97 -> " + toFraction("1.97"));
  }

   // Toggle fraction use
  toggleFraction() {
    this.fractionUsed = !this.fractionUsed;
  }

  // Convert inch to centimeters
  convertToInch() {
    if (this.inch === '') {
      this.cm = 0;
      this.inchDecimal = 0;
    } else {
      this.inchDecimal = toDecimal(this.inch);
      this.cm = parseFloat((this.inchDecimal * FACT).toFixed(4));
    }
  }

  // Convert centimeter to inches
  convertToCm() {
    if (this.cm === 0) {
      this.inch = '';
      this.inchDecimal = 0;
    } else {
      this.inchDecimal = parseFloat((this.cm / FACT).toFixed(4));
      this.inch = this.inchDecimal.toFixed(4);
    }
    if (this.fractionUsed) {
      this.inch = toFraction(this.inch);
      console.log(this.inch);
    }
  }
}

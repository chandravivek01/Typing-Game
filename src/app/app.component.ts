import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText = lorem.sentence();
  enteredText = '';

  onInput(event : any) {
    this.enteredText = event.target.value;
  }

  compareText(randomLetter: string, enteredLetter : string) : string {
    
    if ( !enteredLetter )
      return 'pending';

    return enteredLetter === randomLetter ? 'correct' : 'incorrect';
  }

}

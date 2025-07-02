import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  handleClickEvent(){
    console.log("Function called");
    this.otherFunction()
  }

  otherFunction(){
    console.log("other function");
  }
}

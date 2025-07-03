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
  
  // count=0
  

  // handleCounter(val:string){
  //   if(val=='minus'){
  //     this.count=this.count-1
  //     if(this.count==-1){
  //       this.count=0
  //     }
  //   }
  //   else if(val=='plus'){
  //     this.count=this.count+1
  //   }
  //   else{
  //     this.count=0
  //   }
  // }

  // handleEvent(event:MouseEvent){
  //   console.log("function called",event.type);
  //    console.log("function called",(event.target as Element).className);
    
  // }
//   event type
//   handleEvent(event: Event) {
//   const input = event.target as HTMLInputElement;
//   console.log(`Event type: ${event.type}, Value: ${input.value}`);
// }

}

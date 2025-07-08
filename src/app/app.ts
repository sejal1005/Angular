import { Component, effect, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
//  COUNTER APPLICATION 
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
// EVENT HANDLING
//   handleEvent(event:MouseEvent){
//     console.log("function called",event.type);
//      console.log("function called",(event.target as Element).className);
    
//   }

//   handleEvent2(event: Event) {
//   const input = event.target as HTMLInputElement;
//   console.log(`Event type: ${event.type}, Value: ${input.value}`);
// }
// GETTER AND SETTER
// name=""
// displayName="";
// email="";
// getName(event:Event){
//   const name=(event.target as HTMLInputElement).value
//   this.name=name;
// }
// showName(){
//   this.displayName=this.name;
// }
// setName(){
//   this.name="Tanishq";
// }
// getEmail(val:string){
//   console.log(val);
//   this.email=val
// }
// setEmail(val:string){
//   console.log(val);
//   this.email="default@test.com"
// }
// SIGNAL
// count = signal(10);
// x=20;

// constructor(){
//   effect(()=>{
//     console.log(this.count());
//   })
// }
// updateValue(val:string){
  // this.count.set(this.count()+1);

  // if(val=='inc'){
  //   this.count.set(this.count()+1);
  // }
  //  if(val=='dec'){
  //   this.count.set(this.count()-1);
  // }
// }


 

}

import { NgIf } from '@angular/common';
import { Component, computed, effect, Signal, signal, WritableSignal} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,NgIf],
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
// COUNTER APPLICATION
  // if(val=='inc'){
  //   this.count.set(this.count()+1);
  // }
  //  if(val=='dec'){
  //   this.count.set(this.count()-1);
  // }
// }
// Defining two data types for signal
// data : WritableSignal<number | string>= signal<number | string>(10);
//data : WritableSignal<number>= signal<number>(10);
// these cannot be updated
// count : Signal<number> = computed(()=>20);

// updateSignal(){
//   this.data.set("Hello");
//   using update method 
// this.data.update((val)=>val+1)

// }
// COMPUTED SIGNALS
// x = signal(10);
// y = signal(20);
// z = computed (()=> this.x() + this.y())

// showValue(){
//   console.log(this.z());
//   this.x.set(100)
//   console.log(this.z());
// }

 
//Effect 
// userName = signal('Sejal')
// count = signal(0)
// displayHeading = true

// constructor(){
//   effect(()=>{
//     console.log(this.userName());
//   })
// }

// toggleValue(){
//  // this.displayHeading = !this.displayHeading
//  this.count.set(this.count()+1)
// }

// TO DO LIST 
// task = "";
// taskList :{id:number,task:string}[]=[] 

// addTask(){
//   this.taskList.push({id:this.taskList.length+1, task:this.task})
//   this.task=''
//   console.log(this.taskList);
// }
// deleteTask(taskId: number){
//   this.taskList=this.taskList.filter((item)=>item.id!=taskId)
// }
// *** FORMS ***
// name = new FormControl(/* here we can give default values also */ );
// password = new FormControl();
// displayValue(){
//   console.log(this.name.value,this.password.value);
// }

//*** FORM GROUPING ***
profileForm = new FormGroup({
  name: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  email: new FormControl('', [Validators.required,Validators.maxLength(20),Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])

})
onSubmit(){
  console.log(this.profileForm.value);
}
get name(){
  return this.profileForm.get('name');
}
get email(){
  return this.profileForm.get('email');
}
get password(){
  return this.profileForm.get('password');
}
}

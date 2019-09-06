import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { StringifyOptions } from 'querystring';
@Component({
  selector: 'app-client-itinerary',
  templateUrl: './client-itinerary.component.html',
  styleUrls: ['./client-itinerary.component.css']
})
export class ClientItineraryComponent implements OnInit {
  
value='';
value1='';
starttd : Date;
endtd : Date;
 eventValue: any[]=[
  { "event":"",
    "eventStartTimeDate" :"",
    "eventEndTimeDate" :"",
  }
];

  constructor(private fb : FormBuilder) { }
  InsertClientForm : FormGroup;
  ngOnInit() {
    this.InsertClientForm = this.fb.group({

      'clientName' : [],

      'projectName':[],
      
      'arrivalDate' :[],
      
      'departureDate':[],
      'agenda':[],
       'account':[],
      
      'event':[],
       'eventStartTimeDate':[],
      'eventEndTimeDate':[],
       'viewEvents':[],
      });
  }

  getValues(event)
{
 this.starttd=event.target.value;
 console.log(this.starttd);
// alert(event.target.value);
}
getValues1(event)
{
 this.endtd=event.target.value;
// alert(event.target.value);
}


// onClick1($event){
//   //alert("I AM " + $event.target.id);
//   if($event.target.nodeName === "LI"){
//      return;
//   }
//   //alert("A");
// }

// onClick(event){
//   event.stopPropagation();
//  alert("B");
// }

  combined : string;
  result:string;
  onClick(event,result)
  {
    
   event.stopPropagation();
    event.preventDefault();
    //alert(event.target.innerHTML);
    this.value1=result+" "+event.target.innerHTML;
    //console.log("Value in child"+this.value);
    //this.combined = this.value + " " +this.value1;
    //console.log(this.combined);
    
     
            
    
    // let value=event.target.innerHTML;
    // console.log(value);
  }
  onClick3(event)
  {
     alert(event);
    
  }
  buttonEvent(){
   
    //alert("in button");
    console.log(this.starttd);
    this.eventValue.push({ "event" : this.value1, "eventStartTimeDate" : this.starttd,  "eventEndTimeDate":this.endtd});
  }
  OnInsertClient(){

    console.log("Hello");
  }
}

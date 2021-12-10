import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FieldArrayType, FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { tap, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { EventService } from '../event.service';
import { Observable } from 'rxjs';
import { OrgEvent } from '../event.types';
import { ActivatedRoute } from '@angular/router';
import { RoutingService } from '../routing.service';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent{

  form: FormGroup;
  model: any;
  jsonString: string = "";
  jsonForm: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];
  eventID: string = null;
  event$: Observable<OrgEvent> = null;
  event: OrgEvent = null;
  sub: any;
  capacity: number;
  registered: boolean;
  formName: string;
  listOfQuestions: any;



  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private http: HttpClient,
    private firestore: AngularFirestore,
    private es: EventService,
    private rs: RoutingService,
    private aRoute: ActivatedRoute,
    private as : AuthService,
  ){
  
  }

  ngOnInit() {
    this.aRoute.params.subscribe(params => {
      this.eventID = params.id;
      this.event$ = this.es.getEvent(this.eventID);
      this.sub = this.event$.subscribe(res => {

        if(res.active == true){
        this.event = res;
        
      }
      });
    });
    this.readData();
  

  }
  

  saveData(data:any){
    const uID = this.as.getUserID();
    var new_data :any = {};
    console.log("datata", data);
    for (let response in data){
      console.log(data[response]);
      console.log(this.listOfQuestions[response]["title"]);
      new_data[this.listOfQuestions[response]["title"]] = data[response];
    }
    this.firestore.doc(`events/${this.eventID}/registrationData/${uID}`).set(new_data);
  }


  readData(){
  
    
    this.es.getEvent(this.eventID).subscribe( (r:any)=>{

      this.formName = r.formName;
      const example = this.firestore.collection(`forms`).doc(`${this.formName}`).get();
    example.subscribe((data:any) => {
      this.form = new FormGroup({});
        this.options = {};
      

      
      
      this.jsonString = '{"title":"Registration","type":"object","required":["title"],"properties":'+ JSON.stringify(data.data().schema)+'}';
      this.jsonForm = JSON.parse(this.jsonString);
      this.fields = [this.formlyJsonschema.toFieldConfig(this.jsonForm)];
      this.model = {}
      this.listOfQuestions = this.jsonForm['properties'];

    })
   
    
    });
  }

 
  onSubmit() {
   
    this.register();
    this.saveData(this.model);
  }

  register():void {
    const currentCount = this.event.registeredCount;
    this.capacity = this.event.capacity;
    if (currentCount < this.capacity){
      const uid = this.as.getUserID();
      const name = this.as.currentUser.name.display;
      this.es.registerForEvent(this.event.eventID,uid,name, currentCount+1);
      this.registered = true;
      } else{
        console.log("Event is full");
      }


    }

}


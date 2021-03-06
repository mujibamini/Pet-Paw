import { Component,OnInit} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import{without} from'lodash';

library.add(faTimes);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'DoctorPet';
  theList: object[];

  deleteApt(theApt:object){
    this.theList=without(this.theList,theApt);
  }

  constructor(private http:HttpClient) { }

  ngOnInit():void {
    this.http.get<Object[]>('../assets/data.json').subscribe(data=>{
      this.theList=data;
    });
  }
}

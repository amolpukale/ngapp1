import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vehicle:any;
 
  constructor(public router:Router,public service:DataService) { }

  
  ngOnInit() 
  {
     let StateOfResult= this.service.GetData();

    StateOfResult.subscribe((result)=>{
      this.vehicle = result;
    });
        
   
  }

  

}
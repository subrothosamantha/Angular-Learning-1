import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'all-practice';
  name = '';
  place = '';
  disable = true;
  roll:number = 44;
  userUpdating = '';
  updatedservername = 'no server created!!!';
  updateservernameusingng = '';
  servercreationstatus = 'no server created!!!';
  userName = '';
  private _customerName : string;

  get customerName(): string{
    return this._customerName;
  }

  set customerName(customerName:string){
    this._customerName = customerName;
  }
 
   servername = ''


  returnMyDetails(){
    this.roll = 33;
    this.name = 'sheela ki jawani';

    return this.name+" is of "+this.roll;
  }

  runthis(){
    this.name = 'subrotho samantha';
    this.place = 'Hyderabad';
  }



  inputParam(event : any){
    this.userUpdating = event.target.value;
  }



  updateserver(event: any){
    this.servername = event.target.value;
  }

  onbuttonclickserverupdate(){
    this.updatedservername = 'server created with name '+this.servername;
  }

  updateservernameusingngmethod(){
    this.servercreationstatus  = 'server created with name '+ this.updateservernameusingng;
  }

  updateUserName(updatedName: any){
    this.userName = updatedName;
    if(this.userName === 'subroto'){
      alert('welcome')
    }
  }

 
}

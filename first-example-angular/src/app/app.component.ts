import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-example-angular';
public uname:string ="sekhar";
public age:number=25;
public email:string ="sekhar1245@gmail.com";

public skill:String[] =["html","css","javascript","angularjs","Java"];

public empObj:Emp = {empID:78,empName:"sekhar1245",empCity:"Bnglr"};

public empObjs:Emp[] = [ 
                    {empID:78,empName:"sekhar1245",empCity:"Bnglr"},
                    {empID:78,empName:"sekhar1245",empCity:"Bnglr"},
                    {empID:78,empName:"sekhar1245",empCity:"Bnglr"},
                    {empID:78,empName:"sekhar1245",empCity:"Bnglr"}];

}

class Emp{

  public empID:number;
  public empName:string;
  public empCity:String;

  
}
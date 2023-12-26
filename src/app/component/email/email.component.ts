import { Component } from '@angular/core';
import { EmailService } from '../../service/email.service';
import { error } from 'console';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  r={
    to:"",
    subject:"",
    message:""
  }
  constructor(private email:EmailService)
  {

  }

  doSubmitForm(){
    console.log("try to submit form");
    console.log("DATA",this.r);

     /*
    if(this.r.to=='' || this.r.subject=='' || this.r.message=='')
    {
         this.snak.open("field can not be empty","ok");
    }
    */
    this.email.sendEmail(this.r).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
      console.log(error);
    
  }
)
}
}

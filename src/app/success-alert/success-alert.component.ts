import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template:`
     <div class="alert alert-success">
      This is a success message !
     </div>
  `,
  styles:[`
      .alert-success{
        background-color: #28a745;
        border-color: #28a745;
        color: #fff;
        font-weight: bold;
        border-radius: 20px;
        margin:50px;
        width: 500px;
        
        
  
      }
  `]
})
export class SuccessAlertComponent {

}
 import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template:`
  <div class="alert alert-success">
   This is a warning message !
  </div>
`,
styles:[`
   .alert-success{
    background-color: #ffc107;
     border-color: #ffc107;
     color: #856404;
     font-weight: bold;
     border-radius: 20px;
     margin:50px;
     width: 500px;
   }
`]
})
export class WarningAlertComponent {

}

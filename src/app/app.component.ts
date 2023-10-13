import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  content  = [
    {
      price : "0",
      title :  'FREE',
      value1 : "Single User",
      value2 : "5GB Storage",
      value3 : "Unlimited Public Projects",
      value4 : "Community Access",
      value5 : "Unlimited Private Projects",
      value6 : "Dedicated Phone Support",
      value7 : "Free Subdomain",
      value8 : "Monthly Status Reports"
    },
    {
      price : "9",
      title :  "PLUS",
      value1 : "5 Users",
      value2 : "50GB Storage",
      value3 : "Unlimited Public Projects",
      value4 : "Community Access",
      value5 : "Unlimited Private Projects",
      value6 : "Dedicated Phone Support",
      value7 : "Free Subdomain",
      value8 : "Monthly Status Reports"
    },
    {
      price : "49",
      title :  "PRO",
      value1 : "Unlimited Users",
      value2 : "150GB Storage",
      value3 : "Unlimited Public Projects",
      value4 : "Community Access",
      value5 : "Unlimited Private Projects",
      value6 : "Dedicated Phone Support",
      value7 : "Unlimited Free Subdomains",
      value8 : "Monthly Status Reports"
    }

  ]
}

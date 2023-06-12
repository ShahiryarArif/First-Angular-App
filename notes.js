/*

*Generate component
ng generate component details --standalone --inline-template --skip-tests

* @Input() housingLocation!: HousingLocation;
non-null assertion operator '!' is added because the input is expecting value to be passed
In this case no default value, as our app we know that value will be passed
Tell typescript that the value will not be null or undefined

*Property Binding
[attribute]="value"

*Interpolation
{{}}

*Service:
Service should be use as dependancu injections
command: ng generate service housing --skip-tests


*Routing
in src/main.ts:
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

add provideRouter(routeConfig) in bootstrapApplication

in src/app/app.component.ts
import { RouterModule } from '@angular/router';

add in imports array

routerLink directive to use dynamic data to create route

*event handler
(submit) = "submitApplication()"

*template varibale:
<input type="text" placeholder="Filter by city" #filter>

*Json Server:
npm install -g json-server

*HTTP request
We have used fetch but for advance use cases use HttpClient provided by Angular
*/

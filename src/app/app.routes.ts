import { Routes } from '@angular/router';
import { About } from './about/about';
import { HomeComponent } from './home-component/home-component';
import { ContactComponent } from './contact-component/contact-component';

export const routes: Routes = [
    { path: "home", component: HomeComponent} ,
    { path:"about", component: About},
    { path: "", component: HomeComponent },
    { path: "contact", component: ContactComponent}
];

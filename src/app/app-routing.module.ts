import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';


const routes:Routes=[
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"item/:id",component:ItemComponent},
  {path:"",redirectTo:"/home",pathMatch:"full" }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

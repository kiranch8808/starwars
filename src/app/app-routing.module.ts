import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarwarsComponent } from './starwars/starwars/starwars.component';

const routes: Routes = [
  {path:'star', component:StarwarsComponent},
    {path:'', component:StarwarsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

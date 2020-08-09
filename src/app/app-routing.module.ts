import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountrySearchComponent } from './components/country-search/country-search.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountryListComponent } from './components/country-list/country-list.component';

const routes: Routes = [{ path: '', component: CountrySearchComponent }, {
  path: 'country-list/:name', component: CountryListComponent
},
{
  path: 'country/:name', component: CountryDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

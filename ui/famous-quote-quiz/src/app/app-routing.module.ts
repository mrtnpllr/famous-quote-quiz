import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteContainerComponents } from './quote/quote-container/quote-container.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

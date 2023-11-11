import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteContainerComponents } from './quote/quote-container/quote-container.component';

const routes: Routes = [
  {
    path: 'quotes',
    component: QuoteContainerComponents
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

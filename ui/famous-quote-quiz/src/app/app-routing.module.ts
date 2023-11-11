import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { QuoteContainerComponents } from './quote/quote-container/quote-container.component';
import { SettingsComponent } from './settings/settings.component';
import { GameComponent } from './game/game.component';
import { GameService } from './core/game-service/game.service';

const GameServiceResolver: ResolveFn<any> =
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(GameService).init();
};

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'game',
    component: GameComponent,
    resolve: {data: GameServiceResolver},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

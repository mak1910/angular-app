import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { coreReducers } from './store/core.reducers';
import { CoreEffects } from './store/core.effects';
import { NavbarComponent } from './component/navbar/navbar.component';
import { StateFeatures } from '../app.model';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    StoreModule.forFeature(StateFeatures.Core, coreReducers),
    EffectsModule.forFeature([CoreEffects])
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }

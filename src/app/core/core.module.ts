import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { coreReducers } from './store/core.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './store/core.effects';
import { StateFeatures } from '../app.model';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(StateFeatures.Core, coreReducers),
    EffectsModule.forFeature([CoreEffects])
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }

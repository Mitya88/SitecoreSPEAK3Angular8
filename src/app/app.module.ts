import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScPageModule } from '@speak/ng-bcl/page';
import { ScContextDetailsModule } from '@speak/ng-bcl/context-details';
import { ScIconModule } from '@speak/ng-bcl/icon';
import {ScGlobalHeaderModule} from '@speak/ng-bcl/global-header'
import {ScGlobalLogoModule} from '@speak/ng-bcl/global-logo'
import { ScMenu, ScMenuModule } from '@speak/ng-bcl/menu';
import {ScApplicationHeaderModule} from '@speak/ng-bcl/application-header'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScPageModule,
    ScContextDetailsModule,
    ScIconModule,
    ScGlobalHeaderModule,
    ScMenuModule,
    ScGlobalLogoModule,
    ScApplicationHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScPageModule } from '@speak/ng-bcl/page';
import { ScContextDetailsModule } from '@speak/ng-bcl/context-details';
import { ScIconModule } from '@speak/ng-bcl/icon';
import { ScGlobalHeaderModule } from '@speak/ng-bcl/global-header'
import { ScGlobalLogoModule } from '@speak/ng-bcl/global-logo'
import { ScMenuModule } from '@speak/ng-bcl/menu';
import { ScApplicationHeaderModule } from '@speak/ng-bcl/application-header';
import { StartPageComponent } from './start-page/start-page.component'
import { RouterModule } from '@angular/router';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { ScExpanderModule } from '@speak/ng-bcl/expander'
import { ScButtonModule } from '@speak/ng-bcl/button';
import { ScBreadcrumbModule } from '@speak/ng-bcl/breadcrumb'
import { ScTabsModule } from '@speak/ng-bcl/tabs'
// import {ScSearchableDropListModule} from '@speak/ng-bcl/searchable-drop-list'
import { ScPopoverModule } from '@speak/ng-bcl/popover'
import { ScProgressBarModule } from '@speak/ng-bcl/progress-bar'
import { ScMessageBarModule } from '@speak/ng-bcl/message-bar'

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ComponentsPageComponent
  ],
  imports: [
    BrowserModule,
    // ScSearchableDropListModule,
    AppRoutingModule,
    ScPageModule,
    ScContextDetailsModule,
    ScIconModule,
    ScPopoverModule,
    ScProgressBarModule,
    ScMessageBarModule,
    ScGlobalHeaderModule,
    ScMenuModule,
    ScGlobalLogoModule,
    ScApplicationHeaderModule,
    ScExpanderModule,
    ScTabsModule,
    ScButtonModule,
    ScBreadcrumbModule,
    RouterModule.forRoot([
      { path: '', component: StartPageComponent, pathMatch: 'full' },
      { path: 'components', component: ComponentsPageComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

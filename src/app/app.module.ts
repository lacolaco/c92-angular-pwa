import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 1. MdProgressBarModuleのインポート
import { MdToolbarModule, MdProgressBarModule } from '@angular/material';
import { AppShellModule } from '@angular/app-shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-pwa' }),
    MdToolbarModule,
    MdProgressBarModule, // 2. MdProgressBarModuleを追加
    AppShellModule.runtime()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppShellModule } from '@angular/app-shell'; // 1. AppShellModuleをインポート
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    AppShellModule.prerender() // 2. prerenderモードを設定
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}

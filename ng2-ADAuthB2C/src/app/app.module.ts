import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WindowService } from './service/windowservice';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { AppRoutes } from './app.router';
import { AuthenticatorGuard } from './service/authenticatorGuard.guard';
import { HellojsService } from './service/hellojs.service';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
  ],
  providers: [
    WindowService,
    AuthenticatorGuard,
    HellojsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

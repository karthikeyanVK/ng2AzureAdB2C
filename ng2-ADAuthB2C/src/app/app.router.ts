import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatorGuard } from './service/authenticatorGuard.guard';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
export const router: Routes = [
    { path: "", component: AppComponent, canActivate: [AuthenticatorGuard] },
    { path: "Tasks", component: TaskComponent, canActivate: [AuthenticatorGuard] },
   
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(router);

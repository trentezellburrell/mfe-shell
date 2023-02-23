import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


export const Dashboard_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(Dashboard_ROUTES)
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }

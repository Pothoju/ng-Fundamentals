import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";

import { ProfileComponent } from './profile.component';

import { userRoutes } from "./user.routes";
import { LoginComponent } from "./login.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";






@NgModule({

    declarations:[ProfileComponent,LoginComponent],

    providers:[],

    imports:[    

        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
        FormsModule
    ]

})



export class UserModule{}
export interface IUser{
    id: number;
    firstName: string
    lastName: string
    userName: string;
}
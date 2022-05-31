import { Routes } from "@angular/router";
import { App2Component } from "./app2/app2.component";
import { App3Component } from "./app3/app3.component";

export const AppRoute:Routes=[
    {path:'',component:App2Component},
    {path:'app3',component:App3Component}
]
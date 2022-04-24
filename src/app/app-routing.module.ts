import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractComponent } from './extract/extract.component';
import { NewTransferenceComponent } from './new-transference/new-transference.component';

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full'},
  { path: 'extrato', component: ExtractComponent },
  { path: 'nova-transferencia', component: NewTransferenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

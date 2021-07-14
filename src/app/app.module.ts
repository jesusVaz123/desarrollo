import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AquirerService} from './service/aquirer.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material';

import { SideBarComponent } from './component/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './component/button/button.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MaterialModule } from './material.module';
import { FooterComponent } from './component/footer/footer.component';



import { HomeAmexComponent } from './page/home-amex/home-amex.component';

import { RechazosBanorteComponent } from './page/fuentepapel/rechazos-banorte/rechazos-banorte.component';
import { LoginComponent } from './page/login/login.component';
import { DetallerechazosModalComponent } from './page/detallerechazos-modal/detallerechazos-modal.component';

import { RechazosComponent } from './page/rechazos/rechazos.component';
import { CapturamanualComponent } from './page/capturamanual/capturamanual.component';
import { ModificacionRechazoModalComponent } from './page/modificacion-rechazo-modal/modificacion-rechazo-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ButtonComponent, 
    FooterComponent,  
    HomeAmexComponent,   
    RechazosBanorteComponent,
    LoginComponent,
    DetallerechazosModalComponent,    
    RechazosComponent,
    CapturamanualComponent,
    ModificacionRechazoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatGridListModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSortModule,
    MaterialModule,
    CommonModule
  ],

  providers: [AquirerService,DatePipe],
 entryComponents: [DetallerechazosModalComponent,
                   ModificacionRechazoModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

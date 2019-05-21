import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';
import { UserService } from './core/user.service';
//import { PrincipalComponent } from './principal/principal.component';
import { HomeResolver } from './home/home.resolver';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    EditUserComponent,
    NewUserComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent
    
  ],
  entryComponents: [AvatarDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [
    FirebaseService, 
    EditUserResolver, 
    AuthService, 
    AuthGuard, 
    UserService,
    HomeResolver
  ],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

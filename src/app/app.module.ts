import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdventureTimeService } from './services/adventure-time.service';

import { HomeComponent } from './home/home.component';

import { NguiInViewComponent } from './ngui-in-view/ngui-in-view.component';
import { AuthService } from './services/auth.service';

import { MeetingsComponent } from './meetings/meetings.component'
import { DyteComponentsModule } from '@dytesdk/angular-ui-kit';
import { ChatroomsComponent } from './chatrooms/chatrooms.component'



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NguiInViewComponent,
        MeetingsComponent,
        ChatroomsComponent
    ],
    imports: [
        BrowserModule,
        DyteComponentsModule,
        HttpClientModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forRoot([{
            path: 'mysite/:id', component: AppComponent
        },

        ]),
    ],
    providers: [AdventureTimeService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }

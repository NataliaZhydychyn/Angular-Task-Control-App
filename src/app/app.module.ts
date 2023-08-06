import { BoardsEffects } from './store/effects/boards.effect';
import { BoardStateFacade } from './store/facade/boards.state.facade';
import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardModule } from './feature/board/board.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TasksEffects } from './store/effects/tasks.effect';
import { TaskStateFacade } from './store/facade/tasks.state.facade';
import { DashbordModule } from './feature/dashbord/dashbord.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    BoardModule,
    DashbordModule,
    CoreModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TasksEffects, BoardsEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [TaskStateFacade, BoardStateFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }

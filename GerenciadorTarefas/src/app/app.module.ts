import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Importação necessária
import { CommonModule } from '@angular/common';  // Importação necessária
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)  // 🔥 ESSA LINHA É ESSENCIAL! 🔥
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

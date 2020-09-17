import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InstantEditorComponent } from './components/instant-editor/instant-editor.component';

@NgModule({
	declarations: [AppComponent, InstantEditorComponent],
	imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './pages/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { RotatingCardComponent } from './pages/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { TestNgStyleComponent } from './directives/test-ng-style/test-ng-style.component';
import { WordComponent } from './pages/word/word.component';
import { TestNgClassComponent } from './directives/test-ng-class/test-ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { EuroDollarPipe } from './pipes/euro-dollar.pipe';
import { FakeService } from './services/fake.service';
import { TodoComponent } from './todo/pages/todo/todo.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterSimulatorComponent } from './components/router-simulator/router-simulator.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FrontComponent } from './pages/front/front.component';
import { Nf404Component } from './pages/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { LoginComponent } from './pages/login/login.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { SliderComponent } from './components/slider/slider.component';
import { TestHttpComponent } from './components/test-http/test-http.component';
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';
import { CvModule } from './cv/cv.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    TestNgStyleComponent,
    WordComponent,
    TestNgClassComponent,
    HighlightDirective,
    RainbowDirective,
    EuroDollarPipe,
    TodoComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    AdminComponent,
    FrontComponent,
    Nf404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    SliderComponent,
    TestHttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
  ], // ToastrModule added,
  providers: [FakeService, AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

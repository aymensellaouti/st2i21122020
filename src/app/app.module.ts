import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './pages/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { RotatingCardComponent } from './pages/rotating-card/rotating-card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { CardComponent } from './cv/card/card.component';
import { TestNgStyleComponent } from './directives/test-ng-style/test-ng-style.component';
import { WordComponent } from './pages/word/word.component';
import { TestNgClassComponent } from './directives/test-ng-class/test-ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { EuroDollarPipe } from './pipes/euro-dollar.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { FakeService } from './services/fake.service';
import { TodoComponent } from './todo/pages/todo/todo.component';

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
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    TestNgStyleComponent,
    WordComponent,
    TestNgClassComponent,
    HighlightDirective,
    RainbowDirective,
    EuroDollarPipe,
    DefaultImagePipe,
    TodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [FakeService],
  bootstrap: [AppComponent],
})
export class AppModule {}

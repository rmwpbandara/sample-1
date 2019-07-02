import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

    this.test();
  }
  test() {

    let before =  {

      '0': {

        'title':'title 1',
        'time':'12.30pm',
      },
      '1': {

        'title':'title 2',
        'time':'12.30pm',
      },
      '2': {

        'title':'title 3',
        'time':'12.30pm',
      },
    }


    


    console.log(before);

    // some code here


    // expected results

    // let after =  [
    //   { 
    //     'title':'title 1',
    //     'time':'12.30pm',
    //   },

    //   {
    //     'title':'title 2',
    //     'time':'12.30pm',
    //   },

    //   {
    //     'title':'title 3',
    //     'time':'12.30pm',
    //   }
    // ]

    // console.log(after);    
  }

}

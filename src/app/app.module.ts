import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as firebase from 'firebase';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { firebaseConfig } from 'src/environments/environment';

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

  // agendaObjRef = firebase.database().ref('rmwp-bandara/');
  agendaRef ;

  constructor() {
    firebase.initializeApp( firebaseConfig );

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

    console.log(Object.values(before));
    
    console.log(Object.entries(before).map(v => v[1]));

    let after = [
      { 
        'title':'title 1',
        'time':'12.30pm',
      },
      {
        'title':'title 2',
        'time':'12.30pm'
      },
      {
        'title':'title 3',
        'time':'12.30pm'
      }
    ]



    this.agendaRef = firebase.database().ref('agenda/');

    let subSession = this.agendaRef.push(after);

    // after.forEach(function (value) {
      // console.log(value);
      subSession.set(after);
    // }); 

      // subSession.set(after);

    // console.log(before);

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

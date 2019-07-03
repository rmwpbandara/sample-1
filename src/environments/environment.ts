// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBwMpS61HuWNDBU2BsmXKzXOmI1I2eE9_0",
  authDomain: "rmwp-bandara.firebaseapp.com",
  databaseURL: "https://rmwp-bandara.firebaseio.com",
  projectId: "rmwp-bandara",
  storageBucket: "rmwp-bandara.appspot.com",
  messagingSenderId: "667581135809",
  appId: "1:667581135809:web:c46918c2d11df9d6"
};

export const snapshotToArray = snapshot =>{
  let returnArray = [];
  snapshot.forEach(element => {
    let item = element.val();
    item.key = element.key;
    returnArray.push(item);
  });

  return returnArray;
}
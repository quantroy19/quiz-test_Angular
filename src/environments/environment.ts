// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseAPIURL = 'http://localhost:3000';
export const environment = {
  production: true,
  GOOGLE_CLIENT_ID:
    '703654222704-39k5ll3nousr20ihca0i7467tb3fqura.apps.googleusercontent.com',
  FACEBOOK_CLIENT_ID: '282818090697743',
  baseAPI: `${baseAPIURL}`,
  user_api: `${baseAPIURL}/users`,
  subject_api: `${baseAPIURL}/subjects`,
  spectrum_statistic_api: `${baseAPIURL}/score_spectrum_statistics`,
  // user_api: `${baseAPIURL}/users`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

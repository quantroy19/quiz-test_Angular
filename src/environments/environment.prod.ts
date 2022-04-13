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

  firebase: {
    apiKey: '...',
    authDomain: 'project.firebaseapp.com',
    databaseURL: 'https://project.firebaseio.com',
    projectId: 'project',
    storageBucket: 'project.appspot.com',
    messagingSenderId: '...',
    FACEBOOK_CLIENT_ID: '282818090697743',
    baseAPI: `${baseAPIURL}`,
    user_api: `${baseAPIURL}/users`,
    subject_api: `${baseAPIURL}/subjects`,
    spectrum_statistic_api: `${baseAPIURL}/score_spectrum_statistics`,
    // user_api: `${baseAPIURL}/users`,
  },
};

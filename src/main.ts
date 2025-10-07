import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json'

Amplify.configure(config);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


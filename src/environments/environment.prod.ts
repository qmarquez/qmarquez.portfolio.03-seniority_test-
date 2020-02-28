import { baseEnvironment } from './environment.base';

baseEnvironment.production = true;
baseEnvironment.apiURL = 'https://dummy_mailer.herokuapp.com/api';

export { baseEnvironment as environment };

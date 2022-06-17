import RESTAdapter from '@ember-data/adapter/rest';

export default class ActivityAdapter extends RESTAdapter {
  host = 'http://www.boredapi.com';
  namespace = 'api';
}

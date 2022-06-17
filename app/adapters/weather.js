import RESTAdapter from '@ember-data/adapter/rest';
import { computed } from '@ember/object';

export default class WeatherAdapter extends RESTAdapter {
  host = 'http://api.weatherapi.com/v1'
  namespace = 'current.json'

  headers = computed(function() {
    return {
      'API_KEY': '13edf749bc3440b882c161233221506',
    }
  })

  query(params) {
      params.q = 'Pato Branco'
  }
}

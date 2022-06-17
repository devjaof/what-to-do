import Model,{ attr } from '@ember-data/model';

export default class WeatherModel extends Model {
  @attr('string') name;
  @attr('number') temp_c;
}

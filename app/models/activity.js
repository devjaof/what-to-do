import Model, { attr } from '@ember-data/model';

export default class ActivityModel extends Model {
  @attr activity;
  @attr type;
  @attr participants;
  @attr link;
}

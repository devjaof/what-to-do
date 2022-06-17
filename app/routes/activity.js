import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ActivityRoute extends Route {
  @service store;

  async model(){  
    const chamadaFetch = await fetch('http://www.boredapi.com/api/activity')
    return chamadaFetch.json();
   };

}

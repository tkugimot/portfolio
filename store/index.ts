import Vuex from 'vuex';
import * as root from './root';
import * as page from './modules/page';

export type RootState = root.State;

const createStore = () => {
  return new Vuex.Store({
    state: root.state(),
    modules: {
      [page.name]: page
    }
  })
}

export default createStore;

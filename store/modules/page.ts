import { State } from './PageTypes';
import { RootState } from 'store'
import { GetterTree, ActionTree, ActionContext, MutationTree } from 'vuex';
import { Page, PageClass } from './PageTypes';

export const name = 'page';
export const namespaced = true;

export const state = (): State => ({
  page: new PageClass(true, false, false, false)
});

export const getters: GetterTree<State, RootState> = {
    page: state => {
        return state.page;
    }
}

export const types = {
    ACTIVATE: 'ACTIVATE',
}

export interface Actions<S, R> extends ActionTree<S, R> {
    activate (context: ActionContext<S, R>, document): void
}

export const actions: Actions<State, RootState> = {
    activate ({ commit }, page: String) {
        console.log(page);
        commit(types.ACTIVATE, page);
    }
}

export const mutations: MutationTree<State> = {
    [types.ACTIVATE] (state, page: String) {
        state.page.aboutIsActive = false;
        state.page.workIsActive = false;
        state.page.educationIsActive = false;
        state.page.resumeIsActive = false;

        switch(page) {
            case "about":
                state.page.aboutIsActive = true;
                break;
            case "work":
                state.page.workIsActive = true;
                break;
            case "education":
                state.page.educationIsActive = true;
                break;
            case "resume":
                state.page.resumeIsActive = true;
                break;
            default:
                state.page.aboutIsActive = true;
                state.page.workIsActive = false;
                state.page.educationIsActive = false;
                state.page.resumeIsActive = false;
                break;
        }
    }
}

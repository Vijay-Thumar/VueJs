import { createStore } from "vuex";

import {auth} from "./modules/auth";
import {form} from './modules/form';


const store = createStore({

  modules: {
    auth,
    form
  },
});

export default store;

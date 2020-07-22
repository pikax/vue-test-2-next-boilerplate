// mock for the correct api
jest.mock("./../api", () => jest.requireActual("./../api.2"));

import Vue from "vue2";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);

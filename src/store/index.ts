import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import { Foo } from '@/models/foo'

import BarModule from '@/store/bar-module'
import FooModule from '@/store/foo-module'

Vue.use(Vuex)

interface BarModuleState {
  bar: number;
  baz: string;
}

interface FooModuleState {
  foo: Foo;
}

interface StoreState {
  bar: BarModuleState;
  foo: FooModuleState;
}

const vuexLocal = new VuexPersistence({
  reducer: (state: StoreState): Partial<StoreState> => ({
    bar: {
      bar: state.bar.bar,
      baz: state.bar.baz
    }
  })
})

export default new Vuex.Store({
  modules: {
    bar: BarModule,
    foo: FooModule
  },
  plugins: [ vuexLocal.plugin ], // Comment this, and it will be good
  strict: process.env.NODE_ENV === 'development'
})

import { Module, VuexModule } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'bar' })
export default class BarModule extends VuexModule {
    bar = 5
    baz = 'test'
}

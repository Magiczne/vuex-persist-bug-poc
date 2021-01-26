import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

import { Foo } from '@/models/foo'

@Module({ namespaced: true, name: 'foo' })
export default class FooModule extends VuexModule {
    foo = new Foo()

    @Mutation
    mutateFoo () {
        this.foo.bar()
    }
}

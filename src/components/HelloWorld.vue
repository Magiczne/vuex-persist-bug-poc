<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="onFail">Click me to fail</button>
    <br>
    <span>Current foo: {{ value }}</span>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { getModule } from 'vuex-module-decorators'

  import FooModule from '@/store/foo-module'

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string

    get value (): number {
      return getModule(FooModule, this.$store).foo.a
    }

    onFail (): void {
      getModule(FooModule, this.$store).mutateFoo()
    }
  }
</script>

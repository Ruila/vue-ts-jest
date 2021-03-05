import { Store } from '@/store';// path to store file

declare module '@vue/runtime-core' {
  interface State {
    loading: Boolean
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
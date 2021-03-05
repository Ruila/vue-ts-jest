import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Counter from "../../views/Counter.vue";
import Add from "../counter/add.vue";
import Minus from "../counter/minus.vue";
import store from "../../store/index";
import Loading from "../Loading.vue";

describe("Counter.vue", () => {
  const dispatch = store.dispatch;
  // let LoadState = store.state.loading; 
  const localVue = createLocalVue()
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Counter, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("test counter add count", () => {
    const wrapper = mount(Counter, {
      propsData: {}
    });
    wrapper.findComponent(Add).find('v-btn').trigger('click');
    expect(store.state.loading).toBe(true);
    expect(setTimeout).toBeCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
    jest.advanceTimersByTime(500);
    expect(store.state.loading).toBe(false);
    expect(wrapper.vm.$data.state.num).toBe(1);
  })

  it("test counter minus count", () => {
    const wrapper = mount(Counter, {
      propsData: {}
    });
    wrapper.findComponent(Minus).find('v-btn').trigger('click');
    expect(store.state.loading).toBe(true);
    expect(setTimeout).toBeCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
    jest.advanceTimersByTime(500);
    expect(store.state.loading).toBe(false);
    expect(wrapper.vm.$data.state.num).toBe(-1);
  })

  it("should open loading modal", ()=>{
    dispatch("show");
    expect(store.state.loading).toBe(true);
  })

  it("should hide loading modal", ()=>{
    dispatch("hide");
    expect(store.state.loading).toBe(false);
  })
});

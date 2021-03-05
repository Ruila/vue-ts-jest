import { mount, shallowMount } from "@vue/test-utils";
import Counter from "../../views/Counter.vue";
import Add from "../counter/add.vue";
import Minus from "../counter/minus.vue";
describe("Counter.vue", () => {
  test("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Counter, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  test("counter check", async() => {
    const wrapper = mount(Counter, {
      propsData: {}
    });
    wrapper.findComponent(Add).find('v-btn').trigger('click')
    wrapper.findComponent(Add).find('v-btn').trigger('click')
    expect(wrapper.vm.$data.state.num).toBe(2)
    wrapper.findComponent(Minus).find('v-btn').trigger('click')
    expect(wrapper.vm.$data.state.num).toBe(1)
  })
});

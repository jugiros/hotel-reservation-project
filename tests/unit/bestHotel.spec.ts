import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("Validate the best hotel for the reservation", () => {
    const arrDays = [
      {
        id: 0,
        weekend: false,
      },
      {
        id: 1,
        weekend: false,
      },
      {
        id: 2,
        weekend: false,
      }
    ];

    const wrapper = shallowMount(HelloWorld);
    wrapper.vm.validHotel(arrDays, false);
    expect(wrapper.vm.hotelName).toBe("Lakewood");
  });
});

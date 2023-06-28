import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("Validate the best hotel for the reservation", () => {
    const arrDays = [
      {
        id: 0,
        weekend: true,
      },
      {
        id: 1,
        weekend: true,
      },
      {
        id: 2,
        weekend: true,
      },
      {
        id: 2,
        weekend: false,
      },
      {
        id: 2,
        weekend: false,
      },
    ];

    const wrapper = shallowMount(HelloWorld);
    wrapper.vm.validHotel(arrDays, true);
    expect(wrapper.vm.hotelName).toBe("Ridgewood");
  });
});

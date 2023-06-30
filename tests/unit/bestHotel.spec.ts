import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView.vue", () => {
  it("Validate the best hotel for the reservation", () => {
    const arrDays = [
      {
        dateString: "string",
        weekend: true,
      },
      {
        dateString: "string",
        weekend: true,
      },
      {
        dateString: "string",
        weekend: true,
      },
      {
        dateString: "string",
        weekend: false,
      },
      {
        dateString: "string",
        weekend: false,
      },
    ];

    const wrapper = shallowMount(HomeView);
    wrapper.vm.validHotel(arrDays, false);
    expect(wrapper.vm.hotelName).toBe("Lakewood");
  });
});

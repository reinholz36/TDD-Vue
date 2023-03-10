import { mount } from 'vue-test-utils';
import Counter from '../src/components/Counter';
import expect from 'expect';

describe("Source - Components - Counter", function() {

	it("defaults to a count of 0", function() {
		const wrapper = mount(Counter)

		expect (wrapper.vm.count).toBe(0)
	});

	it("increments the count when the button is clicked", function() {
		const wrapper = mount(Counter)

		expect (wrapper.find(".count").html()).toContain(0)

		wrapper.find("button").trigger("click")

		expect (wrapper.find(".count").html()).toContain(1)
	});

	it("presents the current count", function() {
		const wrapper = mount(Counter)

		expect (wrapper.find(".count").html()).toContain(0)
	});
});

import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
	selector: "[appTimes]",
})
export class TimesDirective {
	constructor(
		//selecting the main element
		private viewContainer: ViewContainerRef,

		//selecting the child element
		private templateRef: TemplateRef<any>
	) {}

	@Input("appTimes") set render(times: number) {
		//clearing out all the existing child elements in the parent element
		this.viewContainer.clear();

		//printing out new child elements according to the logic
		for (let i = 0; i < times; i++) {
			this.viewContainer.createEmbeddedView(
				//the child element selection
				this.templateRef,

				//context object
				{
					index: i,
				}
			);
		}
	}
}

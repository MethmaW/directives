import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
	selector: "[appClass]",
})
export class ClassDirective {
	constructor(private element: ElementRef) {}

	@Input("appClass") set changeBackgroundColor(color: string) {
		this.element.nativeElement.style.backgroundColor = color;
	}
}

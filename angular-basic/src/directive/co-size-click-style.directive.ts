import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCoSizeClickStyle]',
  standalone: true
})
export class CoSizeClickStyleDirective {
  private static currentClickedElement: HTMLElement | null = null;  // Track the currently clicked element

  constructor(private el: ElementRef,private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    // If there's an element that has been clicked before, remove its styles
    if (CoSizeClickStyleDirective.currentClickedElement && CoSizeClickStyleDirective.currentClickedElement !== this.el.nativeElement) {
      this.resetStyle(CoSizeClickStyleDirective.currentClickedElement);
    }

    // Apply styles to the clicked element
    this.applyStyle(this.el.nativeElement);

    // Update the current clicked element
    CoSizeClickStyleDirective.currentClickedElement = this.el.nativeElement;
  }

  private applyStyle(element: HTMLElement): void {
    this.renderer.setStyle(element, 'background-color', 'white');
    this.renderer.setStyle(element, 'border', '1px solid black');
  }

  private resetStyle(element: HTMLElement): void {
    this.renderer.removeStyle(element, 'background-color');
    this.renderer.removeStyle(element, 'border');
  }

}

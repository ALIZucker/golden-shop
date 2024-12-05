import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appAddClickStyle]',
  standalone: true
})
export class AddClickStyleDirective {
  private isClicked = false; // To track the click state
  private static currentClickedElement: HTMLElement | null = null;  // Track the currently clicked element

  constructor(private el: ElementRef,private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    // If there's an element that has been clicked before, remove its styles
    if (AddClickStyleDirective.currentClickedElement && AddClickStyleDirective.currentClickedElement !== this.el.nativeElement) {
      this.resetStyle(AddClickStyleDirective.currentClickedElement);
    }

    // Apply styles to the clicked element
    this.applyStyle(this.el.nativeElement);

    // Update the current clicked element
    AddClickStyleDirective.currentClickedElement = this.el.nativeElement;
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

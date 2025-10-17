import {Component, computed, effect, ElementRef, inject, input, Renderer2} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  standalone: true,
  imports: []
})
export class RatingComponent {
  private static readonly MAX_SCORE = 5;

  rating = input.required<number>();
  private readonly elementWidth = 66;

  // Inject dependencies using Angular 20 pattern
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  // Computed signal for calculated score (Angular 20 feature)
  private visibleScore = computed(() =>
    (this.rating() / RatingComponent.MAX_SCORE) * this.elementWidth + "px"
  );

  // Effect() API for side effects (Angular 20 feature)
  // Automatically runs when rating signal changes
  constructor() {
    effect(() => {
      const element = this.elementRef.nativeElement.querySelector(".selected-stars");
      if (element) {
        // Reading visibleScore() triggers effect when rating changes
        this.renderer.setStyle(element, 'width', this.visibleScore());
      }
    });
  }
}

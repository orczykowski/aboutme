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
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  private visibleScore = computed(() =>
    (this.rating() / RatingComponent.MAX_SCORE) * this.elementWidth + 'px'
  );

  constructor() {
    effect(() => {
      const element = this.elementRef.nativeElement.querySelector('.selected-stars');
      if (element) {
        this.renderer.setStyle(element, 'width', this.visibleScore());
      }
    });
  }
}

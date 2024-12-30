import {Component, ElementRef, input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  private static MAX_SCORE = 5;

  rating = input.required<number>();
  private elementWidth: number = 66;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement.querySelector(".selected-stars");
    this.renderer.setStyle(element, 'width', this.calculateVisibleScore());
  }

  private calculateVisibleScore(): string {
    return (this.rating() / RatingComponent.MAX_SCORE) * this.elementWidth + "px";
  }

}

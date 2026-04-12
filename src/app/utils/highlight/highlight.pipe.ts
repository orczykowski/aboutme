import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {

  transform(value: string | null | undefined, query: string): string {
    if (!value || !query || !query.trim()) {
      return value ?? '';
    }
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return value.replace(regex, '<mark class="search-highlight">$1</mark>');
  }
}

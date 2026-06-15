import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);

  init(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      const leaf = this.deepestRoute(this.route);
      const data = leaf.snapshot.data;
      const title: string = leaf.snapshot.title ?? this.document.title;
      const description: string = data['description'] ?? 'CV of Grzegorz Orczykowski — Senior Software Engineer, Architect and Tech Lead with 15+ years of experience in Java, Kotlin, Spring Boot, microservices, DDD and Angular.';
      const canonical: string = data['canonical'] ?? 'https://orczykowski.github.io/aboutme/';

      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ property: 'og:url', content: canonical });
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ name: 'twitter:description', content: description });
      this.meta.updateTag({ name: 'twitter:title', content: title });
      this.updateCanonical(canonical);
    });
  }

  private deepestRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) route = route.firstChild;
    return route;
  }

  private updateCanonical(url: string): void {
    const el = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (el) el.href = url;
  }
}

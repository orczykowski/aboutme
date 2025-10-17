# Angular 20 Features Implementation Guide

This document describes all the new Angular 20 features that have been implemented in this codebase.

## Table of Contents
1. [Signal-Based State Management](#signal-based-state-management)
2. [Computed Signals](#computed-signals)
3. [Effect API](#effect-api)
4. [Signal-Based Queries (viewChild)](#signal-based-queries)
5. [LinkedSignal](#linkedsignal)
6. [Input Signals](#input-signals)
7. [Inject Function](#inject-function)
8. [New Control Flow Syntax](#new-control-flow-syntax)

---

## Signal-Based State Management

### What is it?
Signals are Angular's new reactive primitive for fine-grained reactivity. They provide better performance and simpler mental models compared to RxJS observables for most use cases.

### Implementation Example
**File:** `src/app/utils/menu/menu.service.ts`

```typescript
export class MenuService {
  // Signal-based state management (Angular 20 feature)
  menuVisibility = signal<boolean>(false);

  showMenu() {
    this.menuVisibility.set(true);
  }

  hideMenu() {
    this.menuVisibility.set(false);
  }

  toggleMenu() {
    this.menuVisibility.update(value => !value);
  }
}
```

### Benefits
- **Fine-grained reactivity**: Only affected parts of the UI re-render
- **Simpler API**: `.set()` and `.update()` instead of `.next()`
- **Synchronous**: No async surprises
- **Better performance**: Less overhead than RxJS for simple state

---

## Computed Signals

### What is it?
Computed signals automatically derive their value from other signals and only recalculate when dependencies change.

### Implementation Example
**File:** `src/app/welcome/welcome.component.ts`

```typescript
export class WelcomeComponent {
  private jobs = signal(this.jobRepository.findAll());

  // Computed signal - automatically recalculates when jobs signal changes
  experience = computed(() => {
    return Math.floor(
      this.jobs()
        .map(it => this.calculatePeriod(it.begin, it.end))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        / this.msInYear
    );
  });
}
```

### Benefits
- **Automatic dependency tracking**: No manual subscriptions needed
- **Memoization**: Only recalculates when dependencies change
- **Type-safe**: Full TypeScript support
- **Clean code**: No lifecycle hooks needed

---

## Effect API

### What is it?
Effects run side effects when signals change. They replace the need for `ngOnInit` + subscriptions in many cases.

### Implementation Example
**File:** `src/app/utils/rating/rating.component.ts`

```typescript
export class RatingComponent {
  rating = input.required<number>();

  private visibleScore = computed(() =>
    (this.rating() / RatingComponent.MAX_SCORE) * this.elementWidth + "px"
  );

  constructor() {
    // Effect runs when rating signal changes
    effect(() => {
      const element = this.elementRef.nativeElement.querySelector(".selected-stars");
      if (element) {
        this.renderer.setStyle(element, 'width', this.visibleScore());
      }
    });
  }
}
```

**File:** `src/app/utils/menu/menu.component.ts`

```typescript
constructor() {
  // Effect to react to menu visibility changes
  // Replaces ngOnInit + subscription pattern
  effect(() => {
    const checkbox = this.isMenuVisible();
    const isVisible = this.menuService.menuVisibility();
    if (checkbox) {
      checkbox.nativeElement.checked = isVisible;
    }
  });
}
```

### Benefits
- **Automatic cleanup**: No need to manually unsubscribe
- **Declarative**: Express what should happen, not how
- **Runs in reactive context**: Automatically tracks dependencies
- **Cleaner code**: No lifecycle hooks or manual subscriptions

---

## Signal-Based Queries

### What is it?
Signal-based alternatives to `@ViewChild`, `@ContentChild`, etc. They automatically update when the view changes.

### Implementation Example
**File:** `src/app/app.component.ts`

```typescript
export class AppComponent {
  // Signal-based viewChild query (Angular 20 feature)
  // Automatically updates when the view changes
  isMenuVisible = viewChild<ElementRef>('menuVisibilityCheckbox');

  hideMenu(): void {
    const checkbox = this.isMenuVisible();
    if (checkbox) {
      checkbox.nativeElement.checked = false;
    }
  }
}
```

### Benefits
- **Type-safe**: Returns `Signal<T | undefined>` - forces null checks
- **Reactive**: Automatically updates when view changes
- **Simpler**: No `!` assertions needed
- **Consistent**: Works like other signals

---

## LinkedSignal

### What is it?
LinkedSignal creates a writable signal that depends on a source signal but can also be updated independently. It's perfect for derived state that can also be modified directly.

### Implementation Example
**File:** `src/app/experience/experience.component.ts`

```typescript
export class ExperienceComponent {
  private allJobs = signal<JobInfo[]>(this.jobRepository.findAll());
  private filterYear = signal<number | null>(null);

  // LinkedSignal - depends on filterYear but can be updated independently
  jobs = linkedSignal<number | null, JobInfo[]>({
    source: this.filterYear,
    computation: (filterYear) => {
      if (filterYear === null) {
        return this.allJobs();
      }
      return this.allJobs().filter(job =>
        job.begin.getFullYear() <= filterYear &&
        (!job.end || job.end.getFullYear() >= filterYear)
      );
    }
  });

  totalJobs = computed(() => this.jobs().length);

  filterByYear(year: number | null): void {
    this.filterYear.set(year);
  }
}
```

### Benefits
- **Flexibility**: Can be both computed and writable
- **Predictable**: Clear source of truth
- **Composable**: Works with other signal APIs
- **Use cases**: Filters, searches, derived state with overrides

---

## Input Signals

### What is it?
Signal-based component inputs that are reactive and type-safe. Already used throughout the codebase.

### Implementation Examples
**File:** `src/app/experience/job/job.component.ts`

```typescript
export class JobComponent {
  jobInfo = input.required<JobInfo>()
}
```

**File:** `src/app/tools/grouped-tools/grouped-tools.component.ts`

```typescript
export class GroupedToolsComponent {
  title = input<string>("tools")
  tools = input<ToolDefinition[]>()
}
```

### Benefits
- **Type-safe**: Full TypeScript support
- **Required inputs**: `input.required<T>()` enforces required inputs
- **Default values**: Easy to provide defaults
- **Reactive**: Can be used in computed/effect

---

## Inject Function

### What is it?
Function-based dependency injection that can be used outside of constructors.

### Implementation Examples
**File:** `src/app/welcome/welcome.component.ts`

```typescript
export class WelcomeComponent {
  // Inject dependencies using Angular 20 inject() function
  private menuService = inject(MenuService);
  private jobRepository = inject(JobRepository);
}
```

**File:** `src/app/utils/rating/rating.component.ts`

```typescript
export class RatingComponent {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);
}
```

### Benefits
- **Flexible**: Can inject anywhere in the constructor or field initializers
- **Cleaner**: No constructor needed for simple cases
- **Testable**: Easy to mock
- **Modern**: More functional programming style

---

## New Control Flow Syntax

### What is it?
Built-in template syntax for common control flow patterns. No need to import `NgIf`, `NgFor`, etc.

### Implementation Examples
Already used throughout the codebase:

**@if directive:**
```html
@if (jobInfo().description) {
  <p class="description" [innerHTML]="jobInfo().description"></p>
}
```

**@for directive:**
```html
@for (tool of tools(); track tool) {
  <div>
    <span>{{ tool.name }}</span>
    <app-rating [rating]="tool.experienceRate"></app-rating>
  </div>
}
```

**@if with @else:**
```html
@if (condition) {
  <div>True case</div>
} @else {
  <div>False case</div>
}
```

### Benefits
- **Built-in**: No imports needed
- **Better performance**: Optimized by compiler
- **Cleaner syntax**: More readable
- **Type-safe**: Better type inference

---

## Summary of Changes

### Files Modified:
1. **src/app/utils/menu/menu.service.ts** - Signal-based state
2. **src/app/welcome/welcome.component.ts** - Computed signals, inject()
3. **src/app/utils/rating/rating.component.ts** - Effect API, computed, inject()
4. **src/app/app.component.ts** - Signal-based viewChild
5. **src/app/utils/menu/menu.component.ts** - Effect API, viewChild, inject()
6. **src/app/experience/experience.component.ts** - LinkedSignal, computed, inject()
7. **src/app/tools/grouped-tools/grouped-tools.component.html** - Fixed signal invocation

### Key Benefits of Angular 20 Features:
1. **Better Performance**: Fine-grained reactivity
2. **Simpler Code**: Less boilerplate, no lifecycle hooks needed
3. **Type Safety**: Full TypeScript support
4. **Predictable**: Synchronous, clear data flow
5. **Modern**: Aligned with web standards and modern frameworks

---

## Migration Tips

### From RxJS to Signals:
- `BehaviorSubject` → `signal()`
- `.next(value)` → `.set(value)`
- `.pipe(map(...))` → `computed(() => ...)`
- `.subscribe(...)` → `effect(() => ...)`

### From Decorators to Signals:
- `@Input()` → `input()` or `input.required<T>()`
- `@ViewChild()` → `viewChild()` or `viewChild.required<T>()`
- `@Output()` → `output()` (not implemented yet but available)

### Best Practices:
1. Use signals for local state
2. Use computed for derived state
3. Use effect for side effects (sparingly)
4. Keep effects simple and focused
5. Prefer computed over effect when possible

---

## Additional Resources

- [Angular Signals Documentation](https://angular.dev/guide/signals)
- [Angular 20 Release Notes](https://github.com/angular/angular/releases)
- [Signal-based Components Guide](https://angular.dev/guide/components)

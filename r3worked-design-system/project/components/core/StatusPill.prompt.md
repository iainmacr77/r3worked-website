Small uppercase status indicators for the "operational" language of the product (RECEIVED, ROUTED, LOGGED, COMING SOON, MISSED CALL). Color communicates state: coral = brand/received, green = live/success, amber = pending/coming-soon, grey = inactive. Use sparingly — never as a dominant color block.

```jsx
<StatusPill status="received" pulse />
<StatusPill status="logged" />
<StatusPill status="coming-soon" dark />
```

`IconTile` is the small square icon chip used inside step lists (capture funnel, lead-rescue cards) — a tinted rounded-square background behind an `Icon`.

```jsx
<IconTile name="bell" tone="coral" />
```

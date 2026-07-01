A single stroke-icon renderer covering the Lucide-compatible icon set used across R3WORKED (matches `lucide-react` visually — same 24×24 stroke grid, 2px stroke, round caps/joins).

```jsx
<Icon name="bell" size={16} className="text-[color:var(--r3-coral)]" />
```

Notes:
- Color inherits via `currentColor` by default — set `color` or wrap in a text-color className.
- Add new icons by extending the `PATHS` map in `Icon.jsx`; keep the same 24x24 stroke conventions so new icons match visually.
- This is the only icon primitive in the system — do not hand-roll one-off inline SVGs in product screens; add the icon here instead.

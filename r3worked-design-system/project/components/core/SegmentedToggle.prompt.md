A sliding two/three-way pill toggle with a dark sliding indicator — used for the Before/After homepage showcase switch, and reusable for any "scenario toggle" (e.g. Web enquiry vs Missed call in the hero).

```jsx
const [tab, setTab] = React.useState("before");
<SegmentedToggle
  value={tab}
  onChange={setTab}
  options={[{ value: "before", label: "Before" }, { value: "after", label: "After" }]}
/>
```

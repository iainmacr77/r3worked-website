The brand's single button primitive — an uppercase pill, always full-height tap target (44px sm / 56px md), used for every CTA on the site.

```jsx
<Button variant="primary">Stop losing enquiries</Button>
<Button variant="ghost" iconRight="arrow-right">See how it works</Button>
<Button as="a" href="mailto:hello@r3worked.co.uk" variant="accent">Start Lead Rescue review</Button>
```

Variants: `primary` (solid ink — the default commercial CTA), `accent` (solid coral — used for in-context product actions like "Send Enquiry"), `ghost` (glass outline for use on the porcelain background), `ghost-dark` (outline for use on dark ink panels). All variants lift 2px on hover.

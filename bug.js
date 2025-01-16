```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-color': '#f56565',
      },
    },
  },
  plugins: [],
};
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Bug</title>
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <div class="bg-theme-color p-4">
    This should be red, but it's not.
  </div>
</body>
</html>
```
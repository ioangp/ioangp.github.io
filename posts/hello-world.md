# Hello World
## Introduction
This is a test of the `markdown` blog functionality. **Bold text**, *italic text*, and the like. Testing equations: $\frac{\text{hello world}}{\\{1,4,5\\} \\ \cap \\ \\{1,3,4\\} \\ \cup \\ \emptyset}$

Inline math: $x^2 + y^2 = z^2$

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

| Table    | Test    |
| -------- | ------- |
| Hello    | 250     |
| World    | 80      |
| Hello    | 67      |

```
async function loadPost() {
  const file = getQueryParam('post');
  if (!file) {
    document.getElementById('content').innerHTML = "<p>No file given.</p>";
    return;
  }
  const res = await fetch("posts/" + file);
  const md = await res.text();
  const html = marked.parse(md);
  document.getElementById('content').innerHTML = html;
}
```

## Epilogue
[Projects page](/projects)
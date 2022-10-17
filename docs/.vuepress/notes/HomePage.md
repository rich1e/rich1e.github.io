---
banner: "https://images.unsplash.com/photo-1665430922646-5f4fecfc02bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
---


## Frontend
```dataview 
table time-played, length, rating 
from ""
where contains(file.name, "git") or contains(file.name, "Git")
sort rating desc
```
## Travel
```dataview 
table date, address
from ""
where contains(file.path, "travel")
```

## Undone

```dataview 
table time-played, length, rating 
from ""
where contains(file.path, "undone")
sort rating desc
```

## 归档

### 2022

```dataviewjs
// Render a simple table of book info sorted by rating.
dv.table(["File", "Genre", "Time Read", "Rating"], dv.pages('"2022"')
    .sort(b => b.file.mtime)
    .map(b => [b.file.link, b.genre, b["time-read"], b.rating]))

```
```dataviewjs
// Render a simple table of book info sorted by rating.
const table = dv.markdownTable(["File", "Genre", "Time Read", "Rating"], dv.pages("#git")
    .sort(b => b.rating)
    .map(b => [b.file.link, b.genre, b["time-read"], b.rating]))

dv.paragraph(table);
```
```dataviewjs

```

### 2021
```dataviewjs
// Render a simple table of book info sorted by rating.
dv.table(["File", "Genre", "Time Read", "Rating"], dv.pages('"2021"')
    .sort(b => b.file.mtime)
    .map(b => [b.file.link, b.genre, b["time-read"], b.rating]))
```
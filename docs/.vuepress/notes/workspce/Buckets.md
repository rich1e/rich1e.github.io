```dataview 
table time-played, length, rating 
from ""
where contains(file.path, "buckets")
sort rating desc
```
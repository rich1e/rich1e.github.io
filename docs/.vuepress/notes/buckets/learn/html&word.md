> Pandoc

> pdf2htmlex
>



```html
<div id="source-html">
    <h1>
        <center>Artificial Intelligence</center>
    </h1>
    <h2>Overview</h2>
    <p>
        Artificial Intelligence(AI) is an emerging technology
        demonstrating machine intelligence. The sub studies like <u><i>Neural
                Networks</i>, <i>Robatics</i> or <i>Machine Learning</i></u> are
        the parts of AI. This technology is expected to be a prime part
        of the real world in all levels.

    </p>
</div>
<div class="content-footer">
    <button id="btn-export" onclick="exportHTML();">Export to
        word doc</button>
</div>
```



```javascript
<script>
    function exportHTML(){
       var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
       var footer = "</body></html>";
       var sourceHTML = header+document.getElementById("source-html").innerHTML+footer;
       
       var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
       var fileDownload = document.createElement("a");
       document.body.appendChild(fileDownload);
       fileDownload.href = source;
       fileDownload.download = 'document.doc';
       fileDownload.click();
       document.body.removeChild(fileDownload);
    }
</script>
```



## 参考

https://phppot.com/javascript/how-to-export-html-to-word-document-with-javascript/
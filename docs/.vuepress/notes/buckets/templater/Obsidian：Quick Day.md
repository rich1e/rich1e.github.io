---
title: <% tp.file.title %>
date: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
modify: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>
author: rich1e
tags: ["daily"]
aliases: 
---

# <% tp.file.title %>
> ==[[<% tp.date.now("YYYY") %>]]==，壬寅年，我在杭州。记录自己的生活，经历自己的生命，观察这个可爱的世界。

<%* 
    let fileName = tp.file.title
    let year = tp.date.now("YYYY")
    let targetFile = tp.file.find_tfile("1.index/index-diary/"+year)
    this.app.vault.append(targetFile, "\n"+"- "+"[["+fileName+"]]")
%>

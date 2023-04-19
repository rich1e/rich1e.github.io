---
author: rich1e
tags: ["daily"]
date: 2022-12-14 10:07:21
---

材料表格分页，防止页面出现卡顿。

> 由于接口数据较大，同一时间动态新增成百上千个Dom节点，造成内存爆增，页面出现卡顿。


```html
<an-table
  size="mini"
  :data="viewTableData.slice((page.currentPage - 1) * page.pageSize, page.currentPage * page.pageSize)"
  border
  highlight-current-row
  height="30vh"
  :deep-ref="
  (ref) => {
    editTable = ref;
  }
  "
  @selection-change="handleSelectionChange"
  @row-click="handleCurrentChange"
/>  

<!-- 分页1 -->

<div class="pagination">
  <el-pagination
    v-model:currentPage="page.currentPage"
    v-model:page-size="page.pageSize"
    background
    layout="total, sizes, prev,pager, next"
    :total="viewTableData.length"
    class="mt-4"
    :page-sizes="[100]"
    @current-change="handlePageCurrentChange"
    @page-size="handlePageSize"
  />
</div>

```

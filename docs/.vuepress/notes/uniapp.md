

![[meta/Pasted image 20241217163121.png]]


| 方法                | 适用场景         | 优势              | 限制          |
| :---------------- | :----------- | :-------------- | :---------- |
| git diff + apply  | 临时改动、快速共享    | 轻量，无需提交历史       | 丢失元数据，需手动提交 |
| format-patch + am | 跨分支/仓库传递提交历史 | 保留完整提交信息，支持批量处理 | 依赖 Git 环境   |

![[meta/Pasted image 20250612163450.png]]

![[meta/Pasted image 20250612164237.png]]

![[meta/Pasted image 20250612164825.png]]

![[meta/Pasted image 20250612170620.png]]

![[meta/Pasted image 20250612170713.png]]
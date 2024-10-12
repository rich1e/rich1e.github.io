## 目标

 - 提供统⼀的⽇志格式，规范统⼀输出⽅式，保证⽇志的⼀致性；
 - 提供多个等级的⽇志输出⽅法。包括 debug、info、 warn、error；
 - 集成接⼝信息，尽可能收集可⽤数据；
 - ⽇志可集成前端开发框架，实现通⽤接⼝⽇志；
## 日志级别

**应用日志（Application）**：application.log

**开发日志（Access）**：access.log
## 日志格式

application 日志

```log
[2024-09-18T05:50:58.611] [INFO] application - 生产pdf需要的时间:3
[2024-09-18T05:50:59.539] [INFO] application - 添加页面编码时间:0
[2024-09-18T05:50:59.541] [INFO] application - File size is 4.40 MB. No compression needed.
[2024-09-18T05:50:59.541] [INFO] application - 生产pdf总时间:14
[2024-09-18T05:50:59.544] [INFO] application - inspection_report_down下载成功
[2024-09-18T05:53:10.842] [INFO] application - 生产pdf需要的时间:3
[2024-09-18T05:53:11.506] [INFO] application - 添加页面编码时间:0
[2024-09-18T05:53:11.506] [INFO] application - File size is 4.29 MB. No compression needed.
```

access 日志

```log
[2024-10-12T09:24:10.323] [INFO] access - 127.0.0.1 - - "GET /inspection_report_down?showSummary=0&showIssueAnalysis=0&showNtOb=0&showVehicleReport=0&service_center_id=67&start_date=2024-09-13%20%2B08%3A00&end_date=2024-10-12%20%2B08%3A00&inspection_type_id=&observation_level=&showSendEmailModal=false&listed_emails=&listed_emails_by_location=&operationSite=131&inspection_ids=&disableSplitLocationSend=false&serviceCode=7kuLZSaF&platform=web&env_id=kfhj&operation_location_ids=131&page_size=2&token=e090e54104f589bdbf829e341d2d484652d8bc0be1d9e84afe5c85cb6625b0dddaf3e17e7c4a6a2f5b3a0c4e69e9e71f5e545c92a78597630d682d3cb7675d5fp88e4fe22b27608457a95c23a67de0a106ac8be92965dcc0f7ff5609ff0d802f3p-1000418&wheel_style=default&show_pic=0&pressure_unit=Bar&mile_unit=KM&date_format=DD-MM-YYYY&date_time_format=DD-MM-YYYY%20HH%3Amm&time_format=HH%3Amm&timezone=Asia%2FShanghai&deviceid=1728548248357DLFA2XHX481JNHGp&utcDiffMinu=480 HTTP/1.1" 200 578294 "http://localhost:3900/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
```
## 如何使用

基础日志

```js
const log4js = require('koa-log4')
const logger = log4js.getLogger('index')

logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
```

访客日志

```js
const log4js = require('koa-log4')
app.use(log4js.koaLogger(log4js.getLogger("http"), { level: 'auto' }))
```
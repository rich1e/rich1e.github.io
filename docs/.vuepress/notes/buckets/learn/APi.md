# banma

## Home

车辆余额信息

> http://10.118.22.91:8020/ubi/balance

    {"vin":"LSJA24W94GS000687"}

    {"result":{"premium":3024.12,"resultCode":"0000","errorMessage":null},"errorMessges":null,"warningMessage":null,"status":"100"}

某日驾驶行为分析

> http://10.118.22.91:8020/ubi/day-driving-behavior

    {"vin":"LSJA24W94GS000687","date":"20170825"}

    {"result":{"response":null,"resultCode":"0000","errorMessage":"未查询到驾驶行为分析数据!"},"errorMessges":null,"warningMessage":null,"status":"100"}

## 车险报价

获取车险可投保省市列表

> http://10.118.22.91:8020/partner/auto/area

    none

    {"result":[{"province":{"key":"320000","value":"江苏省","selected":null},"city":[{"key":"320100","value":"南京市","selected":null},{"key":"320200","value":"无锡市","selected":null},{"key":"320300","value":"徐州市","selected":null},{"key":"320400","value":"常州市","selected":null},{"key":"320500","value":"苏州市","selected":null},{"key":"320600","value":"南通市","selected":null},{"key":"320700","value":"连云港市","selected":null},{"key":"320800","value":"淮安市","selected":null},{"key":"320900","value":"盐城市","selected":null},{"key":"321000","value":"扬州市","selected":null},{"key":"321100","value":"镇江市","selected":null},{"key":"321200","value":"泰州市","selected":null},{"key":"321300","value":"宿迁市","selected":null}]},{"province":{"key":"330000","value":"浙江省","selected":null},"city":[{"key":"330100","value":"杭州市","selected":null},{"key":"330200","value":"宁波市","selected":null},{"key":"330300","value":"温州市","selected":null},{"key":"330400","value":"嘉兴市","selected":null},{"key":"330500","value":"湖州市","selected":null},{"key":"330600","value":"绍兴市","selected":null},{"key":"330700","value":"金华市","selected":null},{"key":"330800","value":"衢州市","selected":null},{"key":"330900","value":"舟山市","selected":null},{"key":"331000","value":"台州市","selected":null},{"key":"331100","value":"丽水市","selected":null},{"key":"332021","value":"经济技术开发区","selected":null}]},{"province":{"key":"340000","value":"安徽省","selected":null},"city":[{"key":"340100","value":"合肥市","selected":null},{"key":"340200","value":"芜湖市","selected":null},{"key":"340300","value":"蚌埠市","selected":null},{"key":"340400","value":"淮南市","selected":null},{"key":"340500","value":"马鞍山市","selected":null},{"key":"340600","value":"淮北市","selected":null},{"key":"340700","value":"铜陵市","selected":null},{"key":"340800","value":"安庆市","selected":null},{"key":"341000","value":"黄山市","selected":null},{"key":"341100","value":"滁州市","selected":null},{"key":"341200","value":"阜阳市","selected":null},{"key":"341300","value":"宿州市","selected":null},{"key":"341400","value":"巢湖市","selected":null},{"key":"341500","value":"六安市","selected":null},{"key":"341600","value":"亳州市","selected":null},{"key":"341700","value":"池州市","selected":null},{"key":"341800","value":"宣城市","selected":null}]},{"province":{"key":"370000","value":"山东省","selected":null},"city":[{"key":"370100","value":"济南市","selected":null},{"key":"370200","value":"青岛市","selected":null},{"key":"370300","value":"淄博市","selected":null},{"key":"370400","value":"枣庄市","selected":null},{"key":"370500","value":"东营市","selected":null},{"key":"370600","value":"烟台市","selected":null},{"key":"370700","value":"潍坊市","selected":null},{"key":"370800","value":"济宁市","selected":null},{"key":"370900","value":"泰安市","selected":null},{"key":"371000","value":"威海市","selected":null},{"key":"371100","value":"日照市","selected":null},{"key":"371200","value":"莱芜市","selected":null},{"key":"371300","value":"临沂市","selected":null},{"key":"371400","value":"德州市","selected":null},{"key":"371500","value":"聊城市","selected":null},{"key":"371600","value":"滨州市","selected":null},{"key":"371700","value":"菏泽市","selected":null}]},{"province":{"key":"410000","value":"河南省","selected":null},"city":[{"key":"410100","value":"郑州市","selected":null},{"key":"410200","value":"开封市","selected":null},{"key":"410300","value":"洛阳市","selected":null},{"key":"410400","value":"平顶山市","selected":null},{"key":"410500","value":"安阳市","selected":null},{"key":"410600","value":"鹤壁市","selected":null},{"key":"410700","value":"新乡市","selected":null},{"key":"410800","value":"焦作市","selected":null},{"key":"410900","value":"濮阳市","selected":null},{"key":"411000","value":"许昌市","selected":null},{"key":"411100","value":" 漯河市","selected":null},{"key":"411200","value":"三门峡市","selected":null},{"key":"411300","value":"南阳市","selected":null},{"key":"411400","value":"商丘市","selected":null},{"key":"411500","value":"信阳市","selected":null},{"key":"411600","value":"周口市","selected":null},{"key":"411700","value":"驻马店市","selected":null},{"key":"419000","value":"省直辖县级行政区划","selected":null}]},{"province":{"key":"440000","value":"广东省","selected":null},"city":[{"key":"440100","value":"广州市","selected":null},{"key":"440200","value":"韶关市","selected":null},{"key":"440400","value":"珠海市","selected":null},{"key":"440500","value":"汕头市","selected":null},{"key":"440600","value":"佛山市","selected":null},{"key":"440700","value":"江门市","selected":null},{"key":"440800","value":"湛江市","selected":null},{"key":"440900","value":"茂名市","selected":null},{"key":"441200","value":"肇庆市","selected":null},{"key":"441300","value":"惠州市","selected":null},{"key":"441400","value":"梅州市","selected":null},{"key":"441500","value":"汕尾市","selected":null},{"key":"441600","value":"河源市","selected":null},{"key":"441700","value":"阳江市","selected":null},{"key":"441800","value":"清远市","selected":null},{"key":"441900","value":"东莞市","selected":null},{"key":"442000","value":"中山市","selected":null},{"key":"445100","value":"潮州市","selected":null},{"key":"445200","value":"揭阳市","selected":null},{"key":"445300","value":"云浮市","selected":null}]},{"province":{"key":"510000","value":"四川省","selected":null},"city":[{"key":"510100","value":"成都市","selected":null},{"key":"510300","value":"自贡市","selected":null},{"key":"510400","value":"攀枝花市","selected":null},{"key":"510500","value":"泸州市","selected":null},{"key":"510600","value":"德阳市","selected":null},{"key":"510700","value":"绵阳市","selected":null},{"key":"510800","value":"广元市","selected":null},{"key":"510900","value":"遂宁市","selected":null},{"key":"511000","value":"内江市","selected":null},{"key":"511100","value":" 乐山市","selected":null},{"key":"511300","value":"南充市","selected":null},{"key":"511400","value":"眉山市","selected":null},{"key":"511500","value":"宜宾市","selected":null},{"key":"511600","value":"广安市","selected":null},{"key":"511700","value":"达州市","selected":null},{"key":"511800","value":"雅安市","selected":null},{"key":"511900","value":"巴中市","selected":null},{"key":"512000","value":"资阳市","selected":null},{"key":"513200","value":"阿坝藏族羌族自治州","selected":null},{"key":"513300","value":"甘孜藏族自治州","selected":null},{"key":"513400","value":"凉山彝族自治州","selected":null}]}],"errorMessges":null,"warningMessage":null,"status":"100"}

获取车辆人员信息

> http://10.118.22.91:8020/partner/auto/vehicle-person/LSJA24W94GS000687

    LSJA24W94GS000687

    {"result":{"licenseNo":"沪A88888","modelName":"别克SGM7281ATA轿车","vin":"LSJA24W94GS000687","engineNo":"DFERD343452","dealerCode":"BK20006","city":"370300","province":"370000","ownerName":"大师","ownerMobile":"13988888888","certificateType":"ID_CARD","certificateNo":"371327199004053719","registerDate":"2017-07-04"},"errorMessges":null,"warningMessage":null,"status":"100"}

获取车险经销商列表

> http://10.118.22.91:8020/partner/auto/dealer

    {"city":"370300","province":"370000"}

    {"result":[{"dealerCode":"BK20006","mfrDealerCode":"SJ2678","dealerName":"别克山东测试","province":"370000","city":"370300","address":"fdafafa","brandCode":"Buick","manufactory":"SGM","canInputCtpModelName":null,"insurers":null,"loanNo":null}],"errorMessges":null,"warningMessage":null,"status":"100"}

## 查看报价

获取合作伙伴车险可选保险公司列表

> http://10.118.22.91:8020/partner/auto/insurance/370000/BK20006

    370000/BK20006

    {"result":{"nonRecommended":["ygbx"],"recommended":["cpic"]},"errorMessges":null,"warningMessage":null,"status":"100"}

车险保费计算

> http://10.118.22.91:8020/auto/policy/calculate

    {"dealerAgreement":{"insurer":"cpic"},"dealerCode":"BK20006","owner":{"certificateNo":"371327199004053719","certificateType":"ID_CARD","mobile":"13988888888","name":"大师"},"vehicle":{"engineNo":"DFERD343452","licenseNo":"沪A88888","modelName":"别克SGM7281ATA轿车","registerDate":"2017-07-03T16:00:00.000Z","vin":"LSJA24W94GS000687"}}

    {"result":{"orderNo":"BK1700008863","insurer":"cpic","ctpTotalPremium":"950.00","vehicleTaxAmount":"900.00","taxType":"纳税","bizTotalPremium":"5588.23","totalPremium":"7438.23","coverages":[{"code":"DAMAGE_LOSS","name":"车辆损失险","sumInsured":"340843.00","options":null,"isSelect":null,"quantity":"","selectable":null,"canChanged":null,"serialNo":1,"commissionRate":null,"shortName":null,"value":"4158.30","exemptClauseCode":"DAMAGE_LOSS_EXEMPT_CLAUSE","exemptSelected":"1"},{"code":"THIRD_PARTY","name":"第三方责任险","sumInsured":"500000.00","options":null,"isSelect":null,"quantity":"","selectable":null,"canChanged":null,"serialNo":3,"commissionRate":null,"shortName":null,"value":"1429.93","exemptClauseCode":"THIRD_PARTY_EXEMPT_CLAUSE","exemptSelected":"1"}],"bizStartDate":"2017-08-26 00:00","bizEndDate":"2018-08-26 00:00","ctpStartDate":"2017-08-26 00:00","ctpEndDate":"2018-08-26 00:00","bizQuestion":null,"ctpQuestion":null,"bizCheckCode":null,"ctpCheckCode":null},"errorMessges":null,"warningMessage":null,"status":"100"}

## 调整投保方案

获取子险套餐

> http://10.118.22.91:8020/auto/policy/coverage/370000

    370000

    {"result":[],"errorMessges":null,"warningMessage":null,"status":"100"}


## 确认订单

车险保单提交

> http://10.118.22.91:8020/auto/policy/submit

    {"orderNo":"BK1700008863","delivery":{"cityName":"淄博市","details":"afdsfsfasfas","mobile":"13988888888","name":"大师","provinceName":"山东省"}}

    {"result":{"orderStatus":"FAILED","bizQuestion":null,"ctpQuestion":null,"bizCheckCode":null,"ctpCheckCode":null,"bizInsuranceQueryCode":null,"ctpInsuranceQueryCode":null,"warmTip":null},"errorMessges":null,"warningMessage":null,"status":"100"}

## 订单列表

根据VIN查询insaic车险订单列表

> http://10.118.22.91:8020/auto/policy/query

    {"page":0,"size":10,"vin":"VNN3G87V8VUZULKKF"}

    {"result":{"total":2,"content":[{"orderNo":"BK1700008835","insurer":"cpic","status":"CALC","amount":"8038.23","bizPremium":"5588.23","ctpPremium":"950.00","tax":"1500.00","taxType":"纳税","startDate":null},{"orderNo":"BK1700008724","insurer":"ygbx","status":"TOBEPAID","amount":"9584.58","bizPremium":"7734.58","ctpPremium":"950.00","tax":"900.00","taxType":"纳税","startDate":null}],"pageNumber":0,"pageSize":10,"totalPage":1},"errorMessges":null,"warningMessage":null,"status":"100"}

删除订单

> http://10.118.22.91:8020/auto/policy/delete/BK1700008835

    BK1700008835

    {"result":{"total":1,"orderStatus":"DELETE"},"errorMessges":null,"warningMessage":null,"status":"100"}

## 电话理赔

获取保障中订单的保险公司代码

> http://10.118.22.91:8020/auto/policy/effect/insurer/VNN3G87V8VUZULKKF

    VNN3G87V8VUZULKKF

    {"result":[],"errorMessges":null,"warningMessage":null,"status":"100"}

## 储备金列表

查询时间段内每天保费扣减信息

> http://10.118.22.91:8020/ubi/premium-record

    {"pageNo":0,"pageNum":10,"vin":"VNN3G87V8VUZULKKF"}

    {"result":{"dataList":[{"date":"2017-06-16","driverMileage":21,"premium":0.0,"score":91,"time":37,"userType":"0"},{"date":"2017-06-16","driverMileage":21,"premium":0.0,"score":91,"time":37,"userType":"0"},{"date":"2017-06-16","driverMileage":21,"premium":0.0,"score":91,"time":37,"userType":"0"},{"date":"2017-06-16","driverMileage":21,"premium":0.0,"score":91,"time":37,"userType":"0"},{"date":"2017-06-16","driverMileage":21,"premium":0.0,"score":91,"time":37,"userType":"0"},{"date":"2017-06-16","driverMileage":21,"premium":0.0,"score":91,"time":37,"userType":"0"}],"resultCode":"0000"},"status":"100"}









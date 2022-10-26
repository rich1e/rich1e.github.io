## Clash 使用

[clash 客户端快速添加搬瓦工 Just my socks 机场节点？](https://www.jamesdailylife.com/just-my-socks-clash)
[自定义配置目录 | Clash for Windows](https://docs.cfw.lbyczf.com/contents/profilespath.html#%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82)
[Clash作为透明代理是否有意义？ · Issue #158 · Dreamacro/clash](https://github.com/Dreamacro/clash/issues/158)
[iptables系列教程（一）| iptables入门篇 - 掘金](https://juejin.cn/post/6844904155153170440)
[请问clashx怎么设置终端代理呢？ · Issue #592 · Dreamacro/clash](https://github.com/Dreamacro/clash/issues/592)

```bash
# 代理测试
curl -vv https://www.google.com
```

## 第三方 Clash 订阅转换

[边缘@订阅转换API](https://bianyuan.xyz/)
[Subscription Converter](https://sub-web.netlify.app/)
[Subscription Converter](https://clash.back2me.cn/)

## 搭建 Clash 订阅转换

[clash订阅转换搭建 - liuliのsite](https://back2me.cn/skills/clash.html)
[tindy2013/subconverter: Utility to convert between various subscription format](https://github.com/tindy2013/subconverter)
[CareyWang/sub-web](https://github.com/CareyWang/sub-web#Docker)

## FQA

![[a1675046c.png]]

服务日志如下：

1. 验证服务版本。`curl http://localhost:25500/version`
2. 验证数据转化。`curl http://localhost:25500/sub\?target\=yourpath`
3. 获取订阅节点信息。
4. 返回节点信息：`The following link doesn't contain any valid node info` 以下链接不包含任何有效的节点信息

通过日志可以了解，订阅节点获取失败，即转化 Clash 订阅信息失败。因此，如果订阅节点没有问题，那么问题就引刃而解。
检查发现，Clash 作为系统代理，现在订阅节点出问题，导致代理连接失败。关闭 Clash 后，连接订阅节点是没问题的。然后，重试第2个步骤，发现 Clash 订阅信息转化成功，再打开 Clash，代理就成功了。
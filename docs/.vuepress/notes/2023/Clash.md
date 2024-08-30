#clash #dns 
## 界面简介

- `General（常规）`：
    - `Port`、`Socks Port`；分别为 HTTP、SOCKS 代理端口，点击终端图案可以打开一个配置了代理的命令行窗口，点击端口数字可以复制该命令；
    - `Allow LAN`：启用局域网共享代理功能；
    - `Log Level`：日志等级；
    - `Home Directory`：点击下方路径直达 `C:\Users\用户名\.config\clash` 文件夹；
    - `GeoIP Database`：点击下方日期可更新 GeoIP 数据库；
    - `UWP Loopback` ：可以用来使 UWP 应用解除回环代理限制；
    - `Tap Device` ：安装 cfw-tap 网卡，可用于处理不遵循系统代理的软件（实际启动 tap 模式需要更改配置文件）；
    - `General YML`：编辑 `config.yml` 文件，可用于配置部分 General 页面内容；
    - `Dark Theme`：控制暗色模式；
    - `System Proxy`：启用系统代理；
    - `Start with Windows`：设置开机自启；
- `Proxies（代理）`：选择代理方式（Global – 全局、Rule – 规则、Direct – 直连）及策略组节点选择；
- `Profiles（配置管理）`：
    - 用来下载远端配置文件和创建本地副本，且可在多个配置文件间切换；
    - 对配置进行节点、策略组和规则的管理（添加节点、策略组和规则在各自编辑界面选择 `Add`, 调整策略组顺序、节点顺序及策略组节点使用拖拽的方式）；
- `Logs（日志）`：显示当前请求命中规则类型和策略；
- `Connections (连接)`: 显示当前的 TCP 连接，可对某个具体连接执行关闭操作；
- `Settings（设置）`：软件详细设置；
- `Feedback（反馈）`：显示软件、作者相关信息。

## Allow LAN

> 允许局域网连接

## TUN Mode

> 在Windows中对于不遵循系统代理的软件，TAP 模式可以接管其流量并交由 CFW 处理。对于 0.13.8 及以后版本，更推荐使用TUN 模式。安装虚拟网卡功能后可以实现全局代理！

**先关闭系统代理，再打开 TUN Mode，这两个功能是冲突的。**

> **DNS泄露问题**，什么是 DNS 泄露其实并没有一个明确的定义，也不存在一个官方解释。大概就是说你访问YouTube等黑名单网站的时候，使用中国的DNS服务器进行了解析，这是不安全的。如果在 [DNS Leak Test](https://browserleaks.com/dns) 、[ipleak](https://ipleak.net/)这种网站的列表中看到了中国国旗，就要意识到**可能**发生了DNS泄露。

如果真的泄露了有什么问题呢 ? 我也不知道可能导致什么，或许你可能收到下图这样的消息。

![[2023/meta/Pasted image 20231227150401.png]]

我觉得还是尽量不要让他们知道这件事。虽然没有人知道具体的探测机制是什么，但很可能是从网络层面获取的。在一般的家庭网络拓扑中，[wireshark](https://www.wireshark.org/)可以看到什么内容，运营商就能看见什么内容，所以你使用114.114.114.114、223.5.5.5这样的DNS解析去访问了什么网站是很清晰的。

这就要衍生出第一个使用技巧——**Clash开启TUN模式，关闭系统代理去使用**

与普通的系统代理模式区别在于，TUN模式下Clash会创建一张虚拟网卡，从网络层面接管所有的网络流量。

普通的系统代理模式，是作为一个软件的权限去接管别的软件的网络，总有一些无法接管的应用，比如游戏，比如命令行。所以我们应该开启TUN模式，关闭系统代理，让网卡做事，而不是让软件做事。

[DNS Leak Test - BrowserLeaks](https://browserleaks.com/dns)

[IP/DNS Detect - What is your IP, what is your DNS, what informations you send to websites.](https://ipleak.net/)

[Clash Verge系列使用最佳实践 | Lainbo's Blog](https://lainbo.me/article/clash-config)
### 安装TUN驱动

在`General`菜单中找到`Service Mode`选项，点击`Manage` **>** `Install`

安装成功后右侧**小地球应变为**==绿色==

![[2023/meta/Pasted image 20231227145849.png]]


![[2023/meta/Pasted image 20231227112800.png]]
### 设置并开启CFW TUN

点击`TUN Mode` **旁边的齿轮 >** `Reset` **>** `Save`

![[2023/meta/Pasted image 20231227145051.png]]

![[2023/meta/Pasted image 20231227145107.png]]

**DNS Servers**

```sh
223.5.5.5

119.29.29.29
```

**Fallback DNS Servers**

```sh
8.8.8.8

tls://dns.rubyfish.cn:853
```

https://1.1.1.1/dns-query

最后将`TUN Mode`选项右侧的开关打开即可

ref: [CFW TUN 模式 - Oculus中文指南](https://ocguide.eyw015.com/quest-guide/udp-hotspot/v-netcard/cfw/clash-tun)
## GeoIP

> https://github.com/Loyalsoldier/geoip

![[2023/meta/Pasted image 20231227112830.png]]


orig

```sh
https://github.com/Dreamacro/maxmind-geoip/releases/latest/download/Country.mmdb
```

new

```sh
https://raw.githubusercontent.com/Loyalsoldier/geoip/release/Country.mmdb
```

## Clash-Rules

> https://github.com/Loyalsoldier/clash-rules



Ref

[解决Clash代理时内网无法正常访问 | Wastrel's Blog](https://wastrel.top/p/ai2nrzh9/#1%E3%80%81%E5%AF%B9%E7%89%B9%E5%AE%9A%E5%9F%9F%E5%90%8D%E4%BD%BF%E7%94%A8%E6%8C%87%E5%AE%9A%E7%9A%84DNS%E6%9C%8D%E5%8A%A1%E5%99%A8)
[离开(＃°Д°)](https://www.cnblogs.com/faf4r/p/17765134.html)
[如何在 Clash for Windows 上配置服务 | Help Center](https://world.crisp.help/zh/article/clash-for-windows-xvf25w/)
[突发：Clash for windows作者停更失联及其影响 | VPN中国](https://www.vpn-china.org/clash-for-windows-author-stop-update-news/)
[使用Meta的客户端 - Clash.Meta Wiki-older](https://clash-meta.gitbook.io/clash.meta-wiki-older/used)
[archive.org](https://archive.org/download/clash_for_windows_pkg)
[在 macOS 上使用 Clash For Windows | Clash for Windows 代理工具使用说明](https://docs.gtk.pw/contents/macos/cfw.html#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85)
[github.com](https://github.com/clash-verge-rev/clash-verge-rev)
[TCOTC/Clash_backup: 与 Clash 相关的备份，过一段时间再重新上传](https://github.com/TCOTC/Clash_backup/tree/main)
[2023最新Clash for Windows使用教程配置从入门到精通](https://clashforwindows.org/)
[使用meta内核，无法更新geoip和geosite数据库 · Issue #357 · zzzgydi/clash-verge](https://github.com/zzzgydi/clash-verge/issues/357)
[Clash For Windows TUN模式教程 | TAG文档中心](https://doc.boccc.co/zh/article/clash-for-windows-tun-a8cexo/)
[Clash for Windows 使用TUN模式实现系统全局软件代理 | 世外桃源](https://sars.win/85)
[TUN 模式 | Clash for Windows 代理工具使用说明](https://docs.gtk.pw/contents/tun.html#macos)
[CFW 预处理与 Clash 配置文件的使用|Love98's Blog](https://blog.love98.net/archives/cfw-yu-chu-li-yu-clash-pei-zhi-wen-jian-de-shi-yong)
[Clash分流策略 | 配置文件 | 订阅防覆盖 | 硬核教程](https://a-nomad.com/clash)
[打造自己的 Clash 配置并提供订阅 - 一只萌新](https://yizhimengxin.me/2022/10/27/%E6%89%93%E9%80%A0%E8%87%AA%E5%B7%B1%E7%9A%84Clash%E9%85%8D%E7%BD%AE%E5%B9%B6%E6%8F%90%E4%BE%9B%E8%AE%A2%E9%98%85/)
[clash分流规则终极使用方法](https://www.lifenghua.cn/post/6#rule-provider%E3%80%81proxy-provider%20%E5%A4%A7%E8%87%B4%E5%8E%9F%E7%90%86)
[clash tun模式配置 | 我的博客](https://duan-dky.me/posts/2022-08-11-clash-tun-mode/)
[DNS污染对Clash（for Windows）的影响 | VPS小白](https://vpsxb.net/2628/)
[Clash Verge系列使用最佳实践 | Lainbo's Blog](https://lainbo.me/article/clash-config)
[Lainbo订阅转换](https://sub.lainbo.com/)
[使用 Clash DNS 分流解析与加密 DNS 防止 DNS 劫持 - xkww3n's site](https://www.xkww3n.cyou/2022/02/08/use-clash-dns-anti-dns-hijacking/)
[新版Clash规则！神机规则到底怎么使用？如何制作自己的Clash配置文件（.yaml） – V2RaySSR综合网](https://v2rayssr.com/clash.html)
[clash.yaml · main · MisakaNo の 小破站 / clash-meta · GitLab](https://gitlab.com/Misaka-blog/clash-meta/-/blob/main/clash.yaml)
[在 Clash 中 DNS 解析行为和 fallback-filter 的一点理解](https://cosey.me/p/clash-fallback-filter)

## 🎬场景一：Charles + Proxifier + 模拟器
### **步骤1：配置Charles的Socket代理**

1. **启动Charles**，进入菜单栏选择 **Proxy > Proxy Settings**。
    
2. 在 **SOCKS Proxy** 选项卡中：
    
    - 勾选 **Enable SOCKS Proxy**。
        
    - 设置端口（例如 `8889`，避免与HTTP代理端口冲突）。
        
3. 在 **SSL Proxying Settings** 中添加需要解密的域名或通配符（如 `*:*` 以捕获所有SSL流量）。

![[2025/meta/Pasted image 20250213145145.png]]

![[2025/meta/Pasted image 20250213145228.png]]
### **步骤2：配置Mac系统代理**

1. 打开 **系统偏好设置 > 网络 > 高级 > 代理**。
    
2. 启用 **SOCKS Proxy**，填写：
    
    - **服务器**: `127.0.0.1`
        
    - **端口**: Charles设置的SOCKS端口（如 `8889`）。
        
3. 确保iOS模拟器继承此代理（模拟器默认共享Mac网络设置）。

![[2025/meta/Pasted image 20250213145315.png]]
### **步骤3：在模拟器中安装Charles证书**

1. 在模拟器中打开Safari，访问 `http://chls.pro/ssl` 下载证书。
    
2. 安装证书后，进入 **设置 > 通用 > 关于 > 证书信任设置**，启用对Charles证书的完全信任。

![[2025/meta/Pasted image 20250213145414.png]]

![[2025/meta/Pasted image 20250213145353.png]]

![[2025/meta/Pasted image 20250213145446.png]]

### **步骤4：配置Proxifier**

1. **新增代理**。Proxy 配置为 Charles 的 HTTP 代理地址，端口为 `8888`。
    
2. **设置代理规则**。修改 `Default` 规则，打开  `Action` ，选择刚刚新增的 `Proxy HTTPS 127.0.0.1:8888`。
    
3. **修改DNS配置**。编辑 **Proxifier DNS Settings**，选择 `Resolve hostnames through proxy`。

![[2025/meta/Pasted image 20250213145550.png]]

![[2025/meta/Pasted image 20250213145649.png]]
![[2025/meta/Pasted image 20250213145710.png]]
### **步骤5：捕获Socket流量**

1. 配置完成后，**重启`Proxifier`**, 最好也**重启下`Charles`**，以确保配置生效。
    
2. 在Charles中点击 **Start Recording**（红色圆点图标）。
    
3. 运行模拟器中的应用，触发Socket连接。
    
4. 在Charles的 **Structure** 或 **Sequence** 视图中查看原始TCP流量（可能需要展开对应主机）。

>截图中均出现了，`80fa3d23-f568-460f-9b4d-856381d2332a`。第一张图是 **console.log** 打印的日志，第二张图是 **Charles** 里面抓取的数据。

![[2025/meta/Pasted image 20250213150335.png]]

![[2025/meta/Pasted image 20250213150342.png]]

## 🎬场景二：真机 + Charles + Shadowrocket

### **步骤1：配置Charles的Socket代理**

略，同上。

### **步骤2：配置Shadowrocket代理**

1. **安装Shadowrocket**。
    
2. 网络配置，**手机与电脑要在同一个网络**。
    
3. **配置手机代理**，打开网络设置，找到配置代理，将服务器设置为电脑的局域网IP：`192.168.110.113`，端口`8888`（这个端口被Charles监听）。
    
4. **配置Shadowrocket**，新增代理服务，类型为Socks5，地址设置为电脑的局域网IP：`192.168.110.113`，端口`8889`（这个端口被Charles监听）。

![[2025/meta/Pasted image 20250213152203.png]]

![[2025/meta/Pasted image 20250213151534.png]]

### **步骤5：捕获Socket流量**

1. 配置完成后，**重启下`Charles`**，以确保配置生效。
    
2. 在Charles中点击 **Start Recording**（红色圆点图标）。
    
3. 打开手机中的app应用，触发Socket连接。
    
4. 在Charles的 **Structure** 或 **Sequence** 视图中查看原始TCP流量（可能需要展开对应主机）。
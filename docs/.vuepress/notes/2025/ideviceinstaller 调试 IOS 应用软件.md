
## Install

```sh
# 安装 Homebrew（如未安装）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 libimobiledevice 和 ideviceinstaller
brew install --HEAD libimobiledevice
brew install ideviceinstaller
```

## Command

```sh
# 获取手机上的app列表
ideviceinstaller -l -o list_user 

# 获取手机的型号
ideviceinfo -k ProductType 

# 获取ios的版本
ideviceinfo -k ProductVersion

# 获取设备名称
ideviceinfo -k DeviceName 
 
# 获取设备的UDID
idevice_id -l

# 安装 IPA 文件
ideviceinstaller -i /path/to/your.ipa

# 覆盖安装
ideviceinstaller -g /path/to/your.ipa

# 卸载应用（需包名）
ideviceinstaller -U com.example.app
```
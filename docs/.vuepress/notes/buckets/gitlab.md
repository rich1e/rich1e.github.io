# gitlab 开发设计模版

## 项目模板

    # service 模块

    > service

    ### [XXX](url)
    |名称|描述
    |:-|:-|
    |pageid|暂无|
    |测试 url|https://test-b-fat.example.com.cn/example/creditcard/cs/service/intinmate-secretary/#/|
    |生产 url|https://b.example.com.cn/example/creditcard/cs/service/intinmate-secretary/#/|

## 功能模板

    # XXX需求_开发设计

    <!-- MarkdownTOC -->

    - 需求说明
    - 修改点
    - 需求成员
    - 设计文档
    - 流程图
    - 时序图
    - 附件

    <!-- /MarkdownTOC -->

    ## 需求说明

    // somethings

    ## 修改点

    // somethings

    ## 需求成员

    | 角色 | 姓名 | 部门及科室 |
    | ------------- | ------------- | ------------- |
    | 业务属主 | XX | XX |
    | 产品 | XX | XX |
    | 开发 | XX | XX |
    | 测试 | XX | XX |

    ## 设计文档

    - [page1](url)
    - [page2](url)
    - [page3](url)

    ## 流程图

    // 上传流程图

    ## 时序图

    // 上传时序图

    ## 附件

    // 上传附件

## 页面模板

    # XXX页

    <!-- MarkdownTOC -->

    - URL
    - API
    - View
    - State
    - Component
    - 流程图
    - 附件

    <!-- /MarkdownTOC -->

    ## URL

    路径：

    */path/to/page/*

    参数：
    无

    扩展：

    | url说明 | 描述 |
    | ------------- | ------------- |
    | 投放渠道 | 行员 |
    | 是否需要强登 | 是 |

    链接：

    | 环境 | 地址 |
    | ------------- | ------------- |
    | PRD | - |
    | FAT | -|
    | UAT | - |

    ## API

    [XXX](url)

    ## View

    ```vue
    <template>
      <div>
        <NavBar> //tab导航
          <NatBarItem />
        </NarBar>
        <UpdateCredit /> // 证件更新组件
        <TipBox> // 进行中提示语栏
        <AmountList> // 溢缴款领回列表
          <AmountListItem />
        </AmountList>
        <ExceptItem /> // 异常页面
        </div>
      </div>
    </template>
    ```

    ## State

    | 变量 | 范围 | 描述 |
    | ------------- | ------------- | ------------- |
    | - | - | - |

    ## Component

    ### XXX

    参数：

    | 参数名 | 描述 |
    | ------------- | ------------- |
    | - | - |

    方法：

    | 方法名 | 描述 |
    | ------------- | ------------- |
    | - | - |

    ---

    ### XXX

    参数：

    | 参数名 | 描述 |
    | ------------- | ------------- |
    | - | - |

    方法：

    | 方法名 | 描述 |
    | ------------- | ------------- |
    | - | - |

    ---

    ## 流程图

    // 上传流程图

    ## 时序图

    // 上传时序图

    ## 附件

    // 上传附件

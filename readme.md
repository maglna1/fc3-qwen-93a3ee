
> 注：当前项目为 Serverless Devs 应用，由于应用中会存在需要初始化才可运行的变量（例如应用部署地区、函数名等等），所以**不推荐**直接 Clone 本仓库到本地进行部署或直接复制 s.yaml 使用，**强烈推荐**通过 `s init ${模版名称}` 的方法或应用中心进行初始化，详情可参考[部署 & 体验](#部署--体验) 。

# fc3-qwen 帮助文档
<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc3-qwen&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=fc3-qwen" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc3-qwen&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=fc3-qwen" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=fc3-qwen&type=packageDownload">
  </a>
</p>

<description>

部署通义千问客户端

</description>

<codeUrl>



</codeUrl>
<preview>



</preview>


## 前期准备

使用该项目，您需要有开通以下服务并拥有对应权限：

<service>



| 服务/业务 |  权限  | 相关文档 |
| --- |  --- | --- |
| 函数计算 |  创建函数 | [帮助文档](https://help.aliyun.com/product/2508973.html) [计费文档](https://help.aliyun.com/document_detail/2512928.html) |

</service>

<remark>



</remark>

<disclaimers>



</disclaimers>

## 部署 & 体验

<appcenter>
   
- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=fc3-qwen) ，
  [![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=fc3-qwen) 该应用。
   
</appcenter>
<deploy>
    
- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
  - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://docs.serverless-devs.com/fc/config) ；
  - 初始化项目：`s init fc3-qwen -d fc3-qwen`
  - 进入项目，并进行项目部署：`cd fc3-qwen && s deploy -y`
   
</deploy>

## 案例介绍

<appdetail id="flushContent">

基于本案例，您可以将 通义千问的API服务 以及 [ChatGPT-Next-Web](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web) 客户端快速部署到函数计算FC，实现自定义的AI助手，体验智能应用的魅力。

[ChatGPT-Next-Web](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web) 是社区超火爆的 ChatGPT 应用，以易用，高性能，流畅的体验吸引了众多开发者，搭配国内的领先的阿里云千问基础模型，您可以实现一个专属的AI助手，同时作为开发者也可以在此基础上实现
二次开发调试，定制您自己的AI服务。

构建AI应用需要进行后端API服务的调用及调试，前端交互界面的开发。此外还要进行应用部署服务等复杂操作， 借助Serverless开发平台，简单、方便地将 这一组合方案部署至函数计算，快速感受 AIGC 的魅力。

</appdetail>

## 使用流程

<usedetail id="flushContent">

1. 访问Serverless开发平台，选择fc3-qwen应用模板进行部署
2. 输入地域，客户端访问秘钥等关键信息
![部署](https://img.alicdn.com/imgextra/i2/O1CN0107H2rg1UZhm75ecgA_!!6000000002532-0-tps-3382-1146.jpg)
![部署](https://img.alicdn.com/imgextra/i4/O1CN01BXPAaA1TELh1STZog_!!6000000002350-0-tps-3290-1092.jpg)
3. 部署成功后访问 client开头的域名，等待页面渲染
![访问](https://img.alicdn.com/imgextra/i2/O1CN01NqKVrX1JTKUQw3Fmq_!!6000000001029-0-tps-3578-1804.jpg)
4. 输入2步骤中设置的客户端访问秘钥，进入页面进行问答
![访问](https://img.alicdn.com/imgextra/i3/O1CN01UlHkOf1I68ouAY5Ka_!!6000000000843-0-tps-2514-1756.jpg)
![访问](https://img.alicdn.com/imgextra/i4/O1CN01AGfjmJ1SgSNnF1IgW_!!6000000002276-0-tps-2432-1694.jpg)
![访问](https://img.alicdn.com/imgextra/i2/O1CN01U99QET1xkoEbjqqv8_!!6000000006482-0-tps-2462-1702.jpg)

</usedetail>

## 注意事项

<matters id="flushContent">
</matters>


<devgroup>


## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">  

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <center>微信公众号：`serverless`</center>                                                                                         | <center>微信小助手：`xiaojiangwh`</center>                                                                                        | <center>钉钉交流群：`33947367`</center>                                                                                           |
</p>
</devgroup>

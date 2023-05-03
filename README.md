# petKnow

backend test coverage:

[![Coverage Status](https://coveralls.io/repos/github/sunpochin/petKnow-be/badge.svg?branch=main)](https://coveralls.io/github/sunpochin/petKnow-be?branch=main)

## 安裝環境

使用下列命令安裝 Node.js 和 Yarn：

```
# macOS
brew install node
brew install yarn

# Ubuntu/Debian
sudo apt-get install nodejs
sudo apt-get install yarn

# Windows
choco install nodejs
npm install -g yarn
```

## 安裝相依套件

使用 Yarn 安裝相依套件：

    yarn install

## 開發模式

使用下列命令啟動開發伺服器：

    yarn dev

若需要使用 nodemon 監聽檔案變化自動重啟伺服器，可使用以下命令：

    yarn nodemon

## 使用 Swagger 自動生成 API 文件

使用以下命令使用 Swagger 將 YAML 或 JSON 文件轉換為 OpenAPI 文件並自動生成 API 文件：

    yarn swagger

API 文件會被生成在 /api-docs 路徑下，可在瀏覽器中打開該路徑以查看 API 文件。

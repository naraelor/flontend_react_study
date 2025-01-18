# ベースイメージとして Node.js を使用
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install --verbose

# 必要な追加依存関係（PostCSS や Autoprefixer）をインストール
RUN npm install postcss autoprefixer

# ソースコードをコピー
COPY . .

# アプリをビルド
RUN npm run build

EXPOSE 3000

# アプリを起動
CMD ["npm", "run", "start"]

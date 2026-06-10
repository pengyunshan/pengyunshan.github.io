# 部署到 GitHub Pages

## 方法一：通过 GitHub 网页操作（推荐新手）

1. 登录 GitHub，创建新仓库，仓库名设为 `pengyunshan.github.io`
2. 上传 `personal-site/` 文件夹内的所有文件到仓库根目录
3. 进入仓库 → Settings → Pages → Source 选择 `main` 分支
4. 等几分钟，访问 `https://pengyunshan.github.io` 即可

## 方法二：通过命令行

```bash
# 1. 创建仓库
cd /Users/yunshanpeng/WorkBuddy/2026-06-10-21-39-10/personal-site
git init
git add .
git commit -m "Initial commit: personal homepage"

# 2. 在 GitHub 创建 pengyunshan.github.io 仓库后
git remote add origin https://github.com/pengyunshan/pengyunshan.github.io.git
git branch -M main
git push -u origin main

# 3. 在仓库 Settings → Pages → Source 选择 main 分支
# 访问 https://pengyunshan.github.io
```

## 替换占位内容

- **个人照片**：将照片命名为 `self.jpg` 放入 `images/` 目录，然后修改 index.html 中的 `.photo-placeholder` 部分
- **Logo 图片**：将公司/学校 logo 放入 `images/` 目录（如 `logo_kuaishou.png`、`logo_bit.png`）
- **论文信息**：编辑 index.html 中 Publications 部分，替换占位论文
- **新闻动态**：编辑 index.html 中 News 部分
- **社交链接**：更新 `social-links` 区域的链接地址

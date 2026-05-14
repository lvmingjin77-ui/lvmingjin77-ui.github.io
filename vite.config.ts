import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages 地址规则：
 * - 用户站：<user>.github.io 仓库 → 站点在域名根路径，base 为 "/"
 * - 项目站：其它仓库 → 站点在 /仓库名/，base 须一致，否则资源 404
 * 在 GitHub Actions 里会自动存在 GITHUB_REPOSITORY=owner/repo；本地构建保持 "/"。
 */
function githubPagesBase(): string {
  const r = process.env.GITHUB_REPOSITORY;
  if (!r || !r.includes("/")) return "/";
  const [owner, repo] = r.split("/", 2) as [string, string];
  if (!owner || !repo) return "/";
  if (repo === `${owner}.github.io`) return "/";
  return `/${repo}/`;
}

export default defineConfig({
  base: githubPagesBase(),
  plugins: [react()],
});

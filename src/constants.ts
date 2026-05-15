/** 首选联络邮箱（华科校园邮箱）；`{{EMAIL}}` 解析与邮件链接默认 */
export const SITE_EMAIL = "m202574226@hust.edu.cn";

/** 个人备用邮箱 */
export const PERSONAL_EMAIL = "13476140773@163.com";

/**
 * 在网页版 Gmail 中打开「撰写」并预填收件人（不依赖 mailto:）。
 * @see https://support.google.com/mail/answer/181472 (compose URL parameters)
 */
export function gmailComposeHref(email: string): string {
  const trimmed = email.trim();
  if (!trimmed) return "#";
  const params = new URLSearchParams({ view: "cm", fs: "1", to: trimmed });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/** 证件照：放在 public/ 下 */
export const PROFILE_PHOTO_SRC = "/证件照.jpg";

/** 本机是否已点赞（localStorage，仅防同一浏览器重复点击） */
export const LIKE_STORAGE_KEY = "pp-hero-liked";

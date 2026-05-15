/**
 * 全站累计点赞（CountAPI 替代服务，原 countapi.xyz 已停服）
 * @see https://countapi.mileshilliard.com/
 */
const KEY = "lvmingjin-personal-page-hero-likes";
const BASE = "https://countapi.mileshilliard.com/api/v1";

type CountPayload = { value?: string | number };

function parseValue(data: CountPayload): number | null {
  const raw = data.value;
  const n = typeof raw === "string" ? Number.parseInt(raw, 10) : Number(raw);
  return Number.isFinite(n) && n >= 0 ? n : null;
}

/** 读取全站累计点赞数 */
export async function fetchLikeCount(): Promise<number | null> {
  try {
    const res = await fetch(`${BASE}/get/${KEY}`);
    if (res.status === 404) return 0;
    if (!res.ok) return null;
    const data = (await res.json()) as CountPayload;
    return parseValue(data);
  } catch {
    return null;
  }
}

/** 点赞 +1，返回最新累计值 */
export async function incrementLikeCount(): Promise<number | null> {
  try {
    const res = await fetch(`${BASE}/hit/${KEY}`);
    if (!res.ok) return null;
    const data = (await res.json()) as CountPayload;
    return parseValue(data);
  } catch {
    return null;
  }
}

/** 取消点赞 -1，返回最新累计值 */
export async function decrementLikeCount(): Promise<number | null> {
  try {
    const current = await fetchLikeCount();
    if (current === null) return null;
    const next = Math.max(0, current - 1);
    const res = await fetch(`${BASE}/set/${KEY}?value=${next}`);
    if (!res.ok) return null;
    const data = (await res.json()) as CountPayload;
    return parseValue(data);
  } catch {
    return null;
  }
}

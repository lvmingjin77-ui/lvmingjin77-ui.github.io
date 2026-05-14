import { SITE_EMAIL, PERSONAL_EMAIL, gmailComposeHref } from "./constants";

export type Lang = "zh" | "en";

export type TimelineDetailBlock = {
  label: string;
  text: string;
};

export type TimelineEntry = {
  period: string;
  title: string;
  /** 单段说明；与 detailBlocks 二选一展示时优先使用 detailBlocks */
  detail: string;
  /** 分块排版（如成绩 / 英语 / 获奖） */
  detailBlocks?: TimelineDetailBlock[];
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

/** Hero 邮箱块中单条（value / href 可含 EMAIL_TOKEN） */
export type HeroEmailRow = {
  value: string;
  href: string;
};

export type Paper = {
  title: string;
  venue: string;
  authorRole: string;
  summary: string;
  href?: string;
  /** 摘要下方外链文案，如「在 arXiv 查看」 */
  linkText?: string;
  /** 卡片右侧配图（public 下路径，如 /GateMOT.png） */
  imageSrc?: string;
  /** 配图 alt 文案 */
  imageAlt?: string;
};

export type Messages = {
  meta: { title: string };
  nav: { work: string; research: string; experience: string; contact: string };
  hero: {
    photoAlt: string;
    status: string;
    name: string;
    lede: string;
    blurb: string;
    skills: string;
    contactIntro: string;
    emailsBlock: { label: string; items: HeroEmailRow[] };
    contactItems: ContactItem[];
    availability: string;
    /** 照片下方研究方向小版块 */
    researchFocus: { label: string; items: string[] };
  };
  work: {
    label: string;
    headline: string;
    items: {
      title: string;
      context: string;
      summary: string;
      bullets: string[];
      tags: string[];
      /** 可选：开源仓库链接 */
      repoHref?: string;
      /** 链接展示文案（与 repoHref 成对使用） */
      repoLinkText?: string;
    }[];
  };
  research: {
    label: string;
    headline: string;
    papers: Paper[];
  };
  experience: {
    label: string;
    headline: string;
    education: { section: string; entries: TimelineEntry[] };
    career: { section: string; entries: TimelineEntry[] };
    belief: string;
    stack: string;
  };
  contact: {
    label: string;
    line: string;
    /** 邮箱链到 Gmail 网页撰写时的说明（title / 无障碍） */
    emailWebComposeHint: string;
    /** 页脚完整联络方式（邮箱、电话等） */
    footerChannels: { label: string; value: string; href: string }[];
  };
};

export const EMAIL_TOKEN = "{{EMAIL}}";

function withEmail(s: string, email: string) {
  return s.split(EMAIL_TOKEN).join(email);
}

export function resolveContactItem(item: ContactItem, email: string): ContactItem {
  return {
    label: item.label,
    value: withEmail(item.value, email),
    href: item.href ? withEmail(item.href, email) : undefined,
  };
}

export function resolveHeroEmailRow(row: HeroEmailRow, email: string): HeroEmailRow {
  return {
    value: withEmail(row.value, email),
    href: withEmail(row.href, email),
  };
}

export const messages: Record<Lang, Messages> = {
  zh: {
    meta: { title: "吕明锦 — 算法与智能系统" },
    nav: { work: "项目", research: "论文", experience: "经历", contact: "联络" },
    hero: {
      photoAlt: "吕明锦证件照",
      status: "武汉 · 华中科技大学 · 计算机技术硕士在读",
      name: "吕明锦",
      lede: "",
      blurb: "",
      skills:
        "Python · C++ · PyTorch · 多智能体（Multi-Agent）· AI Agent / AI Coding Agent · 计算机视觉 · 强化学习（SFT / GRPO）· Stable Diffusion / VAR · Linux · Git",
      contactIntro: "联系方式",
      emailsBlock: {
        label: "邮箱",
        items: [
          { value: EMAIL_TOKEN, href: gmailComposeHref(SITE_EMAIL) },
          { value: PERSONAL_EMAIL, href: gmailComposeHref(PERSONAL_EMAIL) },
        ],
      },
      contactItems: [
        { label: "手机", value: "134-7614-0773", href: "tel:+8613476140773" },
        { label: "微信", value: "lmj7926" },
        { label: "简历 PDF", value: "下载简历", href: "/简历-吕明锦.pdf" },
      ],
      availability: "欢迎校招、实习与技术合作通过邮件联系。",
      researchFocus: {
        label: "研究方向",
        items: ["多智能体编排", "多目标跟踪"],
      },
    },
    work: {
      label: "",
      headline: "项目经历",
      items: [
        {
          title: "Multi-Agent 金融决策与 A 股投研系统",
          context: "智能体 · 量化 / 投研",
          summary:
            "跨市场量化：构建异质化智能体对多维数据做策略模拟与分级权重，为上层智能体提供多维度决策依据，缓解单一智能体回测风险；设计底层多智能体动态博弈以稳定收益表现。A 股场景下采用双 Agent：数据 Agent 采集行情与资讯并生成报告，决策 Agent 完成筛选、风控与模拟交易，对接妙想金融 API、AkShare 等构建数据 Pipeline。",
          bullets: ["跨市场多智能体决策", "双 Agent 投研流水线"],
          tags: ["Multi-Agent", "Python", "FinTech", "API"],
        },
        {
          title: "面向多元运动模式的轨迹推理方法研究",
          context: "多目标跟踪 · 混合专家 MoE · SSM",
          summary:
            "针对复杂运动模式下轨迹预测失效问题，提出融合 MoE 与 SSM 的轨迹推理框架：利用 SSM 建模长序列依赖，通过 MoE 门控自适应区分线性/非线性运动专家，提升对突发机动的鲁棒性。",
          bullets: ["MoE + SSM 联合建模", "多运动模式自适应专家选择"],
          tags: ["PyTorch", "MOT", "MoE", "SSM"],
          repoHref: "https://github.com/lvmingjin77-ui/SSM-MOE-Track",
          repoLinkText: "GitHub 仓库 →",
        },
        {
          title: "基于 OpenClaw 的 Multi-Agent A 股投研决策系统设计",
          context: "智能体 · A 股投研",
          summary:
            "采用双 Agent 协作架构：数据 Agent 负责每日盘前、盘后实时采集市场行情、资金流向、行业板块、财经资讯等数据，并自动生成市场分析报告；决策 Agent 基于数据完成投资标的筛选、风控检查与模拟交易执行。",
          bullets: [
            "通过妙想金融 API、AkShare 等工具构建数据 Pipeline，自动完成市场监控与报告生成。",
            "显著提升了投资决策效率。",
          ],
          tags: ["OpenClaw", "Multi-Agent", "AkShare", "Python", "FinTech"],
        },
        {
          title: "基于AIoT的工业监测预警及辅助决策系统",
          context: "物联网 · AIoT",
          summary:
            "负责工业视觉监测链路中的算法集成与部署验证，完成目标检测、目标跟踪与行为识别模块的组合式落地。",
          bullets: [
            "基于 YOLO、DeepSORT、SlowFast 搭建从视频流采集、推理、异常识别到预警输出的完整处理流程，验证多模型边缘端部署可行性。",
            "参与系统吞吐、时延与稳定性验证，具备多模型串联推理与场景化落地经验。",
          ],
          tags: ["AIoT", "YOLO", "DeepSORT", "SlowFast", "边缘部署"],
          repoHref: "https://github.com/lvmingjin77-ui/FactorySystem",
          repoLinkText: "GitHub 仓库 →",
        },
        {
          title: "基于文心大模型的智能四足机器狗森林巡检系统",
          context: "具身智能 · 智能机器人",
          summary:
            "探索大模型在具身智能中的应用：在四足机器人平台上搭建森林巡检系统，打通从视觉感知到语义决策的链路，利用文心大模型完成环境理解与巡航逻辑判断，实现自主决策与任务分发。",
          bullets: ["视觉—语义决策链路设计", "大模型驱动的巡航与任务编排"],
          tags: ["文心大模型", "具身智能", "机器人", "Python"],
          repoHref: "https://github.com/lvmingjin77-ui/UnitreeGo1",
          repoLinkText: "GitHub 仓库 →",
        },
      ],
    },
    research: {
      label: "",
      headline: "论文发表",
      papers: [
        {
          title: "GateMOT: Q-Gated Attention for Dense Object Tracking",
          venue: "arXiv:2604.26353 · cs.CV（预印本）",
          authorRole: "第一作者",
          href: "https://arxiv.org/abs/2604.26353",
          linkText: "在 arXiv 打开论文 →",
          imageSrc: "/GateMOT.png",
          imageAlt: "GateMOT 论文配图",
          summary:
            "针对多目标跟踪中高分辨率特征导致 Attention 计算冗余的问题，提出 GateMOT：设计 Q-Gated Linear Attention，将 Query 重构为可学习门控，以元素级操作替代部分矩阵乘法，将复杂度由 O(N²) 降至 O(N)；并构建紧耦合统一解码器并行处理检测、运动预测与 ReID，缓解多任务特征冲突。",
        },
      ],
    },
    experience: {
      label: "",
      headline: "教育背景与实习经历",
      education: {
        section: "教育背景",
        entries: [
          {
            period: "2025.09 — 至今",
            title: "华中科技大学 · 计算机技术 · 硕士（在读）",
            detail: "在读。延续计算机视觉的多目标跟踪领域算法与多智能系统编排方向",
          },
          {
            period: "2021.10 — 2025.06",
            title: "武汉理工大学 · 软件工程（试点）· 本科",
            detail: "",
            detailBlocks: [
              { label: "成绩", text: "学分绩点 4.234 / 5.0，综合排名 3 / 36" },
              { label: "英语", text: "CET-4 616，CET-6 567" },
              {
                label: "校级荣誉与奖学金",
                text: "多次校三好学生、校优秀共青团员、校一等奖学金与三等奖学金",
              },
              {
                label: "国家级竞赛",
                text: "英语竞赛一等奖；数学竞赛三等奖；「中国软件杯」大学生软件设计大赛国家级一等奖；全国大学生服务外包创新创业大赛国家级三等奖",
              },
            ],
          },
        ],
      },
      career: {
        section: "实习经历",
        entries: [
          {
            period: "2025.02 — 2025.06",
            title: "VIVO 蓝图实验室 · 影像算法研究部（质量增强算法中心）· 助理算法工程师",
            detail:
              "参与图像生成（i2i）对齐与画质稳定性相关工作；探索将 SFT 与 GRPO 迁移至图像生成管线，负责复杂场景画质增强与 Stable Diffusion / VAR 调研，构建 FAR 去噪与模糊判定等方案。",
          },
          {
            period: "2024.11 — 2025.01",
            title: "博联众科（武汉）科技有限公司 · 研发中心 · 软件开发实习生",
            detail: "参与 EIT 肺部成像产品研发，负责前端交互架构搭建与说明文档体系构建，支持产品合规与上市相关工作。",
          },
        ],
      },
      belief:
        "同时具备算法研究与系统落地视角：重视可验证的实验与可交付的工程边界，关注 Agent 在金融决策与复杂任务自动化中的稳定部署。",
      stack: "常用栈：Python · C++ · PyTorch · Linux · Git · 多智能体编排 · 视觉/生成模型管线",
    },
    contact: {
      label: "联络",
      line:
        "欢迎优先通过下方学校邮箱联系；也可使用个人邮箱或电话沟通校招、实习与课题合作。完整简历 PDF 可在页面顶部「联系方式」区块下载。邮箱链接会在 Gmail 网页版新标签页打开撰写（需登录 Google）。",
      emailWebComposeHint: "在 Gmail 网页中新标签页打开撰写（需登录 Google）",
      footerChannels: [
        {
          label: "学校邮箱",
          value: SITE_EMAIL,
          href: gmailComposeHref(SITE_EMAIL),
        },
        {
          label: "个人邮箱",
          value: PERSONAL_EMAIL,
          href: gmailComposeHref(PERSONAL_EMAIL),
        },
        {
          label: "手机",
          value: "+86 134-7614-0773",
          href: "tel:+8613476140773",
        },
      ],
    },
  },
  en: {
    meta: { title: "Mingjin Lü — Algorithms & intelligent systems" },
    nav: { work: "Projects", research: "Papers", experience: "Experience", contact: "Contact" },
    hero: {
      photoAlt: "Portrait of Mingjin Lü",
      status: "Wuhan · M.Sc. Computer Technology, HUST (in progress)",
      name: "Mingjin Lü",
      lede: "",
      blurb: "",
      skills:
        "Python · C++ · PyTorch · Multi-agent systems · AI / coding agents · Computer vision · RL (SFT / GRPO) · Stable Diffusion / VAR · Linux · Git",
      contactIntro: "Contact",
      emailsBlock: {
        label: "Email",
        items: [
          { value: EMAIL_TOKEN, href: gmailComposeHref(SITE_EMAIL) },
          { value: PERSONAL_EMAIL, href: gmailComposeHref(PERSONAL_EMAIL) },
        ],
      },
      contactItems: [
        { label: "Phone", value: "+86 134-7614-0773", href: "tel:+8613476140773" },
        { label: "WeChat", value: "lmj7926" },
        { label: "Résumé (PDF)", value: "Download PDF", href: "/简历-吕明锦.pdf" },
      ],
      availability: "Reach out via email for campus hiring, internships, or collaborations.",
      researchFocus: {
        label: "Research focus",
        items: ["Multi-agent orchestration", "Multi-object tracking"],
      },
    },
    work: {
      label: "",
      headline: "Projects",
      items: [
        {
          title: "Multi-agent quant & A-share research assistant",
          context: "Agents · quant / research automation",
          summary:
            "Cross-market setup with heterogeneous agents for strategy simulation and tiered weighting; dual-agent A-share stack with a data agent for ingestion/reporting and a decision agent for screening, risk checks, and simulated trading (Miaoxiang API, AkShare, etc.).",
          bullets: ["Heterogeneous multi-agent decisions", "Dual-agent research pipeline"],
          tags: ["Multi-agent", "Python", "FinTech"],
        },
        {
          title: "Trajectory reasoning with MoE + SSM",
          context: "MOT · mixture-of-experts · state-space models",
          summary:
            "Addresses prediction failures under diverse motion by combining MoE gating with SSM sequence modeling—experts specialize in linear vs. highly non-linear motion, improving robustness to sudden maneuvers.",
          bullets: ["MoE + SSM hybrid framework", "Adaptive expert routing"],
          tags: ["PyTorch", "MOT", "MoE", "SSM"],
          repoHref: "https://github.com/lvmingjin77-ui/SSM-MOE-Track",
          repoLinkText: "GitHub →",
        },
        {
          title: "OpenClaw-based Multi-Agent A-share research & trading decision system",
          context: "Agents · A-share research",
          summary:
            "Dual-agent architecture: a data agent collects pre- and post-market quotes, capital flows, sectors, and financial news, then auto-generates research briefs; a decision agent screens targets, performs risk checks, and runs simulated trades from that input.",
          bullets: [
            "Pipelines built with Miaoxiang Finance APIs and AkShare for monitoring, ingestion, and report generation.",
            "Improved research workflow speed and decision quality.",
          ],
          tags: ["OpenClaw", "Multi-Agent", "AkShare", "Python", "FinTech"],
        },
        {
          title: "AIoT-based industrial monitoring, alerting & decision support",
          context: "IoT · AIoT",
          summary:
            "Integrated and validated algorithms in the industrial vision monitoring chain, shipping detection, tracking, and action recognition as composable modules.",
          bullets: [
            "Built an end-to-end pipeline from video ingest through inference, anomaly detection, and alerting with YOLO, DeepSORT, and SlowFast; validated multi-model edge deployment.",
            "Contributed to throughput, latency, and stability testing; hands-on with cascaded multi-model inference and scenario-driven rollout.",
          ],
          tags: ["AIoT", "YOLO", "DeepSORT", "SlowFast", "Edge"],
          repoHref: "https://github.com/lvmingjin77-ui/FactorySystem",
          repoLinkText: "GitHub →",
        },
        {
          title: "Forest patrol with quadruped robots + Wenxin LLM",
          context: "Embodied AI · robotics",
          summary:
            "Explores LLMs for embodied AI on a quadruped platform: perception-to-decision pipeline, semantic scene understanding with Wenxin, autonomous patrol logic and task dispatch.",
          bullets: ["Vision-to-language decision chain", "LLM-driven patrol orchestration"],
          tags: ["Wenxin", "Embodied AI", "Python"],
          repoHref: "https://github.com/lvmingjin77-ui/UnitreeGo1",
          repoLinkText: "GitHub →",
        },
      ],
    },
    research: {
      label: "",
      headline: "Publications",
      papers: [
        {
          title: "GateMOT: Q-Gated Attention for Dense Object Tracking",
          venue: "arXiv:2604.26353 · cs.CV (preprint)",
          authorRole: "First author",
          href: "https://arxiv.org/abs/2604.26353",
          linkText: "Open on arXiv →",
          imageSrc: "/GateMOT.png",
          imageAlt: "GateMOT paper figure",
          summary:
            "Targets redundant attention on high-resolution feature maps in dense MOT: introduces GateMOT with Q-Gated Linear Attention—queries as learnable gates and element-wise ops to replace part of the quadratic matmuls, reducing complexity toward O(N); a tightly coupled decoder jointly handles detection, motion forecasting, and ReID to mitigate task conflicts.",
        },
      ],
    },
    experience: {
      label: "",
      headline: "Education & internships",
      education: {
        section: "Education",
        entries: [
          {
            period: "Sep 2025 — present",
            title: "Huazhong University of Science and Technology · M.Sc. Computer Technology",
            detail: "In progress; continuing work on dense multi-object tracking in computer vision and multi-agent system orchestration.",
          },
          {
            period: "Oct 2021 — Jun 2025",
            title: "Wuhan University of Technology · B.Eng. Software Engineering (pilot)",
            detail: "",
            detailBlocks: [
              { label: "Academic", text: "GPA 4.234 / 5.0, class rank 3 / 36" },
              { label: "English", text: "CET-4 616, CET-6 567" },
              {
                label: "University honors",
                text: "Merit student (multiple times), outstanding league member, first- and third-class merit scholarships.",
              },
              {
                label: "National competitions",
                text: "National English contest (1st prize), national math contest (3rd prize), China Software Cup (1st prize, national), National University Service Outsourcing & Innovation Contest (3rd prize, national).",
              },
            ],
          },
        ],
      },
      career: {
        section: "Internships",
        entries: [
          {
            period: "Feb 2025 — Jun 2025",
            title: "VIVO Blueprint Lab · imaging algorithms (quality enhancement) · intern engineer",
            detail:
              "Image generation (i2i) alignment and quality; SFT/GRPO-style methods in the gen stack; FAR denoising and blur detection under challenging capture conditions.",
          },
          {
            period: "Nov 2024 — Jan 2025",
            title: "Bolink (Wuhan) Technology Co., Ltd. · R&D center · software intern",
            detail: "EIT lung imaging product: front-end interaction architecture and documentation to support compliance and launch.",
          },
        ],
      },
      belief:
        "Care equally about reproducible experiments and shippable engineering—especially stable deployment of agents for finance and automation.",
      stack: "Stack: Python · C++ · PyTorch · Linux · Git · multi-agent orchestration · vision / generative pipelines",
    },
    contact: {
      label: "Contact",
      line:
        "Prefer the school email below for campus hiring, internships, or collaborations; personal email and phone are also listed. The PDF résumé is linked in the contact block at the top of the page. Email links open Gmail compose in a new tab (Google sign-in required).",
      emailWebComposeHint: "Opens Gmail compose in a new tab (Google sign-in required)",
      footerChannels: [
        {
          label: "School email (HUST)",
          value: SITE_EMAIL,
          href: gmailComposeHref(SITE_EMAIL),
        },
        {
          label: "Personal email",
          value: PERSONAL_EMAIL,
          href: gmailComposeHref(PERSONAL_EMAIL),
        },
        {
          label: "Phone",
          value: "+86 134-7614-0773",
          href: "tel:+8613476140773",
        },
      ],
    },
  },
};

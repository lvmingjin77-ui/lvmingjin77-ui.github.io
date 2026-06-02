import { SITE_EMAIL, PERSONAL_EMAIL, gmailComposeHref } from "./constants";

export type Lang = "zh" | "en";

export type TimelineDetailBlock = {
  label: string;
  text: string;
};

export type TimelineEntry = {
  period: string;
  title: string;
  detail: string;
  detailBlocks?: TimelineDetailBlock[];
};

export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type HeroEmailRow = {
  value: string;
  href: string;
};

export type ProfileLink = {
  label: string;
  value: string;
  href: string;
};

export type NewsItem = {
  date: string;
  text: string;
  href?: string;
};

export type PaperLink = {
  label: string;
  href: string;
};

export type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  authorRole: string;
  summary: string;
  href?: string;
  links: PaperLink[];
  imageSrc?: string;
  imageAlt?: string;
};

export type Messages = {
  meta: { title: string; description: string };
  nav: { about: string; research: string; work: string; experience: string; contact: string; cv: string };
  hero: {
    photoAlt: string;
    status: string;
    name: string;
    role: string;
    lede: string;
    blurb: string;
    skillGroups: { label: string; items: string[] }[];
    contactIntro: string;
    emailsBlock: { label: string; items: HeroEmailRow[] };
    contactItems: ContactItem[];
    availability: string;
    researchFocus: { label: string; items: string[] };
    profileLinks: ProfileLink[];
    highlights: string[];
    quickFacts: { label: string; value: string }[];
  };
  news: {
    headline: string;
    items: NewsItem[];
  };
  work: {
    label: string;
    headline: string;
    intro: string;
    items: {
      title: string;
      context: string;
      summary: string;
      bullets: string[];
      tags: string[];
      repoHref?: string;
      repoLinkText?: string;
    }[];
    toyShelf: {
      badge: string;
      title: string;
      description: string;
      links: { label: string; href: string }[];
    };
  };
  research: {
    label: string;
    headline: string;
    intro: string;
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
    emailWebComposeHint: string;
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

export function resolveProfileLink(link: ProfileLink, email: string): ProfileLink {
  return {
    ...link,
    value: withEmail(link.value, email),
    href: withEmail(link.href, email),
  };
}

const githubHref = "https://github.com/lvmingjin77-ui";
const paperHref = "https://arxiv.org/abs/2604.26353";

export const messages: Record<Lang, Messages> = {
  zh: {
    meta: {
      title: "吕明锦 | 计算机视觉与多智能体系统",
      description: "吕明锦，华中科技大学计算机技术硕士在读，研究方向包括多目标跟踪、视觉模型与多智能体系统。",
    },
    nav: { about: "主页", research: "论文", work: "项目", experience: "经历", contact: "联络", cv: "CV" },
    hero: {
      photoAlt: "吕明锦证件照",
      status: "华中科技大学 · 计算机技术硕士在读",
      name: "吕明锦",
      role: "M.Sc. Student in Computer Technology",
      lede: "研究计算机视觉中的多目标跟踪、轨迹推理，以及面向复杂任务的多智能体系统编排。",
      blurb:
        "我关注可复现实验与可落地系统之间的连接：一方面做高密度目标跟踪和运动建模，另一方面探索 Agent 在金融投研、自动化决策与工程工作流中的稳定部署。",
      skillGroups: [
        { label: "Research", items: ["Multi-Object Tracking", "Trajectory Reasoning", "Multi-Agent Systems"] },
        { label: "Methods", items: ["Attention", "MoE", "SSM", "SFT / GRPO"] },
        { label: "Engineering", items: ["Python", "C++", "PyTorch", "Linux"] },
      ],
      contactIntro: "Quick links",
      emailsBlock: {
        label: "Email",
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
      availability: "欢迎通过邮件联系校招、实习、论文交流与技术合作。",
      researchFocus: {
        label: "Research Interests",
        items: ["Dense multi-object tracking", "Motion reasoning with MoE/SSM", "Agentic decision systems"],
      },
      profileLinks: [
        { label: "Email", value: SITE_EMAIL, href: gmailComposeHref(SITE_EMAIL) },
        { label: "CV", value: "PDF", href: "/简历-吕明锦.pdf" },
        { label: "GitHub", value: "lvmingjin77-ui", href: githubHref },
        { label: "arXiv", value: "GateMOT", href: paperHref },
      ],
      highlights: [
        "第一作者预印本 GateMOT: Q-Gated Attention for Dense Object Tracking",
        "华中科技大学计算机技术硕士在读，本科综合排名 3 / 36",
        "VIVO 蓝图实验室影像算法研究部实习，参与图像生成与画质增强相关工作",
      ],
      quickFacts: [
        { label: "Affiliation", value: "HUST" },
        { label: "Location", value: "Wuhan, China" },
        { label: "Focus", value: "Vision + Agents" },
      ],
    },
    news: {
      headline: "最新动态",
      items: [
        { date: "2026.04", text: "GateMOT: Q-Gated Attention for Dense Object Tracking 发布 arXiv 预印本。", href: paperHref },
        { date: "2025.09", text: "进入华中科技大学攻读计算机技术硕士，继续研究多目标跟踪与多智能体系统。" },
        { date: "2025.02", text: "加入 VIVO 蓝图实验室影像算法研究部，参与图像生成、画质增强与稳定性相关工作。" },
      ],
    },
    research: {
      label: "Selected Publications",
      headline: "论文发表",
      intro: "优先展示论文、预印本与可复现实验链接。摘要保持短句，便于快速判断研究贡献。",
      papers: [
        {
          title: "GateMOT: Q-Gated Attention for Dense Object Tracking",
          authors: "Mingjin Lü",
          venue: "arXiv:2604.26353 · cs.CV",
          year: "2026",
          authorRole: "First author",
          href: paperHref,
          links: [{ label: "Paper", href: paperHref }],
          imageSrc: "/GateMOT.png",
          imageAlt: "GateMOT 论文方法示意图",
          summary:
            "提出 Q-Gated Linear Attention，以可学习 Query 门控和元素级操作降低高分辨率特征上的注意力冗余；统一解码器并行处理检测、运动预测与 ReID，以缓解多任务特征冲突。",
        },
      ],
    },
    work: {
      label: "Selected Projects",
      headline: "项目经历",
      intro: "项目区聚焦与研究方向相关的系统实现、实验管线和工程落地，尽量以贡献和链接为核心。",
      items: [
        {
          title: "Multi-Agent 金融决策与 A 股投研系统",
          context: "Multi-Agent · Quant Research",
          summary:
            "构建异质化智能体进行多维数据分析、策略模拟与分级权重汇总，并在 A 股场景中使用数据 Agent 与决策 Agent 形成投研流水线。",
          bullets: ["接入行情、资讯与行业板块数据，自动生成投研报告。", "将筛选、风控与模拟交易拆分为可追踪的 Agent 工作流。"],
          tags: ["Python", "Multi-Agent", "AkShare", "FinTech"],
          repoHref: "https://github.com/lvmingjin77-ui/EggyTrading",
          repoLinkText: "GitHub",
        },
        {
          title: "面向多元运动模式的轨迹推理方法研究",
          context: "MOT · MoE · SSM",
          summary:
            "针对复杂运动模式下轨迹预测失效问题，探索融合 MoE 门控与 SSM 长序列建模的轨迹推理框架。",
          bullets: ["用 SSM 建模长时序依赖。", "通过 MoE 门控区分线性与非线性运动专家，增强突发机动鲁棒性。"],
          tags: ["PyTorch", "MOT", "MoE", "SSM"],
          repoHref: "https://github.com/lvmingjin77-ui/SSM-MOE-Track",
          repoLinkText: "GitHub",
        },
        {
          title: "基于 OpenClaw 的 Multi-Agent A 股投研决策系统",
          context: "Agents · A-share Research",
          summary:
            "设计双 Agent 协作架构，覆盖盘前盘后数据采集、市场分析报告、标的筛选、风控检查与模拟交易执行。",
          bullets: ["使用妙想金融 API、AkShare 等工具构建数据 Pipeline。", "把数据处理、报告生成与决策逻辑拆成可维护模块。"],
          tags: ["OpenClaw", "Multi-Agent", "Python"],
        },
        {
          title: "基于 AIoT 的工业监测预警及辅助决策系统",
          context: "AIoT · Industrial Vision",
          summary:
            "参与工业视觉监测链路中的算法集成与部署验证，完成检测、跟踪、行为识别与异常预警模块组合。",
          bullets: ["基于 YOLO、DeepSORT、SlowFast 搭建视频流推理流程。", "参与吞吐、时延与稳定性验证，评估多模型边缘端部署可行性。"],
          tags: ["YOLO", "DeepSORT", "SlowFast", "Edge AI"],
          repoHref: "https://github.com/lvmingjin77-ui/FactorySystem",
          repoLinkText: "GitHub",
        },
        {
          title: "基于文心大模型的智能四足机器狗森林巡检系统",
          context: "Embodied AI · Robotics",
          summary:
            "在四足机器人平台上打通视觉感知、语义理解、巡航判断与任务分发链路，探索大模型在具身智能中的应用。",
          bullets: ["构建视觉到语义决策的任务链路。", "用大模型辅助环境理解、巡航逻辑判断与任务编排。"],
          tags: ["Embodied AI", "Robotics", "Python"],
          repoHref: "https://github.com/lvmingjin77-ui/UnitreeGo1",
          repoLinkText: "GitHub",
        },
      ],
      toyShelf: {
        badge: "Additional repositories",
        title: "轻量实验与小仓库",
        description: "围绕 LLM 工作流、量化研究和 On-Call Agent 的小型实验，可作为模块参考。",
        links: [
          { label: "LLM 增强的研究工作流", href: "https://github.com/lvmingjin77-ui/tenxai" },
          { label: "On-Call Agent 助手", href: "https://github.com/lvmingjin77-ui/OnCallAgent" },
        ],
      },
    },
    experience: {
      label: "Education & Experience",
      headline: "教育背景与实习经历",
      education: {
        section: "教育背景",
        entries: [
          {
            period: "2025.09 — 至今",
            title: "华中科技大学 · 计算机技术 · 硕士（在读）",
            detail: "延续计算机视觉中的多目标跟踪算法与多智能体系统编排方向。",
          },
          {
            period: "2021.10 — 2025.06",
            title: "武汉理工大学 · 软件工程（试点）· 本科",
            detail: "",
            detailBlocks: [
              { label: "成绩", text: "学分绩点 4.234 / 5.0，综合排名 3 / 36" },
              { label: "英语", text: "CET-4 616，CET-6 567" },
              { label: "荣誉", text: "多次校三好学生、校优秀共青团员、校一等奖学金与三等奖学金" },
              {
                label: "竞赛",
                text: "英语竞赛一等奖；数学竞赛三等奖；中国软件杯国家级一等奖；全国大学生服务外包创新创业大赛国家级三等奖",
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
            title: "VIVO 蓝图实验室 · 影像算法研究部 · 助理算法工程师",
            detail:
              "参与图像生成（i2i）对齐与画质稳定性相关工作；探索将 SFT 与 GRPO 迁移至图像生成管线，调研 Stable Diffusion / VAR，并构建 FAR 去噪与模糊判定方案。",
          },
          {
            period: "2024.11 — 2025.01",
            title: "博联众科（武汉）科技有限公司 · 研发中心 · 软件开发实习生",
            detail: "参与 EIT 肺部成像产品研发，负责前端交互架构搭建与说明文档体系构建，支持产品合规与上市相关工作。",
          },
        ],
      },
      belief:
        "我更愿意把主页做成可检索、可验证的学术索引：论文、代码、实验方向、工程经历都应该能被快速定位。",
      stack: "常用栈：Python · C++ · PyTorch · Linux · Git · Multi-Agent · Computer Vision",
    },
    contact: {
      label: "联络",
      line: "欢迎通过邮件联系论文交流、实习机会、校招沟通或技术合作。",
      emailWebComposeHint: "在 Gmail 网页中新标签页打开撰写（需登录 Google）",
      footerChannels: [
        { label: "学校邮箱", value: SITE_EMAIL, href: gmailComposeHref(SITE_EMAIL) },
        { label: "个人邮箱", value: PERSONAL_EMAIL, href: gmailComposeHref(PERSONAL_EMAIL) },
        { label: "手机", value: "+86 134-7614-0773", href: "tel:+8613476140773" },
      ],
    },
  },
  en: {
    meta: {
      title: "Mingjin Lü | Computer Vision & Multi-Agent Systems",
      description:
        "Mingjin Lü is an M.Sc. student in Computer Technology at HUST, working on multi-object tracking, visual models, and multi-agent systems.",
    },
    nav: { about: "About", research: "Publications", work: "Projects", experience: "Experience", contact: "Contact", cv: "CV" },
    hero: {
      photoAlt: "Portrait of Mingjin Lü",
      status: "M.Sc. Computer Technology, Huazhong University of Science and Technology",
      name: "Mingjin Lü",
      role: "M.Sc. Student in Computer Technology",
      lede: "I study multi-object tracking, trajectory reasoning, and multi-agent orchestration for complex decision workflows.",
      blurb:
        "My work connects reproducible experiments with deployable systems: dense visual tracking and motion modeling on one side, and stable agent workflows for finance, automation, and engineering tasks on the other.",
      skillGroups: [
        { label: "Research", items: ["Multi-Object Tracking", "Trajectory Reasoning", "Multi-Agent Systems"] },
        { label: "Methods", items: ["Attention", "MoE", "SSM", "SFT / GRPO"] },
        { label: "Engineering", items: ["Python", "C++", "PyTorch", "Linux"] },
      ],
      contactIntro: "Quick links",
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
        { label: "Resume PDF", value: "Download PDF", href: "/简历-吕明锦.pdf" },
      ],
      availability: "Please reach out by email for internships, campus hiring, research discussions, or collaboration.",
      researchFocus: {
        label: "Research Interests",
        items: ["Dense multi-object tracking", "Motion reasoning with MoE/SSM", "Agentic decision systems"],
      },
      profileLinks: [
        { label: "Email", value: SITE_EMAIL, href: gmailComposeHref(SITE_EMAIL) },
        { label: "CV", value: "PDF", href: "/简历-吕明锦.pdf" },
        { label: "GitHub", value: "lvmingjin77-ui", href: githubHref },
        { label: "arXiv", value: "GateMOT", href: paperHref },
      ],
      highlights: [
        "First-author preprint: GateMOT: Q-Gated Attention for Dense Object Tracking.",
        "M.Sc. student at HUST; undergraduate GPA rank 3 / 36.",
        "Former imaging algorithm intern at VIVO Blueprint Lab, working on generation and image quality enhancement.",
      ],
      quickFacts: [
        { label: "Affiliation", value: "HUST" },
        { label: "Location", value: "Wuhan, China" },
        { label: "Focus", value: "Vision + Agents" },
      ],
    },
    news: {
      headline: "News",
      items: [
        { date: "Apr 2026", text: "GateMOT: Q-Gated Attention for Dense Object Tracking released as an arXiv preprint.", href: paperHref },
        { date: "Sep 2025", text: "Started M.Sc. study in Computer Technology at Huazhong University of Science and Technology." },
        { date: "Feb 2025", text: "Joined VIVO Blueprint Lab as an imaging algorithm intern." },
      ],
    },
    research: {
      label: "Selected Publications",
      headline: "Publications",
      intro: "Selected papers and preprints, with direct links to papers and reproducible artifacts when available.",
      papers: [
        {
          title: "GateMOT: Q-Gated Attention for Dense Object Tracking",
          authors: "Mingjin Lü",
          venue: "arXiv:2604.26353 · cs.CV",
          year: "2026",
          authorRole: "First author",
          href: paperHref,
          links: [{ label: "Paper", href: paperHref }],
          imageSrc: "/GateMOT.png",
          imageAlt: "GateMOT method figure",
          summary:
            "Introduces Q-Gated Linear Attention to reduce redundant attention over high-resolution feature maps, and a unified decoder for detection, motion forecasting, and ReID.",
        },
      ],
    },
    work: {
      label: "Selected Projects",
      headline: "Projects",
      intro: "Research-adjacent systems, experiment pipelines, and engineering implementations, condensed for quick scanning.",
      items: [
        {
          title: "Multi-agent quant and A-share research assistant",
          context: "Multi-Agent · Quant Research",
          summary:
            "Built heterogeneous agents for market data analysis, strategy simulation, tiered weighting, and A-share research workflows.",
          bullets: ["Integrated market, news, and sector data to produce research briefs.", "Separated screening, risk checks, and simulated trading into traceable agent workflows."],
          tags: ["Python", "Multi-Agent", "AkShare", "FinTech"],
          repoHref: "https://github.com/lvmingjin77-ui/EggyTrading",
          repoLinkText: "GitHub",
        },
        {
          title: "Trajectory reasoning with MoE + SSM",
          context: "MOT · MoE · SSM",
          summary:
            "Explored a trajectory reasoning framework that combines MoE routing with SSM sequence modeling for diverse motion patterns.",
          bullets: ["Used SSMs to model long-range temporal dependencies.", "Routed linear and nonlinear motion patterns through adaptive experts."],
          tags: ["PyTorch", "MOT", "MoE", "SSM"],
          repoHref: "https://github.com/lvmingjin77-ui/SSM-MOE-Track",
          repoLinkText: "GitHub",
        },
        {
          title: "OpenClaw-based A-share research decision system",
          context: "Agents · A-share Research",
          summary:
            "Designed a dual-agent architecture for data ingestion, research reports, target screening, risk checks, and simulated trades.",
          bullets: ["Built data pipelines with Miaoxiang Finance APIs and AkShare.", "Modularized data processing, reporting, and decision logic."],
          tags: ["OpenClaw", "Multi-Agent", "Python"],
        },
        {
          title: "AIoT industrial monitoring and alerting system",
          context: "AIoT · Industrial Vision",
          summary:
            "Integrated detection, tracking, action recognition, and alerting modules in an industrial vision monitoring pipeline.",
          bullets: ["Built video inference flow with YOLO, DeepSORT, and SlowFast.", "Contributed to throughput, latency, and stability validation for edge deployment."],
          tags: ["YOLO", "DeepSORT", "SlowFast", "Edge AI"],
          repoHref: "https://github.com/lvmingjin77-ui/FactorySystem",
          repoLinkText: "GitHub",
        },
        {
          title: "Forest patrol system with quadruped robots and Wenxin LLM",
          context: "Embodied AI · Robotics",
          summary:
            "Connected visual perception, semantic reasoning, patrol decisions, and task dispatch on a quadruped robot platform.",
          bullets: ["Built a vision-to-language decision workflow.", "Used an LLM for scene understanding, patrol logic, and task orchestration."],
          tags: ["Embodied AI", "Robotics", "Python"],
          repoHref: "https://github.com/lvmingjin77-ui/UnitreeGo1",
          repoLinkText: "GitHub",
        },
      ],
      toyShelf: {
        badge: "Additional repositories",
        title: "Small experiments",
        description: "Compact experiments around LLM workflows, quant research, and on-call agents.",
        links: [
          { label: "LLM-augmented research workflow", href: "https://github.com/lvmingjin77-ui/tenxai" },
          { label: "On-call assistant agent", href: "https://github.com/lvmingjin77-ui/OnCallAgent" },
        ],
      },
    },
    experience: {
      label: "Education & Experience",
      headline: "Education & Experience",
      education: {
        section: "Education",
        entries: [
          {
            period: "Sep 2025 — Present",
            title: "Huazhong University of Science and Technology · M.Sc. Computer Technology",
            detail: "Continuing research in multi-object tracking and multi-agent system orchestration.",
          },
          {
            period: "Oct 2021 — Jun 2025",
            title: "Wuhan University of Technology · B.Eng. Software Engineering",
            detail: "",
            detailBlocks: [
              { label: "Academic", text: "GPA 4.234 / 5.0, class rank 3 / 36" },
              { label: "English", text: "CET-4 616, CET-6 567" },
              { label: "Honors", text: "Merit student, outstanding league member, first- and third-class scholarships." },
              {
                label: "Competitions",
                text: "National English contest 1st prize; math contest 3rd prize; China Software Cup national 1st prize; Service Outsourcing Innovation Contest national 3rd prize.",
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
            title: "VIVO Blueprint Lab · Imaging Algorithms · Assistant Algorithm Engineer",
            detail:
              "Worked on image generation alignment and quality stability; explored SFT/GRPO transfer into generation pipelines; researched Stable Diffusion / VAR and built FAR denoising and blur detection schemes.",
          },
          {
            period: "Nov 2024 — Jan 2025",
            title: "Bolink (Wuhan) Technology · R&D Center · Software Intern",
            detail: "Supported EIT lung imaging product development, front-end interaction architecture, and technical documentation for compliance and launch work.",
          },
        ],
      },
      belief:
        "I prefer the site to behave like a searchable academic index: papers, code, research interests, and engineering work should be easy to verify.",
      stack: "Stack: Python · C++ · PyTorch · Linux · Git · Multi-Agent · Computer Vision",
    },
    contact: {
      label: "Contact",
      line: "Please reach out by email for research discussions, internships, campus hiring, or technical collaboration.",
      emailWebComposeHint: "Opens Gmail compose in a new tab (Google sign-in required)",
      footerChannels: [
        { label: "HUST email", value: SITE_EMAIL, href: gmailComposeHref(SITE_EMAIL) },
        { label: "Personal email", value: PERSONAL_EMAIL, href: gmailComposeHref(PERSONAL_EMAIL) },
        { label: "Phone", value: "+86 134-7614-0773", href: "tel:+8613476140773" },
      ],
    },
  },
};

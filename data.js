/**
 * data.js — single source of truth for categories + items.
 *
 * This is the ONLY place you edit to add/remove/change content.
 * - index.html reads this file directly (as a <script> tag) to render
 *   the sidebar and item grid.
 * - generate_items.py reads this same object (via a small regex extraction)
 *   to (re)generate the static detail pages under items/*.html.
 *
 * Schema:
 * {
 *   id: string            // unique category id, used as URL-safe slug
 *   label: string          // sidebar label (Korean)
 *   icon: string           // key into ICONS in main.js / generate_items.py
 *   description: string    // shown under the category title in the main pane
 *   items: [
 *     {
 *       id: string         // unique item id -> items/{id}.html
 *       title: string
 *       meta: string       // small caption line shown on the card
 *       body: string       // paragraph(s) shown on the detail page (\n\n = new paragraph)
 *       hue: number         // 0-360, drives the placeholder "cover art" gradient
 *     }, ...
 *   ]
 * }
 */
/**
 * PORTAL_TOOLS — the 12 tiles shown on the main portal (default landing view
 * and whatever appears when the "AI NATIVE WORLD" logo is clicked).
 * This is purely decorative/branding content: clicking a tile does nothing.
 * Category browsing is done exclusively through the sidebar.
 *
 * icon: filename inside assets/portal/
 * bg:   CSS background for the rounded tile
 */
const PORTAL_TOOLS = [
  { label: "ChatGPT", icon: "icon-chatgpt.png", bg: "#ffffff" },
  { label: "Claude", icon: "icon-claude.png", bg: "#d97757" },
  { label: "Claude Code", icon: "icon-claudecode.png", bg: "#141414" },
  { label: "NotebookLM", icon: "icon-notebooklm.png", bg: "#6c5ce7" },
  { label: "Suno", icon: "icon-suno.png", bg: "#ff7a59" },
  { label: "Nano Banana", icon: "icon-nanobanana.png", bg: "#1a1a1e" },
  { label: "Claude Cowork", icon: "icon-claude.png", bg: "#e8734a" },
  { label: "Claude Design", icon: "icon-claude.png", bg: "#141414" },
  { label: "ElevenLabs", icon: "icon-elevenlabs.png", bg: "#141414" },
  { label: "Replit", icon: "icon-replit.png", bg: "#141414" },
  { label: "CapCut", icon: "icon-capcut.png", bg: "#141414" },
  { label: "Higgsfield", icon: "icon-higgsfield.png", bg: "#1e8449" },
];

const CATEGORIES = [
  {
    id: "documents",
    label: "AI기초/용어정리",
    icon: "file-text",
    description: "AI관련 발전 흐름, 용어 설명, 유용한 Tool 정보 정리",
    items: [
      { id: "ai-trend", title: "AI 발전 흐름", meta: "발전 흐름", hue: 205, skipGenerate: true,
        body: "프롬프트 엔지니어링에서 그래프 엔지니어링까지, AI 활용 방식의 진화" },
      { id: "ai-word", title: "AI 용어 정리", meta: "신입AI키우기쪽", hue: 205,
        body: "AI 용어 12개로 배우는, 신입사원 AI의 성장 과정" },
      { id: "ai-tool", title: "AI Tool 정리", meta: "AI 관련 유용한 Tool 정리", hue: 205,
        body: "AI 활용을 위한 필수 Tool 들 정리" },     
   ],
  },
 
  {
    id: "recipes",
    label: "AI활용팁",
    icon: "coffee",
    description: "자주 해먹는 요리와 새로 시도해볼 레시피입니다.",
    items: [
      { id: "recipe-1", title: "김치찌개", meta: "20분", hue: 5,
        body: "돼지고기와 묵은지로 끓이는 기본 김치찌개 레시피입니다." },
      { id: "recipe-2", title: "파스타 알리오 올리오", meta: "15분", hue: 5,
        body: "마늘과 올리브오일만으로 만드는 심플한 파스타입니다." },
      { id: "recipe-3", title: "홈메이드 라떼", meta: "5분", hue: 5,
        body: "집에서 에스프레소 머신 없이 만드는 라떼 레시피입니다." },
      { id: "recipe-4", title: "에어프라이어 치킨", meta: "30분", hue: 5,
        body: "에어프라이어로 기름 없이 바삭하게 만드는 치킨 레시피입니다." },
    ],
  },
  
  {
    id: "UsefulInfo",
    label: "유용한정보",
    icon: "user",
    description: "아이디어를 얻을수 있는 유용한 정보를 관리합니다.",
    items: [
      { id: "useful-1", title: "LLM_Knowledge_Bases", meta: "By_Karpathy", hue: 160,
        body: "디자인팀 구성원 연락처와 담당 업무 목록입니다." },
      { id: "useful-2", title: "LLM_Wiki_Idea", meta: "By_Karpathy", hue: 160,
        body: "현재 협업 중인 외주 개발자 연락처입니다." },

    ],
  },
  {
    id: "projects",
    label: "프로젝트",
    icon: "folder",
    description: "진행 중이거나 계획된 프로젝트를 한눈에 확인합니다.",
    items: [
      { id: "proj-1", title: "웹사이트 리뉴얼", meta: "진행중 · D-24", hue: 265,
        body: "회사 공식 웹사이트의 디자인과 정보구조를 전면 개편하는 프로젝트입니다.\n\n1단계 디자인 시안 확정, 2단계 퍼블리싱, 3단계 QA 순으로 진행됩니다." },
      { id: "proj-2", title: "모바일 앱 출시", meta: "진행중 · D-58", hue: 265,
        body: "iOS/Android 동시 출시를 목표로 하는 신규 모바일 앱 프로젝트입니다.\n\n현재 베타 테스트 단계이며, 주요 피드백을 반영해 최종 빌드를 준비 중입니다." },
      { id: "proj-3", title: "데이터 마이그레이션", meta: "계획중", hue: 265,
        body: "레거시 데이터베이스를 신규 클라우드 인프라로 이관하는 작업입니다.\n\n다운타임을 최소화하기 위한 단계적 이관 전략을 수립 중입니다." },
      { id: "proj-4", title: "브랜드 리디자인", meta: "완료", hue: 265,
        body: "로고, 컬러 팔레트, 타이포그래피를 포함한 브랜드 아이덴티티 개편 프로젝트입니다.\n\n전사 적용 가이드라인 배포까지 완료되었습니다." },
    ],
  },
  {
    id: "bookmarks",
    label: "북마크",
    icon: "bookmark",
    description: "나중에 다시 볼 만한 링크와 아티클을 모아둡니다.",
    items: [
      { id: "bm-1", title: "디자인 레퍼런스 모음", meta: "링크 12개", hue: 340,
        body: "UI/UX 작업 시 참고하는 웹사이트와 갤러리 링크 모음입니다.\n\n주기적으로 새 레퍼런스를 추가하고 있습니다." },
      { id: "bm-2", title: "개발자 블로그 모음", meta: "링크 8개", hue: 340,
        body: "팀에서 자주 참고하는 기술 블로그 목록입니다.\n\n프론트엔드, 백엔드, 인프라 카테고리로 분류되어 있습니다." },
      { id: "bm-3", title: "뉴스레터 아카이브", meta: "이슈 20개", hue: 340,
        body: "구독 중인 업계 뉴스레터 중 다시 보고 싶은 이슈를 모아둔 아카이브입니다." },
      { id: "bm-4", title: "툴 비교 아티클", meta: "링크 6개", hue: 340,
        body: "생산성 도구, 협업 툴을 비교 분석한 아티클 모음입니다.\n\n툴 도입을 검토할 때 참고합니다." },
    ],
  },
  {
    id: "notes",
    label: "노트",
    icon: "edit-3",
    description: "짧은 메모와 생각을 빠르게 기록합니다.",
    items: [
      { id: "note-1", title: "아이디어 스케치", meta: "오늘", hue: 40,
        body: "떠오르는 대로 적어둔 초기 아이디어 메모입니다.\n\n추후 정리해서 기획안으로 발전시킬 예정입니다." },
      { id: "note-2", title: "회고 노트", meta: "어제", hue: 40,
        body: "지난 스프린트에 대한 개인 회고를 기록했습니다.\n\n잘한 점, 아쉬운 점, 다음에 시도할 것 세 가지로 정리했습니다." },
      { id: "note-3", title: "독서 노트", meta: "3일 전", hue: 40,
        body: "최근 읽은 책에서 인상 깊었던 구절과 생각을 정리했습니다." },
      { id: "note-4", title: "인터뷰 메모", meta: "1주 전", hue: 40,
        body: "사용자 인터뷰 중 나온 주요 발언과 인사이트를 기록했습니다." },
    ],
  },
  {
    id: "learning",
    label: "학습자료",
    icon: "book-open",
    description: "강의, 스터디 정리 등 학습 관련 자료입니다.",
    items: [
      { id: "learn-1", title: "React 강의 정리", meta: "진행률 72%", hue: 190,
        body: "온라인 강의를 들으며 정리한 React 핵심 개념 노트입니다.\n\nHooks, 상태 관리, 성능 최적화 챕터를 다루고 있습니다." },
      { id: "learn-2", title: "데이터 분석 스터디", meta: "6주차", hue: 190,
        body: "팀 내 데이터 분석 스터디에서 다룬 내용을 정리한 자료입니다." },
      { id: "learn-3", title: "영어 회화 노트", meta: "매일", hue: 190,
        body: "업무용 영어 표현과 회의 회화 패턴을 정리한 노트입니다." },
      { id: "learn-4", title: "디자인 시스템 강의", meta: "완료", hue: 190,
        body: "디자인 시스템 구축 방법론에 대한 강의를 듣고 정리했습니다.\n\n토큰 설계, 컴포넌트 문서화 방식을 중점적으로 다룹니다." },
    ],
  },

  {
    id: "ideas",
    label: "아이디어",
    icon: "zap",
    description: "언젠가 시도해보고 싶은 생각들을 모아둡니다.",
    items: [
      { id: "idea-1", title: "사이드 프로젝트 아이디어", meta: "초안", hue: 285,
        body: "주말에 가볍게 시작해볼 수 있는 사이드 프로젝트 아이디어 목록입니다." },
      { id: "idea-2", title: "신규 기능 제안", meta: "검토중", hue: 285,
        body: "제품에 추가하면 좋을 만한 기능들을 정리했습니다." },
      { id: "idea-3", title: "콘텐츠 기획안", meta: "초안", hue: 285,
        body: "블로그/뉴스레터에 쓸 콘텐츠 주제 목록입니다." },
      { id: "idea-4", title: "자동화 아이디어", meta: "검토중", hue: 285,
        body: "반복 업무를 자동화할 수 있는 방법에 대한 아이디어 메모입니다." },
    ],
  },

  {
    id: "schedule",
    label: "일정",
    icon: "calendar",
    description: "이번 주 일정부터 분기 로드맵까지 관리합니다.",
    items: [
      { id: "sched-1", title: "이번 주 일정", meta: "7/28 - 8/1", hue: 220,
        body: "이번 주 주요 미팅과 마감 일정 목록입니다." },
      { id: "sched-2", title: "분기 로드맵", meta: "2026 Q3", hue: 220,
        body: "3분기 팀 로드맵과 주요 마일스톤을 정리했습니다." },
      { id: "sched-3", title: "휴가 계획", meta: "개인", hue: 220,
        body: "올해 남은 연차 사용 계획입니다." },
      { id: "sched-4", title: "반복 미팅", meta: "매주 월", hue: 220,
        body: "매주 반복되는 정기 미팅 목록과 아젠다 링크입니다." },
    ],
  },
  {
    id: "favorites",
    label: "즐겨찾기",
    icon: "star",
    description: "자주 찾는 항목을 모아 빠르게 접근합니다.",
    items: [
      { id: "fav-1", title: "자주 쓰는 템플릿", meta: "고정됨", hue: 45,
        body: "매번 새로 만들지 않고 재사용하는 문서/기획 템플릿 모음입니다." },
      { id: "fav-2", title: "핵심 대시보드 링크", meta: "고정됨", hue: 45,
        body: "업무에 자주 쓰는 대시보드 바로가기 링크 모음입니다." },
      { id: "fav-3", title: "즐겨 찾는 문서", meta: "고정됨", hue: 45,
        body: "가장 자주 열어보는 문서 모음입니다." },
      { id: "fav-4", title: "자주 쓰는 도구", meta: "고정됨", hue: 45,
        body: "업무에서 매일 사용하는 도구와 바로가기 목록입니다." },
    ],
  },
];

// Node/CommonJS export (used by generate_items.py is not needed since it
// parses this file as text, but this keeps the file usable from Node too).
if (typeof module !== "undefined") {
  module.exports = { CATEGORIES, PORTAL_TOOLS };
}

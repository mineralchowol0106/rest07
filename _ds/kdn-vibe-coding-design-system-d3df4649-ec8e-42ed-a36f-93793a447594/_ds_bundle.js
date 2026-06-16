/* @ds-bundle: {"format":3,"namespace":"KDNVibeCodingDesignSystem_d3df46","components":[],"sourceHashes":{"ui_kits/intro-page/App.jsx":"9d0bc341cae9","ui_kits/intro-page/ContactForm.jsx":"ce004f3f629b","ui_kits/intro-page/Hero.jsx":"d9b4a7e9a578","ui_kits/intro-page/Pages.jsx":"55768901762c","ui_kits/intro-page/Sidebar.jsx":"afa5d3710ac6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KDNVibeCodingDesignSystem_d3df46 = window.KDNVibeCodingDesignSystem_d3df46 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/intro-page/App.jsx
try { (() => {
/* global React, ReactDOM, Sidebar, Hero, StatRow,
   AboutPage, CareerPage, EduPage, StackPage, ProjectsPage, ContactPage */
const {
  useState: useStateApp
} = React;
function App() {
  const [active, setActive] = useStateApp("about");
  const Page = {
    about: AboutPage,
    career: CareerPage,
    edu: EduPage,
    stack: StackPage,
    projects: ProjectsPage,
    contact: ContactPage
  }[active];
  return /*#__PURE__*/React.createElement("div", {
    className: "app-shell"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onChange: setActive
  }), /*#__PURE__*/React.createElement("main", {
    className: "app-main"
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(StatRow, null), /*#__PURE__*/React.createElement(Page, null), /*#__PURE__*/React.createElement("div", {
    className: "footer-caption"
  }, "\xA9 2025\u20132026 DreamIT Biz \xB7 Ph.D Aebon Lee \xB7 \uC0AC\uC5C5\uC790\uB4F1\uB85D 601-45-20154 \xB7 \uD1B5\uC2E0\uD310\uB9E4 \uC81C2024-\uC218\uC6D0\uD314\uB2EC-0584\uD638 \xB7 \uCD9C\uD310\uC2E0\uACE0 \uC81C2026-000026\uD638")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intro-page/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intro-page/ContactForm.jsx
try { (() => {
/* global React, SectionTitle */
const {
  useState: useStateCF
} = React;
function ContactForm() {
  const [name, setName] = useStateCF("");
  const [org, setOrg] = useStateCF("");
  const [email, setEmail] = useStateCF("");
  const [phone, setPhone] = useStateCF("");
  const [topic, setTopic] = useStateCF("바이브코딩 강의 문의");
  const [message, setMessage] = useStateCF("");
  const [status, setStatus] = useStateCF(null); // null | {ok, msg}

  function submit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setStatus({
        ok: false,
        msg: "성함과 이메일은 필수입니다."
      });
      return;
    }
    setStatus({
      ok: true,
      msg: `감사합니다, ${name}님! 빠르게 회신드리겠습니다. (${email} · 문의 유형: ${topic})`
    });
    setOrg("");
    setPhone("");
    setMessage("");
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "\uC131\uD568 *"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "\uC774\uC560\uBCF8"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "\uC774\uBA54\uC77C *"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "\uC18C\uC18D"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    value: org,
    onChange: e => setOrg(e.target.value),
    placeholder: "\uD68C\uC0AC / \uAE30\uAD00"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "\uC5F0\uB77D\uCC98"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    value: phone,
    onChange: e => setPhone(e.target.value),
    placeholder: "010-0000-0000"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-full"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "\uBB38\uC758 \uC720\uD615"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    value: topic,
    onChange: e => setTopic(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "\uBC14\uC774\uBE0C\uCF54\uB529 \uAC15\uC758 \uBB38\uC758"), /*#__PURE__*/React.createElement("option", null, "\uAE30\uC5C5/\uAE30\uAD00 \uAD50\uC721 \uBB38\uC758"), /*#__PURE__*/React.createElement("option", null, "\uD504\uB85C\uC81D\uD2B8 \uD611\uC5C5"), /*#__PURE__*/React.createElement("option", null, "\uAE30\uD0C0"))), /*#__PURE__*/React.createElement("div", {
    className: "form-full"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "\uBB38\uC758 \uB0B4\uC6A9"), /*#__PURE__*/React.createElement("textarea", {
    className: "form-textarea",
    value: message,
    onChange: e => setMessage(e.target.value),
    placeholder: "\uAC04\uB2E8\uD788 \uC801\uC5B4\uC8FC\uC138\uC694."
  }))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-block"
  }, "\uBB38\uC758 \uBCF4\uB0B4\uAE30"), status && /*#__PURE__*/React.createElement("div", {
    className: "banner " + (status.ok ? "banner-success" : "banner-error"),
    role: "status"
  }, /*#__PURE__*/React.createElement("span", null, status.ok ? "✅" : "⛔"), /*#__PURE__*/React.createElement("span", null, status.msg)), status && status.ok && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--kdn-fg-disabled)",
      fontSize: "0.85rem",
      marginTop: 6
    }
  }, "\uC2E4\uC81C \uBA54\uC77C \uBC1C\uC1A1 \uC5F0\uB3D9\uC740 Supabase Edge Function ", /*#__PURE__*/React.createElement("code", null, "sendEmail()"), "\uACFC \uC5F0\uACB0 \uC608\uC815\uC785\uB2C8\uB2E4."));
}
function ContactPage() {
  const rows = [["🏢 회사", "드림아이티비즈 (DreamIT Biz)"], ["👤 대표", "Ph.D 이애본 (Aebon Lee)"], ["📧 이메일", "aebon@dreamitbiz.com · aebon@kyonggi.ac.kr"], ["📱 휴대폰", "010-3700-0629"], ["💬 카카오톡", "aebon"], ["🐙 GitHub", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/aebonlee",
    target: "_blank",
    rel: "noreferrer"
  }, "github.com/aebonlee")], ["🌐 메인 사이트", /*#__PURE__*/React.createElement("a", {
    href: "https://www.dreamitbiz.com",
    target: "_blank",
    rel: "noreferrer"
  }, "www.dreamitbiz.com")], ["🏠 주소", "경기도 수원시 팔달구 매산로 45, 419호"], ["🕘 업무 시간", "평일 09:00 ~ 18:00"]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionTitle, null, "Contact"), /*#__PURE__*/React.createElement("table", {
    className: "contact-table"
  }, /*#__PURE__*/React.createElement("tbody", null, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("th", null, k), /*#__PURE__*/React.createElement("td", null, v))))), /*#__PURE__*/React.createElement(SectionTitle, null, "\uAC15\uC758 / \uD611\uC5C5 \uBB38\uC758"), /*#__PURE__*/React.createElement(ContactForm, null));
}
Object.assign(window, {
  ContactForm,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intro-page/ContactForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intro-page/Hero.jsx
try { (() => {
/* global React */

function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    className: "kdn-hero"
  }, /*#__PURE__*/React.createElement("h1", null, "\uC548\uB155\uD558\uC138\uC694, \uC774\uC560\uBCF8(Aebon Lee)\uC785\uB2C8\uB2E4 \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "\uBC14\uC774\uBE0C\uCF54\uB529\uC73C\uB85C \uD480\uC2A4\uD0DD \uC6F9 \uAC1C\uBC1C\uC744 \uAC00\uB974\uCE58\uB294 \uBC15\uC0AC \xB7 DreamIT Biz \uB300\uD45C"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kdn-tag"
  }, "Ph.D"), /*#__PURE__*/React.createElement("span", {
    className: "kdn-tag"
  }, "Full-Stack Educator"), /*#__PURE__*/React.createElement("span", {
    className: "kdn-tag"
  }, "AI \xB7 Vibe Coding"), /*#__PURE__*/React.createElement("span", {
    className: "kdn-tag"
  }, "91+ Sites Operator")));
}
function StatRow() {
  const stats = [["91+", "운영 사이트"], ["845", "GitHub 리포지토리"], ["10+", "교육 경력 (년)"], ["24", "결제 연동 사이트"]];
  return /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "kdn-stat-num"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "kdn-stat-label"
  }, l))));
}
function SectionTitle({
  children
}) {
  return /*#__PURE__*/React.createElement("h3", {
    className: "kdn-section-title"
  }, children);
}
function Card({
  role,
  org,
  period,
  children,
  link
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kdn-card"
  }, role && /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, role), org && /*#__PURE__*/React.createElement("div", {
    className: "org"
  }, org), period && /*#__PURE__*/React.createElement("div", {
    className: "period"
  }, period), children && /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, children), link && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: link,
    target: "_blank",
    rel: "noreferrer"
  }, link)));
}
function PhilosophyRow() {
  const items = [["🚀 즉시 배포", "로컬 데모에서 멈추지 않습니다. 첫 날부터 자신의 도메인으로 배포된 사이트를 갖게 됩니다."], ["🤖 AI와 함께", "Claude · ChatGPT · Copilot을 부조종사처럼 활용하는 법을 익히고, 생산성 10배를 경험합니다."], ["🧱 풀스택 자립", "프론트 · 백엔드 · DB · 인증 · 결제 · 배포까지 혼자서 끝낼 수 있는 능력을 갖춥니다."]];
  return /*#__PURE__*/React.createElement("div", {
    className: "philosophy-row"
  }, items.map(([h, b]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "philosophy-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h"
  }, h), /*#__PURE__*/React.createElement("div", {
    className: "b"
  }, b))));
}
Object.assign(window, {
  Hero,
  StatRow,
  SectionTitle,
  Card,
  PhilosophyRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intro-page/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intro-page/Pages.jsx
try { (() => {
/* global React, Card, SectionTitle, PhilosophyRow */

function AboutPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionTitle, null, "About Me"), /*#__PURE__*/React.createElement("p", null, "\uC548\uB155\uD558\uC138\uC694. ", /*#__PURE__*/React.createElement("b", null, "DreamIT Biz"), " \uB300\uD45C\uC774\uC790 \uD480\uC2A4\uD0DD \uC6F9 \uAC1C\uBC1C \uAD50\uC721\uC744 \uC804\uBB38\uC73C\uB85C \uD558\uB294 ", /*#__PURE__*/React.createElement("b", null, "Ph.D \uC774\uC560\uBCF8"), "\uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("p", null, "\uC800\uB294 ", /*#__PURE__*/React.createElement("b", null, "React \xB7 TypeScript \xB7 Supabase \xB7 AI \uB3C4\uAD6C"), "\uB97C \uACB0\uD569\uD55C ", /*#__PURE__*/React.createElement("b", null, "\uBC14\uC774\uBE0C\uCF54\uB529(Vibe Coding)"), " \uBC29\uBC95\uB860\uC73C\uB85C, \uBE44\uAC1C\uBC1C\uC790\uB3C4 3\uC77C \uB9CC\uC5D0 \uC790\uC2E0\uC758 \uC6F9 \uC11C\uBE44\uC2A4\uB97C \uC9C1\uC811 \uB9CC\uB4E4\uACE0 \uBC30\uD3EC\uD560 \uC218 \uC788\uB3C4\uB85D \uB3D5\uACE0 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("p", null, "\uD604\uC7AC ", /*#__PURE__*/React.createElement("b", null, "91\uAC1C \uC774\uC0C1\uC758 \uB77C\uC774\uBE0C \uC11C\uBE44\uC2A4"), "\uB97C \uC9C1\uC811 \uC124\uACC4\xB7\uAD6C\uCD95\xB7\uC6B4\uC601\uD558\uBA70, \uC2E4\uC81C \uC6B4\uC601 \uB178\uD558\uC6B0\uB97C \uADF8\uB300\uB85C \uAC15\uC758\uC2E4\uB85C \uAC00\uC838\uC635\uB2C8\uB2E4. \uAD50\uACFC\uC11C\uAC00 \uC544\uB2CC ", /*#__PURE__*/React.createElement("b", null, "\uC2E4\uC804 \uCF54\uB4DC"), "\uB85C, \uB370\uBAA8\uAC00 \uC544\uB2CC ", /*#__PURE__*/React.createElement("b", null, "\uC2E4\uBC30\uD3EC"), "\uB85C \uBC30\uC6C1\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(SectionTitle, null, "\uAC15\uC758 \uCCA0\uD559"), /*#__PURE__*/React.createElement(PhilosophyRow, null));
}
function CareerPage() {
  const careers = [["대표 (Founder & CEO)", "DreamIT Biz (드림아이티비즈)", "2020 ~ 현재", "91개 사이트 운영 · 풀스택 교육 플랫폼 · AI 도구 통합 컨설팅"], ["외래교수 / 강사", "경기대학교 · 한국기술교육대학교 · 한신대학교", "2018 ~ 현재", "'컴퓨팅 사고', 'AI·SW개론' 등 학부 교과목 강의"], ["기업 강사", "한국전력공사 데이터넷(KDN) · 기타 공기업/사기업", "다년간", "바이브코딩 · React · Supabase · AI 활용 기업 교육"], ["교재 출판 / 콘텐츠 제작", "DreamIT Books · 자체 e-Book 플랫폼", "지속", "출판신고번호 제2026-000026호 · 자체 도서 유통 사이트 운영"]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionTitle, null, "Career & Activities"), careers.map(([role, org, period, desc]) => /*#__PURE__*/React.createElement(Card, {
    key: role,
    role: role,
    org: org,
    period: period
  }, desc)));
}
function EduPage() {
  const edus = [["Ph.D (박사)", "경영학 / 정보시스템 분야", "박사 학위 취득"], ["석사 (M.A.)", "경영학 전공", "석사 학위 취득"], ["학사 (B.A.)", "경영학 / 전산학 융합", "학사 학위 취득"]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionTitle, null, "Education"), edus.map(([d, m, n]) => /*#__PURE__*/React.createElement(Card, {
    key: d,
    role: d,
    org: m
  }, n)), /*#__PURE__*/React.createElement("div", {
    className: "banner banner-info",
    role: "status"
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCA1"), /*#__PURE__*/React.createElement("span", null, "\uD559\uB825\xB7\uC774\uB825\uC758 \uC138\uBD80 \uB0B4\uC6A9\uC740 \uAC15\uC758 \uC2DC\uC791 \uC2DC \uBCC4\uB3C4\uB85C \uACF5\uC720\uB4DC\uB9BD\uB2C8\uB2E4.")));
}
function StackPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionTitle, null, "Tech Stack"), /*#__PURE__*/React.createElement("div", {
    className: "tech-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\uD504\uB860\uD2B8\uC5D4\uB4DC"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "React 19 \xB7 TypeScript 5.8 \xB7 Vite 7~8"), /*#__PURE__*/React.createElement("li", null, "TailwindCSS \xB7 \uC790\uCCB4 CSS \uB514\uC790\uC778 \uC2DC\uC2A4\uD15C"), /*#__PURE__*/React.createElement("li", null, "\uB2E4\uD06C/\uB77C\uC774\uD2B8 + 5\uC0C9 \uCEEC\uB7EC \uD14C\uB9C8"), /*#__PURE__*/React.createElement("li", null, "\uB2E4\uAD6D\uC5B4 (i18n: \uD55C\uAD6D\uC5B4 / English)")), /*#__PURE__*/React.createElement("h4", null, "\uBC31\uC5D4\uB4DC \xB7 \uC778\uD504\uB77C"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Supabase (PostgreSQL \xB7 Auth \xB7 Edge Functions)"), /*#__PURE__*/React.createElement("li", null, "GitHub Pages \uC790\uB3D9 \uBC30\uD3EC (gh-pages)"), /*#__PURE__*/React.createElement("li", null, "Cloudflare \xB7 GitHub Actions"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\uACB0\uC81C \xB7 \uC54C\uB9BC"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "PortOne Browser SDK (KG\uC774\uB2C8\uC2DC\uC2A4)"), /*#__PURE__*/React.createElement("li", null, "Resend \uC774\uBA54\uC77C API"), /*#__PURE__*/React.createElement("li", null, "icode TCP SMS (LMS \uC790\uB3D9 \uC804\uD658)")), /*#__PURE__*/React.createElement("h4", null, "AI \xB7 \uC0DD\uC0B0\uC131"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Claude Code \xB7 ChatGPT \xB7 GitHub Copilot"), /*#__PURE__*/React.createElement("li", null, "Anthropic API \xB7 OpenAI API"), /*#__PURE__*/React.createElement("li", null, "Streamlit \xB7 Notion API \xB7 Gmail API")))), /*#__PURE__*/React.createElement(SectionTitle, null, "\uAC15\uC758 \uAC00\uB2A5 \uC601\uC5ED"), /*#__PURE__*/React.createElement("ul", {
    style: {
      color: "var(--kdn-fg-muted)",
      lineHeight: 1.85,
      paddingLeft: 18
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "\uBC14\uC774\uBE0C\uCF54\uB529 \uC785\uBB38/\uC2EC\uD654"), ": AI\uC640 \uD568\uAED8 \uD480\uC2A4\uD0DD \uC6F9 \uB9CC\uB4E4\uAE30"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "React + Supabase \uD480\uC2A4\uD0DD"), ": \uC778\uC99D \xB7 DB \xB7 \uACB0\uC81C \xB7 \uBC30\uD3EC\uAE4C\uC9C0"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "AI \uB3C4\uAD6C \uD65C\uC6A9"), ": Claude / ChatGPT / Copilot \uC2E4\uC804 \uC6CC\uD06C\uD50C\uB85C\uC6B0"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "\uB370\uC774\uD130 \uBD84\uC11D + Streamlit"), ": \uBE44\uAC1C\uBC1C\uC790\uC6A9 \uB300\uC2DC\uBCF4\uB4DC \uC81C\uC791"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("b", null, "\uB178\uCF54\uB4DC \u2192 \uB85C\uCF54\uB4DC \uC804\uD658"), ": \uC5C5\uBB34 \uC790\uB3D9\uD654\uC640 \uC790\uCCB4 SaaS \uAD6C\uCD95")));
}
function ProjectsPage() {
  const projects = [["DreamIT Biz 통합 플랫폼", "91개 사이트 · 단일 Supabase · 공유 알림 인프라", "https://www.dreamitbiz.com"], ["AHP Basic — 의사결정 도구", "계층분석법(AHP) 기반 의사결정 SaaS", "https://ahp-basic.dreamitbiz.com"], ["Competency — 역량 진단", "조직/개인 역량 진단 및 리포트 자동화", "https://competency.dreamitbiz.com"], ["DreamIT Books", "자체 e-Book 출판 및 결제 플랫폼 (출판신고 제2026-000026호)", "https://books.dreamitbiz.com"], ["KDN Vibe Coding", "한국전력공사 데이터넷 바이브코딩 교육 사이트", "https://kdn.dreamitbiz.com"], ["Research Hub", "연구·논문 관리 플랫폼", "https://research.dreamitbiz.com"]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionTitle, null, "\uB300\uD45C \uD504\uB85C\uC81D\uD2B8"), /*#__PURE__*/React.createElement("div", {
    className: "project-grid"
  }, projects.map(([n, d, u]) => /*#__PURE__*/React.createElement(Card, {
    key: n,
    org: "🌐 " + n,
    link: u
  }, d))));
}
Object.assign(window, {
  AboutPage,
  CareerPage,
  EduPage,
  StackPage,
  ProjectsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intro-page/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/intro-page/Sidebar.jsx
try { (() => {
/* global React */

const MENU = [{
  key: "about",
  label: "👋 소개"
}, {
  key: "career",
  label: "💼 경력"
}, {
  key: "edu",
  label: "🎓 학력"
}, {
  key: "stack",
  label: "🛠 기술 스택"
}, {
  key: "projects",
  label: "📦 프로젝트"
}, {
  key: "contact",
  label: "📨 연락처"
}];
function Sidebar({
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sidebar-head"
  }, "\uD83D\uDCDA KDN \uBC14\uC774\uBE0C\uCF54\uB529"), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-caption"
  }, "\uD55C\uAD6D\uC804\uB825\uACF5\uC0AC \uB370\uC774\uD130\uB137 \uC9C1\uC6D0 \uB300\uC0C1", /*#__PURE__*/React.createElement("br", null), "\uD480\uC2A4\uD0DD \uC6F9 \uAC1C\uBC1C \uAD50\uC721"), /*#__PURE__*/React.createElement("hr", {
    className: "sidebar-divider"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "sidebar-menu",
    "aria-label": "\uC139\uC158 \uBA54\uB274"
  }, MENU.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.key,
    type: "button",
    className: "sidebar-item" + (m.key === active ? " active" : ""),
    onClick: () => onChange(m.key),
    "aria-current": m.key === active ? "page" : undefined
  }, m.label))), /*#__PURE__*/React.createElement("hr", {
    className: "sidebar-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-caption"
  }, "\uAC15\uC758 \uC77C\uC815: 3\uC77C \xB7 21\uC2DC\uAC04"), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-caption"
  }, "\uAD50\uC721 \uB300\uC0C1: KDN \uC784\uC9C1\uC6D0"));
}
window.Sidebar = Sidebar;
window.MENU = MENU;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/intro-page/Sidebar.jsx", error: String((e && e.message) || e) }); }

})();

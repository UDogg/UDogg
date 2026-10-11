const fs = require('fs');
const path = require('path');

const profileDataPath = path.join(__dirname, '../../profile-data.json');
const profileData = JSON.parse(fs.readFileSync(profileDataPath, 'utf-8'));

const generateProjects = () => {
  return profileData.featuredProjects.map(proj => {
    return `### ${proj.emoji} [${proj.name}](${proj.url}) — *${proj.description}*\n${proj.tech.join(' • ')}\n`;
  }).join('\n');
};

const getLastUpdated = () => {
  return new Date().toISOString().split('T')[0];
};

const readme = `![](assets/Bottom_up.svg)

<div align="center" style="max-width:1200px; margin:0 auto; padding:20px 16px; background:linear-gradient(180deg, rgba(10,14,30,0.9), rgba(10,14,30,0.7)); border:1px solid rgba(96,165,250,0.18); border-radius:18px; box-shadow:0 18px 45px rgba(0,0,0,0.35);">
  
[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=%2336BCF7&center=true&vCenter=true&width=700&lines=hey+there,+i'm+utkarsh+✨;full-stack+alchemist;NLP+mad+scientist;synthesizer+wizard+🎹;professional+emoji+deployer)](https://github.com/UDogg)

<h2 align="center" style="margin:16px 0 12px;"><img src="https://media.giphy.com/media/w1OBpBd7kJqHrJnJ13/giphy.gif" width="48"></h2>
<p align="center"><a href="https://threejs-black.vercel.app/" target="_blank"><img width="75%" alt="chaos & code" src="https://see.fontimg.com/api/renderfont4/BxY01?text=chaos%20%26%20code&font=Retro%20Computer&fontsize=100&bg=000&textColor=36BCF7" /></a></p>

<h3 align="center" style="margin:12px 0 16px; color:#dfe9ff; font-weight:500; font-size:0.95rem;"><i>🎓 Penn State | 🌐 <a href=\"https://threejs-black.vercel.app/\" target=\"_blank\">3D Portfolio</a> | 💼 Full-Stack | 🎹 Synth | 📚 Anime</i></h3>

<div align="center" style="display:flex; flex-wrap:wrap; justify-content:center; gap:6px; padding:6px 10px; border-bottom:1px solid rgba(148,163,184,0.18); margin-bottom:12px; font-size:0.9rem;">
  
<a href="#about" style="background:linear-gradient(180deg,#1f2937,#111827); color:#e2e8f0; text-decoration:none; border:1px solid rgba(96,165,250,0.2); border-bottom:none; border-radius:8px 8px 0 0; padding:8px 14px; font-weight:600; cursor:pointer; transition:all .2s ease;">About</a>
<a href="#tech" style="background:linear-gradient(180deg,#1e293b,#0f172a); color:#cbd5e1; text-decoration:none; border:1px solid rgba(96,165,250,0.2); border-bottom:none; border-radius:8px 8px 0 0; padding:8px 14px; font-weight:600; cursor:pointer; transition:all .2s ease;">Tech</a>
<a href=\"#projects\" style=\"background:linear-gradient(180deg,#0f172a,#111827); color:#cbd5e1; text-decoration:none; border:1px solid rgba(52,211,153,0.2); border-bottom:none; border-radius:8px 8px 0 0; padding:8px 14px; font-weight:600; cursor:pointer; transition:all .2s ease;\">Projects</a>
<a href=\"#why\" style=\"background:linear-gradient(180deg,#1f2937,#111827); color:#cbd5e1; text-decoration:none; border:1px solid rgba(168,85,247,0.2); border-bottom:none; border-radius:8px 8px 0 0; padding:8px 14px; font-weight:600; cursor:pointer; transition:all .2s ease;\">Philosophy</a>
<a href=\"#collab\" style=\"background:linear-gradient(180deg,#1f2937,#111827); color:#cbd5e1; text-decoration:none; border:1px solid rgba(244,114,182,0.2); border-bottom:none; border-radius:8px 8px 0 0; padding:8px 14px; font-weight:600; cursor:pointer; transition:all .2s ease;\">Teamwork</a>
<a href=\"#stats\" style=\"background:linear-gradient(180deg,#1f2937,#111827); color:#cbd5e1; text-decoration:none; border:1px solid rgba(251,146,60,0.2); border-bottom:none; border-radius:8px 8px 0 0; padding:8px 14px; font-weight:600; cursor:pointer; transition:all .2s ease;\">Stats</a>

</div>

</div>

---

<a id=\"about\"></a>
<div style=\"max-width:1200px; margin:16px auto; padding:22px 24px; background:linear-gradient(180deg, rgba(15,23,42,0.95), rgba(30,41,59,0.88)); border:1px solid rgba(148,163,184,0.22); border-radius:16px; box-shadow:0 18px 35px rgba(15,23,42,0.28);\">\n\n## 🧑‍💻 The Story\n\n**full-stack alchemist** who turns \"what if\" into \"it actually works.\" I code because creation feels like translation — chaos → magic → shipping.\n\nPenn State grad. ${profileData.profileStats.yearsOfCoding}+ years building stuff. Equally obsessed with systems architecture & synthesizer waltz soundscapes. Yes, those things matter equally to me.\n\n> \"God help and forgive me, I want to build something that's gonna outlive me.\" — Hamilton\n\n### what drives me\n🎹 synthesizer nerd (${profileData.profileStats.synthesizerHours}+ hours) • 📚 anime/sci-fi deep diver • 💡 \"aha!\" moment junkie • 🧠 overcomplicate things for fun • 🌀 embrace chaos • 😄 emoji power user\n\n<p align=\"center\" style=\"margin:16px 0 0;\">\n  <img src=\"https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif\" width=\"280\" alt=\"zone\">\n</p>\n\n</div>\n\n---\n\n<a id=\"tech\"></a>\n<div style=\"max-width:1200px; margin:16px auto; padding:22px 24px; background:linear-gradient(180deg, rgba(15,23,42,0.95), rgba(17,24,39,0.9)); border:1px solid rgba(96,165,250,0.22); border-radius:16px; box-shadow:0 18px 35px rgba(15,23,42,0.28);\">\n\n## 🧙‍♂️ The Arsenal\n\n<div align=\"center\">\n\n| **Category** | **Weapons of Choice** |\n|:---:|:---:|\n| 🔥 **Languages** | ${profileData.skills.languages.slice(0, 8).join(' • ')} |\n| ⚙️ **Frameworks** | ${profileData.skills.frameworks.join(' • ')} |\n| 🧰 **Infrastructure** | ${profileData.skills.tools.slice(0, 6).join(' • ')} |\n\n</div>\n\n**deep dive:** ${profileData.skills.languages.slice(0, 4).join(' • ')} | **fluent:** ${profileData.skills.languages.slice(4, 7).join(' • ')} | **for kicks:** Solidity • Zig • whatever's shiny\n\n<p align=\"center\" style=\"margin:12px 0 0;\">\n  <img src=\"https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif\" width=\"280\" alt=\"flow\">\n</p>\n\n</div>\n\n---\n\n<a id=\"projects\"></a>\n<div style=\"max-width:1200px; margin:16px auto; padding:22px 24px; background:linear-gradient(180deg, rgba(9,18,26,0.95), rgba(13,27,42,0.88)); border:1px solid rgba(52,211,153,0.22); border-radius:16px; box-shadow:0 18px 35px rgba(15,23,42,0.28);\">\n\n## 🎨 Built & Shipped\n\n${generateProjects()}\n\n<p align=\"center\" style=\"margin:12px 0 0;\">\n  <img src=\"https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif\" width=\"300\" alt=\"build\">\n</p>\n\n</div>\n\n---\n\n<a id=\"why\"></a>\n<div style=\"max-width:1200px; margin:16px auto; padding:22px 24px; background:linear-gradient(180deg, rgba(24,15,39,0.95), rgba(29,19,48,0.88)); border:1px solid rgba(168,85,247,0.22); border-radius:16px; box-shadow:0 18px 35px rgba(15,23,42,0.28);\">\n\n## 💡 Why This Matters\n\n**creation is translation.** I take chaos → ideas → emotions → code → *things people can use, laugh at, learn from.*\n\nEvery project tells a story. isekai.html came from anime obsession. form.html from wanting to help my mom. conc.html from realizing systems are beautiful when visualized right.\n\nCoding isn't syntax & systems for me. **It's self-expression. Connection. Evolution.**\n\n<p align=\"center\" style=\"margin:12px 0 0;\">\n  <img src=\"https://media.giphy.com/media/j5QcmXoFWl4Q0/giphy.gif\" width=\"240\"/>\n</p>\n\n</div>\n\n---\n\n<a id=\"collab\"></a>\n<details style=\"max-width:1200px; margin:16px auto; display:block; background:linear-gradient(180deg, rgba(33,16,34,0.95), rgba(49,20,42,0.88)); border:1px solid rgba(244,114,182,0.2); border-radius:16px; padding:12px 16px; box-shadow:0 18px 35px rgba(15,23,42,0.28); cursor:pointer;\">\n  <summary style=\"font-weight:700; color:#fbcfe8; user-select:none;\"><b>🤝 How I Work (click to expand)</b></summary>\n\n  <br>\n\n  **pace:** ${profileData.collaborationStyle.pace} sprint → polish | **talk:** ${profileData.collaborationStyle.communication} | **feedback:** ${profileData.collaborationStyle.feedback} | **lead:** ${profileData.collaborationStyle.leadership} | **core:** ${profileData.collaborationStyle.core}\n\n  **strengths:** frontend↔backend integration • system design • docs that don't suck | **pet peeves:** vagueness • ghosting • passive vibes | **love:** shipping • rigor • good memes\n\n</details>\n\n---\n\n<a id=\"stats\"></a>\n<div style=\"max-width:1200px; margin:16px auto; padding:22px 24px; background:linear-gradient(180deg, rgba(36,22,8,0.95), rgba(48,28,10,0.9)); border:1px solid rgba(251,146,60,0.22); border-radius:16px; box-shadow:0 18px 35px rgba(15,23,42,0.28);\">\n\n## 📊 The Numbers\n\n| **Streak** | **Languages** |\n|:---:|:---:|\n| <img src=\"https://streak-stats.demolab.com?user=UDogg&theme=tokyonight&hide_border=true&date_format=j%20M%5B%20Y%5D\"/> | <img src=\"https://github-readme-stats.vercel.app/api/top-langs/?username=UDogg&layout=compact&theme=tokyonight\" /> |\n\n<p align=\"center\" style=\"margin:12px 0 0;\">\n  <img src=\"https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif\" width=\"320\"/>\n</p>\n\n<p align=\"center\">\n  <img src=\"https://github.com/BEPb/BEPb/blob/output/github-contribution-grid-snake.svg\" />\n</p>\n\n</div>\n\n---\n\n## 🌀 Philosophy\n\n<p align=\"center\">\n  <img src=\"https://github.com/UDogg/UDogg/blob/main/assets/philosophy.svg\" style=\"max-width:100%; height:auto;\"/>\n</p>\n\n---\n\n<div style=\"max-width:1200px; margin:16px auto; padding:22px 24px; background:linear-gradient(180deg, rgba(15,23,42,0.95), rgba(17,24,39,0.9)); border:1px solid rgba(148,163,184,0.22); border-radius:16px; box-shadow:0 18px 35px rgba(15,23,42,0.28);\">\n\n### 🎭 random.txt\n\n🎹 synth wizard (${profileData.profileStats.synthesizerHours}+ hours) | 📚 Dune • Evangelion • Neuromancer • light novels | 🖼️ Instagram = tech memes + synth pics | 💭 currently exploring: ${profileData.currentlyExploring.join(' • ')} | 🌙 productive 2pm–10pm + 3am chaos | ☕ fuel: coffee⁴ | 😄 dad jokes • tech memes • self-roast\n\n</div>\n\n---\n\n<div align=\"center\" style=\"max-width:1200px; margin:16px auto; padding:18px 24px; background:linear-gradient(180deg, rgba(14,21,35,0.95), rgba(17,24,39,0.88)); border:1px solid rgba(96,165,250,0.18); border-radius:16px;\">\n\n## Let's Build 🚀\n\n**[portfolio](${profileData.socialLinks.portfolio})** • **[linkedin](${profileData.socialLinks.linkedin})** • **[email](mailto:${profileData.socialLinks.email})** • **[instagram](https://instagram.com)** (memes & synth vibes)\n\n<p style=\"color:#94a3b8; font-size:0.85rem; margin-top:12px;\">\n  <strong>last updated:</strong> ${getLastUpdated()} | <strong>data source:</strong> <a href=\"profile-data.json\">profile-data.json</a>\n</p>\n\n</div>\n\n---\n\n<h3 align=\"center\" style=\"margin:20px 0 16px; color:#e0e7ff;\">\n\n✨ **let's build systems that scale, dreams that soar, and memes that hit** ✨\n\n</h3>\n\n<p align=\"center\">\n  <img src=\"https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif\" width=\"280\"/>\n</p>\n\n---\n\n<p align=\"center\" style=\"color:#94a3b8; font-size:0.9rem; margin:16px 0;\">\n\n<strong>p.s.</strong> if you made it here, you're either: (1) hiring? yes please 👀 (2) lost? it's cool, happens (3) chaos gremlin who codes at 3am? let's be friends 🤝\n\n<strong>go build something cool. 🚀</strong>\n\n</p>\n`;\n\nconst outputPath = path.join(__dirname, '../../README.md');\nfs.writeFileSync(outputPath, readme, 'utf-8');\nconsole.log('README generated successfully');\n```

3) .github/workflows/update-readme.yml

```yaml
name: Update README from Profile Data

on:
  push:
    branches:
      - main
    paths:
      - 'profile-data.json'
  workflow_dispatch:

jobs:
  update-readme:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Generate README
        run: node .github/scripts/generate-readme.js

      - name: Commit and push changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add README.md
          if git diff --cached --quiet; then
            echo "No changes to commit"
          else
            git commit -m "chore: auto-update README from profile-data.json [skip ci]"
            git push
          fi

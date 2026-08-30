# Portfolio — Dorian Gauron

Portfolio personnel multilingue (FR / EN) présentant mes expériences, projets, compétences et articles.

🌐 **Live :** [dorian-gauron.com](https://dorian-gauron.com)

---

## 🛠️ Stack Technique

- **Framework :** [Astro 6](https://astro.build)
- **Langage :** TypeScript
- **Styles :** [Tailwind CSS v4](https://tailwindcss.com)
- **Animations :** [GSAP](https://gsap.com)
- **Runtime & Package Manager :** [Bun](https://bun.sh)
- **Tooling & Versioning :** [Mise](https://mise.jdx.dev)
- **Qualité de code :** ESLint, Prettier, Knip, Astro Check
- **CI / CD :** GitHub Actions & GitHub Pages

---

## 🚀 Démarrage

### Prérequis

- [Mise](https://mise.jdx.dev) (gère automatiquement la version de Bun)

### Installation & Développement

```bash
# Installation des dépendances
bun install

# Lancer le serveur de développement
bun run dev
```

---

## 🧞 Commandes

| Commande            | Action                                                        |
| :------------------ | :------------------------------------------------------------ |
| `bun run dev`       | Lance le serveur local de dev                                 |
| `bun run build`     | Compile le site pour la production (`./dist`)                 |
| `bun run preview`   | Prévisualise le build localement                              |
| `mise run validate` | Lance toutes les vérifications CI (lint, format, types, knip) |
| `mise run fix`      | Corrige automatiquement le linting et le formatage            |

## Git workflow

After every change, commit and push to GitHub:
```bash
git add index.html css/styles.css js/main.js
git commit -m "description of change"
git push
```

Remote: `https://github.com/simopoulos/ClaudeProject1.git`

Only stage the three source files above. Do not stage `.claude/settings.local.json` or other config files unless explicitly asked.

# Dungeon Map Builder — Learning Progress

## Roadmap Overview
- [x] **Phase 1: Solo and Local** (Git basics, project skeleton, 10+ small commits, restore & amend)
- [ ] **Phase 2: Push to GitHub** (Remote repos, SSH/auth, README, secrets safety exercise)
- [ ] **Phase 3: Feature Branches & PRs** (Issues, branches, pull requests, branch protection)
- [ ] **Phase 4: Teammate Simulation & Conflicts** (Two local clones, merge conflicts, rebase vs merge)
- [ ] **Phase 5: Mistakes & Recovery** (Stash, revert, resets, reflog rescue, interactive rebase)
- [ ] **Phase 6: Professional Workflow** (CI/Actions, test checks, PR templates, git bisect)
- [ ] **Phase 7: Open Source** (Forks, upstream remotes, contributing to external repos)

---

## Current Status
- **Current Phase:** Phase 1 Complete! Transitioning to Phase 2: Push to GitHub.
- **Current Microstep:** Phase 1 End-of-Phase Quiz

## Commands Learned
- `git init`: Initializes an empty local Git repository and creates the `.git` database.
- `git config`: Inspects and sets user information (such as `user.name` and `user.email`).
- `git branch -M <name>`: Renames the primary branch to modern convention (`main`).
- `git status`: The developer's dashboard — displays the active branch, staged files, unstaged modifications, and untracked files.
- `git add <files>`: Moves changes from the Working Directory into the Staging Area (index).
- `git commit -m "<msg>"`: Records a permanent, cryptographically-hashed snapshot of staged changes into history.
- `git log --oneline`: Prints a condensed history of commits with short SHA hashes and `HEAD` markers.
- `git diff`: Shows a line-by-line comparison between modified files in the working directory and the last commit.
- `git restore <file>`: Discards unstaged working tree changes, pulling the pristine copy from the latest commit.
- `git commit --amend`: Rewrites the latest commit in-place to fix a message or include newly staged changes.

## Mistakes Practiced & Recovered
1. **Broken/corrupted file in working tree:** Intentionally ruined `server/index.js` and recovered it instantly with `git restore index.js`.
2. **Commit message typos & forgotten files:** Committed with typos (`clietn`, `scafold`) and omitted title update, then seamlessly folded fixes into the same commit with `git commit --amend`.

## Next Up
Phase 2: Push to GitHub — Create remote repository, configure authentication (SSH / GitHub CLI), push `main`, add `.env` / `.env.example`, and practice the fake secret leak exercise.

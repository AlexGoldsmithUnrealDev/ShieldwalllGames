# Shieldwall Games — Approved Stage 10B design handover

**Purpose:** Give Claude the actual approved Shieldwall redesign, not an instruction to refresh the old website with new screenshots.

Open these files first:
1. [README_START_HERE.md](README_START_HERE.md)
2. [CLAUDE_PROMPT.md](CLAUDE_PROMPT.md)
3. [Approved interactive Stage 10B HTML](01_APPROVED_DESIGN/Shieldwall_Games_Stage10B_Alive_Landscape_Mockup.html)
4. [Design and content contract](02_IMPLEMENTATION_BRIEFS/DESIGN_AND_CONTENT_CONTRACT.md)
5. [QA and integration requirements](02_IMPLEMENTATION_BRIEFS/QA_AND_INTEGRATIONS.md)

The complete original **33-file corrected handover ZIP** is stored losslessly as **17 binary parts** in `archive_parts/`. GitHub's single-upload connector could not accept the 13.3 MB binary at once. All original bytes are preserved, with no recompression. Use Python 3 to reconstruct and verify:

```bash
python docs/design-handover/shieldwall-stage10b/reassemble.py
```

Expected ZIP SHA-256: `b6e58a65cd05048737370843760390d57024a0d60d13d105c2a8ac9785169f4c`
Expected size: **13,343,319 bytes**. Expected archive members: **33**.

**Scope:** Redesign the **Shieldwall Games studio homepage only**, matching approved Stage 10B. Do not redesign Vitus. Use the current Shieldwall production logo, Njord font, existing integration including consent-gated MailerLite, SEO/legal/support links, and existing artwork until replacement landscapes are supplied.

**Authority:** The approved HTML and binding design contract override the current homepage's visual composition. The archive's older Vitus prototypes and rejected Shieldwall variants are for historic reference only.

**Do not deploy or merge a website implementation without the user's approval.** This commit only adds handover documentation and archive files; it does not change live website code.

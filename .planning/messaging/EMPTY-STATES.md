# CostFinders Empty States & Placeholders

## 1. Empty State Philosophy

Empty states are opportunities to guide, not dead ends. When users encounter "nothing here" moments, our messaging transforms potential frustration into clear next steps.

**Core principles:**

| Principle | Description |
|-----------|-------------|
| **Always helpful** | Every empty state suggests what to do next |
| **Never dead-end** | Include an action path when one exists |
| **Context-aware** | Adjust messaging based on why it's empty |
| **Encouraging, not blaming** | User didn't do anything wrong |
| **Brand-aligned** | Maintain "Approachable + Confident" voice |

**Empty state voice traits:** Helpful + Approachable (from VOICE.md)

Every empty state should answer: *Why is this empty? What can I do about it?*

---

## 2. Empty State Categories

### 2.1 First-Time Empty

**Definition:** New user or feature with no data yet.

**Characteristics:**
- Most encouraging tone
- Strong call-to-action
- Explains what will appear here
- Opportunity to guide user behavior

**Tone:** Welcoming, optimistic, action-oriented.

**Pattern:** "No {items} yet" + explanation of what goes here + primary CTA.

---

### 2.2 Search Empty

**Definition:** No results match the search query.

**Characteristics:**
- Acknowledge the search was valid
- Suggest broadening or adjusting criteria
- Offer alternative paths
- Never blame the user's query

**Tone:** Helpful, solution-focused.

**Pattern:** "No {items} found" + suggestion to adjust search + alternative action.

---

### 2.3 Filter Empty

**Definition:** Filters applied resulted in no matches.

**Characteristics:**
- Current filters are too restrictive
- Easy path to clear or adjust filters
- Show what filters are active (when possible)

**Tone:** Neutral, practical.

**Pattern:** "No {items} match your filters" + clear filters CTA.

---

### 2.4 Deleted/Removed Empty

**Definition:** Data existed but was removed or expired.

**Characteristics:**
- Neutral tone (no judgment)
- Option to rebuild or start fresh
- May explain why items are gone (expiration, deletion)

**Tone:** Neutral, forward-looking.

**Pattern:** "No {items} yet" or contextual explanation + rebuild CTA.

---

### 2.5 Error Empty

**Definition:** Failed to load data due to an error.

**Characteristics:**
- Acknowledge something went wrong
- Don't blame the user
- Provide retry option
- Suggest alternative if retry fails

**Tone:** Apologetic, recovery-focused.

**Pattern:** "Couldn't load {items}" + retry CTA + fallback suggestion.

---

### 2.6 Permission Empty

**Definition:** User lacks access to view this content.

**Characteristics:**
- Explain what's restricted
- Clarify why (tier, verification, role)
- Provide path to gain access if possible
- Don't make user feel excluded

**Tone:** Informative, not punitive.

**Pattern:** "{Items} require {requirement}" + upgrade/verify CTA.

---

## 3. Module-Specific Tone Matrix

### Consumer Module

| Tone | Warm, inviting, encouraging |
|------|----------------------------|
| **Goal** | Make users feel welcome, guide them to discover deals |
| **Avoid** | Technical language, harsh phrasing, pressure tactics |

**Examples:**

| Context | Title | Description |
|---------|-------|-------------|
| Saved deals | "No saved deals yet" | "Deals you save will appear here. Browse our collection to find something you love." |
| Claims | "No claims yet" | "When you claim a deal, it will show up here so you can track it." |
| Search results | "No deals found" | "Try adjusting your search or browse all deals in your area." |
| Notifications | "No notifications" | "You're all caught up." |

---

### Business Module

| Tone | Professional, efficient, solution-focused |
|------|------------------------------------------|
| **Goal** | Respect their time, provide clear paths to productivity |
| **Avoid** | Over-explaining, vague suggestions, unnecessary warmth |

**Examples:**

| Context | Title | Description |
|---------|-------|-------------|
| Deals list | "No deals yet" | "Create your first deal to start attracting customers." |
| Leads inbox | "No leads yet" | "When customers claim your deals, they'll appear here." |
| Messages | "No conversations yet" | "Conversations with leads will appear here." |
| Analytics | "No data yet" | "Analytics will populate as customers interact with your deals." |

---

### Admin Module

| Tone | Factual, concise, tool-oriented |
|------|--------------------------------|
| **Goal** | Provide clear status, enable quick action |
| **Avoid** | Soft language, unnecessary explanation, emotional tone |

**Examples:**

| Context | Title | Description |
|---------|-------|-------------|
| Moderation queue | "No deals pending review" | "All caught up. Check back later." |
| User search | "No users found" | "Adjust your search or filters." |
| Content list | "No items found" | "No items match the current filters." |
| Reports | "No data for selected period" | "Try selecting a different date range." |

---

*Based on Phase 17 Voice & Tone Definition and Phase 16 Messaging Audit findings. Empty state patterns support future i18n extraction.*

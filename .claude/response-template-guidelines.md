# Grant Response Template Guidelines

## CRITICAL RULE: Never Include Question Text in Response Files

**❌ WRONG:**
```markdown
# What is your organization's mission and what is the future you are working toward?

PolicyEngine's mission is to compute...
```

**✅ CORRECT:**
```markdown
PolicyEngine's mission is to compute...
```

## Why This Matters

The grants viewer (https://policyengine.github.io/grants/) displays:
1. The question text (from questions.yaml)
2. The response content (from response .md files)

If the response file starts with the question as an H1 header, the question appears TWICE when copied into grant applications.

## Validation

The grants_builder now includes validation that will warn if a response file starts with the question text:

```
⚠️  WARNING: 01_mission_vision.md starts with question text - this will be included in the response!
   Remove the H1 header: '# What is your organization's mission and what...'
```

## Response File Structure

Response files should:
- Start directly with content (no H1 question header)
- Use H2 (##) or H3 (###) for internal structure if needed
- Keep markdown formatting for emphasis (**bold**, *italic*, lists, etc.)

## Example Response File

```markdown
PolicyEngine's mission is to compute the impact of public policy for the world.

**What We Do:**
We provide computational infrastructure serving...

**Impact:**
Our work enables...
```

## Checking Your Work

Before committing:
1. Run `make build` to process all grants
2. Check for warnings about question text in responses
3. If warnings appear, remove the H1 headers from those files
4. Rebuild to confirm

## Questions Are Defined Once

Questions live in `questions.yaml` under the `sections:` key:

```yaml
sections:
  mission_vision:
    title: "Organization Mission and Vision"
    question: "What is your organization's mission and what is the future you are working toward?"
    file: "responses/01_mission_vision.md"
    char_limit: 10000
```

The viewer automatically displays the question text from questions.yaml, so response files should contain ONLY the answer.

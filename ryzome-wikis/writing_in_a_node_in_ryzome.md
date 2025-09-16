
# Writing in a Node

**Description:**  Master markdown formatting and rich content creation

Ryzome nodes support full markdown formatting, making them powerful containers for rich content. Every node is a mini-document that can hold text, images, tables, code, and more.

**Video Guide Available:**  Writing in a Node - Markdown formatting and rich content creation

## Creating Content

Click anywhere on the canvas to create a new node, then start typing. Ryzome supports all standard markdown syntax:

## Text Formatting

```markdown
**Bold text** and *italic text*
~~Strikethrough~~ and `inline code`

```

## Headers and Structure

```markdown
# Main Header
## Section Header
### Subsection

- Bullet points
- Nested lists
  - Sub-items
  - More items

1. Numbered lists
2. Sequential items
3. Ordered content

```

## Links and References

```markdown
[Link text](https://example.com)
[Internal link](/docs/quick-start)
![Image alt text](image-url.jpg)

```

## Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data     | More     | Content  |
| Row 2    | Info     | Here     |

```

## Code Blocks

```markdown
```javascript
function hello() {
  console.log("Hello, Ryzome!");
}
```

```

## Advanced Content Types

### JSON and Data

Paste JSON directly into nodes for structured data:

```json
{
  "name": "Research Project",
  "status": "active",
  "findings": ["insight 1", "insight 2"]
}

```

### CSV Data

Paste CSV content and it will be automatically formatted:

```csv
Name,Role,Department
Alice,Designer,Product
Bob,Engineer,Development

```

## Using as AI Context

When you connect nodes containing rich content to other nodes, the AI can:

-   **Read and understand**  formatted content including tables and code
-   **Reference specific sections**  from headers and structure
-   **Synthesize information**  across multiple connected markdown nodes
-   **Maintain formatting**  when generating related content

> **💡 Pro Tip:**  Use headers and bullet points to structure your content. This helps AI understand the hierarchy and relationships within your nodes.

## Best Practices

-   **Keep nodes focused**: One main idea or topic per node works best
-   **Use clear headers**: Structure your content with descriptive headers
-   **Format for readability**: Use tables, lists, and formatting to make content scannable

## Performance Considerations

> **⚠️ Performance Warning:**  Very long nodes (10,000+ characters) may impact performance. Consider breaking large content into connected smaller nodes.

## Supported Markdown Features Summary

### Basic Formatting

-   Bold (`**text**`) and italic (`*text*`)
-   Strikethrough (`~~text~~`)
-   Inline code (`` `code` ``)

### Structure Elements

-   Headers (H1-H6 with  `#`  syntax)
-   Bullet and numbered lists
-   Nested list support
-   Tables with column alignment

### Rich Content

-   Links (external and internal)
-   Images with alt text
-   Code blocks with syntax highlighting
-   JSON and CSV data formatting

### AI Integration Benefits

-   Structured content understanding
-   Section referencing capability
-   Multi-node synthesis
-   Format preservation in generation

## Key Capabilities

Every node functions as a mini-document with full markdown support, making Ryzome nodes powerful containers for rich, structured content that can be effectively utilized by AI for analysis and generation.

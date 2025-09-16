# PDF Files

**Description:**  Import and work with PDF documents

PDF documents are powerful sources of information in Ryzome. When you import a PDF, it creates a specialized PDF reader node that can be used as rich context for AI generation.

**Video Guide Available:**  PDF Files - Import and work with PDF documents

## How to Add PDFs

### Drag and Drop

Drag a PDF file from your computer directly onto the canvas. Ryzome will create a PDF reader node that displays the document content.

## PDF Reader Node Features

When you create a PDF node, you get:

-   **Full document preview**  - Browse through all pages of the PDF
-   **Text extraction**  - Ryzome automatically extracts text content for AI processing
-   **Page navigation**  - Jump to specific pages or sections
-   **Zoom and scroll**  - View documents at comfortable reading sizes

## Using PDFs as AI Context

PDFs are excellent sources of context for AI generation. When you connect a PDF node to other nodes, the AI can:

-   **Summarize the entire document**  or specific sections
-   **Extract key insights**  and main points
-   **Answer questions**  based on the PDF content
-   **Compare information**  across multiple connected PDFs
-   **Generate content**  that references and builds on the PDF material

### Example Workflow

1.  Drop a research paper PDF onto your canvas
2.  Create a text node and connect it to the PDF
3.  Use the prompt hat to ask: "Summarize the key findings and methodology from this paper"
4.  The AI will analyze the full PDF content and provide a comprehensive summary

> **💡 Research Workflow Tip:**  Connect multiple related PDFs to a single analysis node to have AI synthesize insights across multiple documents.

## Best Practices

-   **File size**: Keep PDFs under 7MB for optimal processing speed
-   **Text-based PDFs**: Work best - scanned images may have limited text extraction
-   **Academic papers**: Excellent for research synthesis and literature reviews
-   **Reports and documentation**: Perfect for extracting key insights and summaries
-   **Multiple PDFs**: Connect several related documents to build comprehensive context

## Limitations

> **⚠️ Current Limitations:**
> 
> -   PDF files should be under ~7MB for best performance
> -   Scanned PDFs (image-only) may have limited text extraction capabilities if the content is hard to read
> -   Very long documents may take longer to process initially
> -   Password-protected PDFs are not currently supported

## PDF + AI Workflows

Popular ways to use PDF nodes with AI:

-   **Literature reviews**: Connect multiple research papers and generate synthesis
-   **Document analysis**: Extract key points from reports and presentations
-   **Fact checking**: Use PDFs as authoritative sources for AI responses
-   **Content creation**: Reference PDF material when generating new content
-   **Research organization**: Build knowledge graphs from academic papers

## Key Benefits

The PDF reader node makes Ryzome particularly powerful for research-heavy workflows where you need to work with and reference multiple documents simultaneously.

## Technical Specifications

-   **File size limit**: ~7MB for optimal performance
-   **Supported content**: Text-based PDFs work best
-   **Text extraction**: Automatic processing for AI context
-   **Security**: Password-protected files not supported
-   **Processing**: Initial processing time varies with document length

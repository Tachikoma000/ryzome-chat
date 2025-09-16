## Ryzome Product Overview

- [Ryzome Product Overview](#ryzome-product-overview)
  - [**1. Company Overview**](#1-company-overview)
  - [**2. Product Deep Dive**](#2-product-deep-dive)
  - [**3. Product Strategy \& Evolution**](#3-product-strategy--evolution)
    - [**Product History \& Versions**](#product-history--versions)
    - [**Monetization Strategy**](#monetization-strategy)
    - [**Strategic Roadmap (Updated August 2025)**](#strategic-roadmap-updated-august-2025)
  - [**4. Development Progress Since v0.2.0 (July 2025)**](#4-development-progress-since-v020-july-2025)
    - [**Major Version Releases**](#major-version-releases)
    - [**Major Features Delivered Since v0.2.0**](#major-features-delivered-since-v020)
    - [**Current Sprint Priorities (Q3 2025)**](#current-sprint-priorities-q3-2025)
  - [**5. Technology \& Data Infrastructure**](#5-technology--data-infrastructure)
  - [**6. Marketing \& Messaging**](#6-marketing--messaging)
  - [**7. Future Directions**](#7-future-directions)


### **1. Company Overview**

* **Product Name:** Ryzome
* **Mission:** To create a comprehensive, agentic AI workspace that fundamentally changes how users interact with artificial intelligence.
* **Core Vision:** To solve the limitations of 1D (linear chat) AI interaction by providing a 2D (visual canvas) or even 3D workspace.  The goal is to create a "second brain that can actually think with you" [cite: 4] by making the AI context-aware through a visual interface.

### **2. Product Deep Dive**

* **The Problem:** Linear chat interfaces (like ChatGPT, Claude) are inefficient for complex thought. Users constantly switch contexts, re-type prompts, lose their flow, and struggle to see the connections between branching ideas[cite: 8, 9, 11].
* **The Solution:** Ryzome is a visual workspace where ideas exist as interconnected nodes on a 2D canvas. This spatial, relational model allows for persistent context, making AI interactions more powerful and intuitive. [cite_start]It's designed to mirror how the human mind works, where "thoughts branch naturally, connections stay visible, and everything flows".
* **Core Differentiators:**
    1.  **Visual & Spatial Interface:** A 2D canvas as the primary interaction model.
    2.  **Agentic Core:** Every node is AI-enabled, allowing for content generation, synthesis, and transformation.
    3.  **Connected Intelligence:** When nodes are connected, the AI understands the full upstream context, allowing it to synthesize information rather than just organizing it.
* **Target Audience:**
    * **Primary**: Knowledge workers who think visually (researchers, writers, consultants, strategists)
    * **Secondary**: AI power users seeking more sophisticated interaction models
    * **Tertiary**: Creative professionals and developers building complex workflows
    * **Current Challenge**: Broad targeting dilutes focus - need to identify ONE hero use case for PMF

### **3. Ryzome Competitors**
The following is non exhaustive list of competitors building product that directly competes with Ryzome, and in many ways set the stage for how we can replicate and hopefully beat their marketing approach. 

We should also not be shy to gain inspiration from how these competitors describe their product

- https://www.kuse.ai/about
- https://www.florafauna.ai
- https://www.rabbitholes.ai
- https://www.kosmik.app

### **3. Product Strategy & Evolution**

#### **Product History & Versions**

* **Beta 1 (Early Access - Deprecated):**
    * Featured multiple, distinct node types (e.g., text agent, visual agent).
    * Required users to input their own LLM provider API keys (Bring Your Own Key - BYOK).
    * Had a strong focus on a concept called "MCP" (Model Context Protocol) with a store/registry.
    * **Conclusion:** This approach was determined to have too much user friction and was overly complex for initial onboarding.

* **Beta 2 (Current Version):**
    * **Core Hypothesis:** Radically simplifying the UX will increase user activation and engagement.
    * Features a single, **unified stem node** for all initial content creation.
    * **No API keys required.** Ryzome provides LLM access directly via a credit-based system.
    * The goal is for the unified node to "customize" based on the content pasted into it (e.g., a URL creates a web node, an image creates an image node).
    * **Critical Gap Identified**: Despite simplification, users still fail to reach "aha moment" - onboarding remains the #1 priority.

#### **Monetization Strategy**

* **Current (Beta Phase):** Free to use. Users are given credits to query the backend LLM (Gemini Pro), subsidized by Ryzome's Google Cloud AI credits.
* **Future (Planned Freemium Model):**
    * **Free Tier:** Limited usage, access to a basic/fast LLM (e.g., Gemini Flash).
    * **Paid/Pro Tier:** Unlimited usage, access to a selection of premium AI models, and advanced features like collaboration.
* **Strategic Concern**: Credit system may be too complex for consumer adoption - considering simpler subscription model with usage-based enterprise tier.

#### **Strategic Roadmap (Updated August 2025)**

**Current Focus: Solving the Activation Crisis**
* **Immediate Priority**: Canvas-as-landing-page with compelling pre-populated example
* **Goal**: < 10 seconds from discovery to first meaningful generation
* **Success Metric**: 40% day-7 retention (currently much lower)

**Top-level KPI Mapping**
* **Growth (Top of Funnel)**: New users acquired, published canvases, K-factor, organic traffic
* **Retention (Bottom of Funnel)**: Time to first value, DAU/WAU, node interconnection rate, D7/D30 retention

**Ryzome Retention: The Thinking Canvas (60% of resources)**
* **Content Drop-In**: Multi-format content import (PDFs, YouTube, Wikipedia, images)
* **Node Grouping**: Visual organization and context management for connected nodes
* **State Management**: Performance improvements, undo/redo, collaborative editing foundation
* **External Imports**: Google Drive, Notion, GitHub integration for existing workflows

**Ryzome Growth: Scaling Network Effects (30% of resources)**
* **Canvas Publishing**: Public discovery, SEO/LEO content strategy
* **Sharing & Collaboration**: Google Docs-style permissions and real-time editing
* **Viral Mechanics**: Template marketplace, "Made with Ryzome" attribution
* **Community Features**: User-generated content, showcase galleries

**Critical Missing (10% of resources)**
* **Mobile Experience**: Currently losing 40%+ of users with "desktop only" message
* **Model Selection**: Power user retention requires GPT-4, Claude, and specialized models
* **Performance**: Canvas must feel instant (< 100ms interactions) for professional use

### **4. Development Progress Since v0.2.0 (July 2025)**

#### **Major Version Releases**
* **[v0.4.0](https://github.com/0xPlaygrounds/ryzome/releases/tag/v0.4.0)** (Aug 18, 2025): Publication Backend, pricing section, branding updates, improved logging
* **[v0.3.1](https://github.com/0xPlaygrounds/ryzome/releases/tag/v0.3.1)** (Aug 15, 2025): Auth domain fixes, AWS API URL updates  
* **[v0.3.0](https://github.com/0xPlaygrounds/ryzome/releases/tag/v0.3.0)** (Aug 15, 2025): Auto-generated node titles, text selection fixes, analytics improvements
* **[v0.2.11](https://github.com/0xPlaygrounds/ryzome/releases/tag/v0.2.11)** (Aug 13, 2025): MongoDB credentials, plans tab visibility, node creation performance
* **[v0.2.10](https://github.com/0xPlaygrounds/ryzome/releases/tag/v0.2.10)** (Aug 11, 2025): Cross-canvas node copying, Stripe integration, generation service implementation
* **[v0.2.1-v0.2.9](https://github.com/0xPlaygrounds/ryzome/releases)** (July-Aug 2025): Foundation improvements, UX enhancements, infrastructure stability

#### **Major Features Delivered Since v0.2.0**

**🚀 Core Platform Evolution**
* **Canvas Publishing Infrastructure:** Complete backend for public canvas sharing with SEO optimization
* **Universal Node System:** Simplified single-node approach replacing complex multi-node types
* **Streaming Generation Service:** Real-time content generation with ECS-based architecture
* **Template System:** Canvas template creation and sharing capabilities
* **Cross-Canvas Operations:** Node copying and canvas duplication functionality

**💰 Monetization & Business**
* **Stripe Integration:** Complete payment processing and subscription management
* **Credit System:** Refined credit-based usage model with automatic approval
* **Pricing Infrastructure:** Landing page pricing sections and subscription tiers
* **Waitlist Management:** Streamlined user onboarding and approval processes

**🎨 User Experience Improvements**
* **Auto-Generated Node Titles:** Intelligent node naming for better organization
* **Enhanced Onboarding:** Welcome modals, tooltips, and guided tour content
* **Improved Canvas Editor:** Better text selection, resizing, scrolling, and keyboard shortcuts
* **Content Drop-In:** Direct text/markdown pasting into canvas with HTML-to-markdown conversion
* **Performance Optimizations:** Eliminated API endpoint spamming, faster node creation

**🔧 Technical Infrastructure**
* **Enhanced Logging:** Comprehensive request tracking across all backend services
* **MongoDB Improvements:** Automatic credential refresh and connection management
* **Analytics Upgrades:** PostHog integration with adblocker-resistant proxy
* **Database Security:** Automated backups, deletion protection, and snapshot policies
* **CDK Improvements:** Better static checking and deployment reliability


#### **Current Sprint Priorities (Q3 2025)**

**Activation-Critical (Must Ship)**
* **Canvas-as-Landing-Page**: Pre-populated compelling example for instant value demonstration
* **Content Drop-In MVP**: PDF, YouTube, Wikipedia support for immediate content richness
* **Performance Optimization**: Sub-100ms canvas interactions, faster node creation

**Growth Engine Foundation**
* **Publishing Discovery**: Public canvas galleries with SEO optimization
* **Viral Sharing**: One-click canvas sharing with "Made with Ryzome" attribution
* **Template System**: User-generated canvas templates for common workflows

**Differentiation Builders**
* **Node Grouping**: Visual organization unique to Ryzome's spatial approach
* **Agentic Capabilities**: Enhanced AI context awareness through node connections
* **Multi-Modal Generation**: Image, video, audio content within canvas nodes

**Success Metrics Being Tracked**
* Time to first generation: Target < 60 seconds (currently ~5 minutes)
* Day-7 retention: Target 40% (current baseline being established)
* Weekly active users: Target 1,000 by end of Q3
* Published canvases: Target 100/week indicating engagement depth

### **5. Technology & Data Infrastructure**

* **Backend Database:** MongoDB.
* **Analytics Platform:** PostHog.
* **AI Model Integration:**
    * **Current**: Gemini Pro via Google Cloud AI (single model approach)
    * **Planned**: Multi-model support (Gemini Flash for free tier, GPT-4/Claude for power users)
    * **Strategic Gap**: Power user retention requires model choice and advanced capabilities
* **Data Analytics Strategy:**
    * **Event-Based Tracking:** PostHog tracking for activation funnel optimization
    * **Key Metrics**: Time to first generation, node interconnection rates, canvas publishing frequency
    * **Focus**: User activation and retention analytics over feature usage analytics
### **6. Marketing & Messaging**

* **Key Taglines:**
    * "Think. Connect. Create."
    * "Your ideas, amplified."
    * "Ryzome: Your thoughts. Connected. Amplified." 
    * **New Focus**: "The second brain that actually thinks with you"

* **Core Messaging Points:**
    * Ryzome is a "living knowledge graph that thinks with you".
    * It brings "visual thinking of a canvas with the power of Al - all in one beautiful, intuitive space"[cite: 44].
    * **Differentiation**: "Obsidian Canvas meets AI, but reimagined" - emphasis on unique agentic capabilities
    * **Problem/Solution**: "Linear chat fails for complex thought. Ryzome makes AI context-aware through visual relationships."

* **Strategic Messaging Challenges:**
    * **Positioning Gap**: Clear differentiation vs. existing tools (Obsidian + AI plugins, Miro + AI)
    * **Complexity vs. Simplicity**: Balancing "powerful agentic workspace" with "simple to start"

* **Recommended Messaging Strategy:**
    * Lead with specific workflow demonstrations rather than abstract concepts
    * Focus on "time to aha moment" in all marketing materials
    * Emphasize unique capabilities that only spatial AI can provide
    * Build content strategy around published canvas examples

### **7. Future Directions**

* **Agentic Canvas Operations**: Agents that can restructure canvases (create/connect/group/summarize)
* **Knowledge Workspace**: Searchable, tagged library with backlinks and semantic search
* **Connectors & Live Context**: Notion, Drive, GitHub, YouTube; sync and delta updates
* **Templates & Marketplace**: SEO publishing, cloning, premium templates, creator payouts
* **Collaboration**: Live editing, comments, presence, roles; review and suggestion modes
* **Multimodal Generation**: Diagramming, table extraction, audio/video nodes
* **Model Choice**: Gemini/GPT/Claude routing with cost controls for power users
* **Mobile & Tablet**: Read-first, quick capture, later touch-native editing
* **Analytics Loops**: Canvas views, clones, engagement; creator dashboards
* **Trust at Scale**: Zero lost work SLO, privacy controls, SOC2 path

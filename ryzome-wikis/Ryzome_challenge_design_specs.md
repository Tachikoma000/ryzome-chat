# Ryzome Challenge


## Overview

  

This document provides comprehensive information to help guide the redesign of Ryzome Challenge web pages. 

Ryzome challenge is a social-first competition where creators publish their best Ryzome canvases and compete for engagement both on-platform (stars) and off-platform (social media).

**Total Prize Pool**: 250,000 ARC
**Duration**: 14 days
**Max Submissions**: 5 canvases per user

---

## Core User Flows

### **Flow 1: General Visitor**

```

Landing on /challenge webpage

↓

View challenge details, leaderboard, submissions gallery

↓

Click "Enter Competition" → Redirected to sign-in

↓

Sign up/Sign in → Redirected back to /challenge/dashboard

```

  

### **Flow 2: Logged-In User (No Published Canvases)**

```

Landing on /challenge

↓

Click "Enter Competition"

↓

Modal: "No Published Canvas Found"

↓

[Create Canvas] button → Canvas editor

↓

Publish canvas → Return to challenge

↓

Submit entry with social media link

```

  

### **Flow 3: Logged-In User (Has Published Canvases)**

```

Landing on /challenge

↓

Click "Enter Competition"

↓

Modal: "Select Your Canvas" (shows published canvases)

↓

Select canvas → "Submit Your Canvas" modal

↓

Add social media link → Submit entry

↓

Success → Redirected to /challenge/dashboard

```

  

### **Flow 4: Competition Participant Management**

```

/challenge/dashboard

↓

View current ranking, score breakdown, entries

↓

Options:

- Update social media links (24hr cooldown)

- Add new canvas submission (max 5 total)

- Delete existing entries

- View detailed performance metrics

```

---
## User Experience Considerations

### **Entry Requirements**

- Must have Ryzome account (logged in)

- Must have at least one published canvas

- Must share canvas on social media with #RyzomeChallenge

- One canvas per entry (can update social link and submit multiple social links per submission)

  

### **Submission Constraints**

- Maximum 5 canvas submissions per user

- Can change which canvas is entered (before deadline)

- Can update social links

- Social posts must be public and include #RyzomeChallenge

  

### **Fair Play Measures**

- Unusual engagement patterns flagged

- Manual review of top 20 entries

- Clear rules about authentic engagement

- 24-hour cooldown on social link updates

  

---
  

## Page Architecture

  

### **Page 1: Public Landing Page** (`/challenge`)

  

#### **Section 1: Hero Section**

-  **Purpose**: Grab attention, communicate value proposition

-  **Content**:

- Large "Ryzome Challenge" title with gradient text

- Subtitle: "14 Days. 250,000 ARC. Ryzome Rewards. Show us what you've built."

- Description paragraph about the competition

- Live countdown timer (Days, Hours, Minutes, Seconds)

- Prize pool highlight: "Total Prize Pool: 250,000 ARC", "Ryzome credits"

- CTA buttons (conditional based on auth login state)

  

#### **Section 2: Call-to-Action Buttons**

-  **For Anonymous Users**:

- Primary: "Enter Competition" (redirects to sign-in)

- Secondary: "Sign Up to Compete"

-  **For Logged-In Users**:

- Primary: "View My Dashboard"

- Secondary: "Enter Competition" (opens submission modal)

  

#### **Section 3: Live Statistics**

-  **Three-column grid**:

- Participants count with icon

- Total submissions with icon

- Total engagement with icon

-  **Data Source**: Real-time from competition API


#### **Section 4: Leaderboard**

-  **Tabbed Interface**:

- **Top Scores**: Overall ranking by total score

- **Trending**: 24hr velocity ranking

- **Most Starred**: Platform engagement only

- **Best Videos**: Content type filter

-  **Each Entry Shows**:

- Rank position with movement indicators (↑↓)

- Canvas thumbnail

- Creator name and avatar

- Total score breakdown

- Social platform indicators

  

#### **Section 5: Submissions Gallery**

-  **Grid Layout**: Responsive canvas cards

-  **Each Card Contains**:

- Canvas preview thumbnail

- Canvas title and description

- Creator information

- Score metrics (stars, social engagement)

- "View Canvas" button (read-only viewer)

- "View Post" button (social media link)

  

### **Page 2: Competition Dashboard** (`/challenge/dashboard`)

  

#### **Section 1: Performance Overview**

-  **Current Ranking**: Large, prominent display

-  **Total Score**: With breakdown (Platform + Social)

-  **Performance Graph**: Score over time visualization

-  **Quick Stats**: Position change, recent activity

  

#### **Section 2: My Entries Management**

-  **Entry Cards Grid**: Up to 5 submissions

-  **Each Entry Card**:

- Canvas thumbnail and title

- Current score and ranking for this entry

- Social media performance metrics

- "Update Social Link" button

- "Delete Entry" option

- Last updated timestamp

  

#### **Section 3: Add New Entry**

-  **Add Entry Button**: If under 5 submissions

-  **Canvas Selection**: Modal with published canvases

-  **Social Link Input**: Platform detection and validation

  

#### **Section 4: Social Link Manager**

-  **Current Links**: Display active social media posts

-  **Update Interface**: 24-hour cooldown indicator

-  **Platform Support**: Twitter/X, YouTube, LinkedIn, Blog posts

-  **Validation**: URL format and platform detection

  

### **Page 3: Individual Submission** (`/challenge/[entryId]`)

#### **Section 1: Canvas Viewer**

-  **Full Canvas Display**: Read-only interactive viewer

-  **Canvas Information**: Title, description, tags, creator

  
#### **Section 2: Competition Details**

-  **Score Breakdown**: Platform vs Social engagement

-  **Ranking Information**: Current position and movement

-  **Social Media Links**: Direct links to posts

  

#### **Section 3: Creator Profile**

-  **Creator Information**: Name, avatar, bio

-  **Other Submissions**: Links to creator's other entries

-  **Social Media Profiles**: Creator's social links

  

---

  

## Current Design System

  

### **Color Palette**

```css

/* Primary Colors */

--ryzome-deep-canopy: #000000  /* Primary background */

--ryzome-rootstem-green: #9AE064  /* Primary CTA, success */

--ryzome-signal-violet: #7F5AF0  /* Secondary actions */

--ryzome-sproutlight: #049D56  /* Accent, gradients */

  

/* Neutral Colors */

--ryzome-mycelium-veil: #E2E2E2  /* Light text, borders */

--ryzome-rhizome-night: #16161A  /* Dark surfaces */

--ryzome-warm-white: #FFFFFF  /* Primary text */

  

/* Semantic Colors */

--ryzome-success: #10B981  /* Success states */

--ryzome-warning: #F59E0B  /* Warning states */

--ryzome-error: #EF4444  /* Error states */

--ryzome-info: #3B82F6  /* Info states */

```

  

### **Typography**

```css

/* Primary Font */

font-family: "Mona Sans", sans-serif;

  

/* Hierarchy */

- Hero Title: text-5xl to text-7xl, font-bold

- Section Headers: text-2xl to text-3xl, font-semibold

- Body  Text: text-base to text-lg

- Captions: text-sm to text-xs

```

  

### **Component Patterns**

-  **Cards**: Rounded corners, subtle borders, backdrop blur effects

-  **Buttons**: Primary (green), Secondary (violet outline), Ghost variants

-  **Modals**: Centered, backdrop blur, smooth animations

-  **Grids**: Responsive with proper spacing and alignment

  

---

  

## Component Architecture

  

### **Core Components**

  

#### **ChallengeHero.tsx**

-  **Purpose**: Main hero section with countdown and CTAs

-  **Props**: None (uses hooks for data)

-  **State**: Countdown timer, submission modal toggle

-  **Key Features**: Real-time countdown, conditional CTAs based on auth

  

#### **ChallengeLeaderboard.tsx**

-  **Purpose**: Tabbed leaderboard with multiple sorting options

-  **Props**: None (uses competition hooks)

-  **State**: Active tab, sort preferences

-  **Key Features**: Real-time updates, movement indicators, responsive design

  

#### **SubmissionGallery.tsx**

-  **Purpose**: Grid display of all competition submissions

-  **Props**: None (uses competition hooks)

-  **State**: Loading, error handling

-  **Key Features**: Infinite scroll, filtering, responsive grid

  

#### **CompetitionDashboard.tsx**

-  **Purpose**: User's personal competition management interface

-  **Props**: None (uses user-specific hooks)

-  **State**: Entry management, social link updates

-  **Key Features**: Entry CRUD operations, performance tracking

  

#### **EntrySubmissionModal.tsx**

-  **Purpose**: Canvas selection and submission flow

-  **Props**: `isOpen`, `onClose`, `onSuccess`

-  **State**: Canvas selection, social link input, validation

-  **Key Features**: Canvas eligibility checking, platform detection


---

  

##  Responsive Design Considerations

  

### **Mobile (320px - 768px)**

-  **Hero**: Stacked layout, smaller countdown timer

-  **Leaderboard**: Horizontal scroll for tabs, simplified cards

-  **Gallery**: Single column grid, touch-friendly interactions

-  **Dashboard**: Stacked entry cards, collapsible sections

  

### **Tablet (768px - 1024px)**

-  **Hero**: Two-column layout for content and timer

-  **Leaderboard**: Full tab interface, two-column entry grid

-  **Gallery**: Two-column grid with larger previews

-  **Dashboard**: Two-column entry layout

  

### **Desktop (1024px+)**

-  **Hero**: Full-width with centered content, prominent timer

-  **Leaderboard**: Three-column entry grid, full feature set

-  **Gallery**: Three to four-column grid with hover effects

-  **Dashboard**: Multi-column layout with sidebar navigation

---

  

## Interactive Elements

  

### **Countdown Timer**

-  **Display**: Four boxes (Days, Hours, Minutes, Seconds)

-  **Update**: Real-time every second

-  **Styling**: Dark background with green accent numbers

-  **Responsive**: Smaller on mobile, larger on desktop

  

### **Leaderboard Tabs**

-  **Behavior**: Smooth transitions between views

-  **Active State**: Clear visual indication

-  **Loading**: Skeleton states during data fetch

-  **Empty State**: Messaging when no data available

  

### **Entry Cards**

-  **Hover Effects**: Subtle elevation and glow

-  **Click Actions**: Navigate to detail view or canvas viewer

-  **Status Indicators**: Visual badges for entry status

-  **Score Animation**: Smooth number transitions

  

### **Submission Modal**

-  **Multi-Step Flow**: Canvas selection → Social link → Confirmation

-  **Validation**: Real-time input validation with error messages

-  **Progress**: Step indicators showing current position

-  **Accessibility**: Proper focus management and keyboard navigation

---

## Scoring System Visualization

  


**scoring mechanics (how to win)**

`total score = ryzome platform score + social score

platform score:
- canvas stars × 10 points

social score:
- twitter likes × 2 point
- twitter retweets × 3 points  
- twitter quote tweets × 5 points
- twitter views × 1 points
- twitter comments × 2 points
- youtube views × 1 points
- youtube likes × 2 points
- youtube comments × 3 points

content bonus:
- video content: 1.5x multiplier
- thread with visuals: 1.2x multiplier
- single tweet: 1.0x multiplier`

**prize distribution**

`1st Place: 80,000 ARC + 5000 ryzome credits
2nd Place: 40,000 ARC + 3000 ryzome credits
3rd Place: 25,000 ARC + 1500 ryzome credits
4th-10th: 5,000 ARC each (35,000 total) + 500 ryzome credits 
trending winner: 10,000 ARC (highest trending score) + 1000 credits
community choice: 10,000 ARC (most starred) + 700 credits
all remaining participants: 300 credits`
  

### **Score Display Components**

-  **Total Score**: Large, prominent number with breakdown tooltip

-  **Platform Score**: Stars icon with multiplier visualization

-  **Social Score**: Platform icons with engagement metrics

-  **Content Bonus**: Badge indicators for multipliers

-  **Progress Bars**: Visual representation of score components

---

## Design Opportunities

### **Visual Hierarchy**

-  **Hero Section**: Bold, impactful with strong contrast

-  **Countdown Timer**: Eye-catching, urgent feeling

-  **Leaderboard**: Clean, scannable with clear rankings

-  **Gallery**: Engaging previews that encourage exploration

-  **Dashboard**: Organized, actionable with clear next steps

  

### **Brand Expression**

-  **Ryzome Identity**: Organic, growth-focused, innovative

-  **Competition Energy**: Exciting, competitive, rewarding

-  **Social Aspect**: Connected, shareable, viral potential

-  **Technical Excellence**: Polished, professional, cutting-edge

  

### **Emotional Design Goals**

-  **Excitement**: About the competition and prizes

-  **Confidence**: In the platform and submission process

-  **Community**: Feeling part of something bigger

-  **Achievement**: Pride in rankings and scores

-  **Motivation**: To create and share better content

---

  

## Interactive States

  

### **Loading States**

-  **Skeleton Loaders**: For leaderboard entries, gallery cards

-  **Spinner Indicators**: For form submissions, data updates

-  **Progressive Loading**: Images load with blur-to-sharp transition

-  **Optimistic Updates**: Immediate UI feedback for user actions

  

### **Error States**

-  **Network Errors**: Retry buttons with clear messaging

-  **Validation Errors**: Inline form validation with helpful hints

-  **Authentication Errors**: Redirect to sign-in with return URL

-  **API Errors**: Graceful degradation with fallback content

  

### **Empty States**

-  **No Entries**: Encouraging message with "Create Canvas" CTA

-  **No Published Canvases**: Guide to publishing process

-  **Leaderboard Loading**: Skeleton cards maintaining layout

-  **Gallery Empty**: Placeholder with submission encouragement

  

### **Success States**

-  **Entry Submitted**: Confirmation with next steps

-  **Social Link Updated**: Success message with cooldown timer

-  **Score Increased**: Animated score updates with celebration

-  **Ranking Improved**: Movement indicators with positive feedback

  

---

  

## Animation & Transitions

  

### **Micro-Interactions**

-  **Button Hovers**: Subtle scale and color transitions

-  **Card Hovers**: Elevation and glow effects

-  **Score Updates**: Number counting animations

-  **Ranking Changes**: Smooth position transitions

  

### **Page Transitions**

-  **Modal Animations**: Slide-in from bottom, fade backdrop

-  **Tab Switching**: Smooth content transitions

-  **Navigation**: Page transitions with loading indicators

-  **Form Submissions**: Loading states with progress indication

  

### **Real-time Updates**

-  **Countdown Timer**: Smooth second-by-second updates

-  **Score Changes**: Animated number increments

-  **Leaderboard**: Position changes with movement indicators

-  **New Submissions**: Fade-in animations for new entries

  

---

  

## Accessibility 

  

### **Keyboard Navigation**

-  **Tab Order**: Logical flow through interactive elements

-  **Focus Indicators**: Clear visual focus states

-  **Modal Management**: Proper focus trapping and restoration

-  **Skip Links**: Quick navigation to main content


### **Color & Contrast**

-  **Color Independence**: Information not conveyed by color alone

-  **Dark Mode Support**: Consistent experience across themes

-  **High Contrast Mode**: Enhanced visibility options

---

  
### **User Journey Metrics**

-  **Conversion Funnel**: Visitor → Sign-up → Entry submission

-  **Engagement Depth**: Time spent, pages viewed, interactions

-  **Feature Usage**: Most used tabs, popular submission types

-  **Drop-off Points**: Where users abandon the flow

  

---


## Design System Extensions

  

### **Competition-Specific Components**

-  **Score Badges**: Consistent styling for different score ranges

-  **Platform Icons**: Social media platform indicators

-  **Ranking Badges**: Visual hierarchy for leaderboard positions

-  **Progress Indicators**: Multi-step form progress

-  **Countdown Elements**: Timer component variations

  

### **Animation Library**

-  **Entrance Animations**: Fade-in, slide-up for content

-  **Hover States**: Consistent interaction feedback

-  **Loading Animations**: Skeleton loaders, spinners

-  **Success Celebrations**: Confetti, pulse effects for achievements

  

### **Responsive Patterns**

-  **Grid Systems**: Flexible layouts for different content types

-  **Navigation Patterns**: Mobile-first navigation design

-  **Modal Behaviors**: Full-screen on mobile, centered on desktop

-  **Touch Interactions**: Swipe gestures, touch-friendly targets

  

---

  

## 🔍 Scenarios

  

### **User Journey **

1.  **Anonymous Visitor**: Browse → Sign up → Submit entry

2.  **Returning User**: Dashboard → Update social link → View ranking

3.  **New Participant**: First submission → Social sharing → Score tracking

4.  **Active Competitor**: Multiple entries → Performance optimization

  

### **Edge Cases**

-  **No Published Canvases**: Proper guidance to canvas creation

-  **Submission Limit Reached**: Clear messaging and alternatives

-  **Invalid Social Links**: Helpful validation and correction

-  **Network Issues**: Offline states and retry mechanisms

---

 
## 📝 Content Guidelines

  

### **Messaging Tone**

-  **Exciting**: Build anticipation and energy

-  **Clear**: Simple, jargon-free instructions

-  **Encouraging**: Motivate participation and creativity

-  **Professional**: Maintain credibility and trust

  

### **Copy Requirements**

-  **Headlines**: Action-oriented, benefit-focused

-  **Descriptions**: Concise but comprehensive

-  **CTAs**: Clear, specific action words

-  **Error Messages**: Helpful, solution-oriented

  

### **Social Media Integration**

-  **Hashtag**: #RyzomeChallenge (required)

-  **Platform Support**: Twitter/X, YouTube, LinkedIn, Blog posts

-  **Content Types**: Videos (2x bonus), Threads (1.2x), Single posts (1x)

-  **Sharing Tools**: Pre-filled social media share buttons

  

---


##  Success Metrics

  

### **Participation Goals**

- 200+ competition entries

- 50,000+ social media engagements

- 25% conversion to active Ryzome users

  

### **Engagement Goals**

- Average 3+ challenge page visits per user

- 40% of visitors view at least one canvas

- 20% of visitors star a canvas

  


---

  

## Design Deliverables

  

### **Visual Design**

- [ ] Hero section redesign with improved visual impact

- [ ] Countdown timer with more engaging visual treatment

- [ ] Leaderboard cards with better information hierarchy

- [ ] Submission gallery with enhanced preview experience

- [ ] Dashboard layout with improved user experience

  

### **Component Library**

- [ ] Competition-specific UI components

- [ ] Score visualization components

- [ ] Social platform indicator icons

- [ ] Ranking badge system

- [ ] Progress indicator components

  

### **Responsive Design**

- [ ] Mobile-first approach with touch-friendly interactions

- [ ] Tablet optimization for hybrid usage patterns

- [ ] Desktop experience with rich hover states

- [ ] Cross-browser compatibility testing

  

### **Animation & Interaction**

- [ ] Micro-interactions for better user feedback

- [ ] Page transition animations

- [ ] Loading state animations

- [ ] Success celebration animations

  

---

## 🎯 Design Priorities

  

### **High Priority**

1.  **Hero Section Impact**: Make the first impression compelling

2.  **Mobile Experience**: Ensure excellent mobile usability

3.  **Leaderboard Clarity**: Easy to scan and understand rankings

4.  **Entry Submission Flow**: Smooth, intuitive submission process

  

### **Medium Priority**

1.  **Dashboard Organization**: Clear information architecture

2.  **Gallery Engagement**: Encourage exploration of submissions

3.  **Score Visualization**: Make scoring system transparent

4.  **Social Integration**: Seamless social media connection

  

### **Nice to Have**

1.  **Advanced Animations**: Delightful micro-interactions

2.  **Dark Mode Optimization**: Enhanced dark theme experience

3.  **Accessibility Enhancements**: Beyond basic compliance

4.  **Performance Optimizations**: Advanced loading strategies

  

---

## 📱 Platform-Specific Considerations

  

### **Mobile Design**

-  **Touch Targets**: Minimum 44px for all interactive elements

-  **Thumb Zones**: Important actions within easy reach

-  **Swipe Gestures**: Natural navigation patterns

-  **Viewport Optimization**: Proper scaling and zoom behavior

  

### **Desktop Design**

-  **Hover States**: Rich feedback for mouse interactions

-  **Keyboard Shortcuts**: Power user efficiency features

-  **Multi-column Layouts**: Efficient use of screen real estate

-  **Context Menus**: Right-click functionality where appropriate

  

### **Cross-Platform**

-  **Progressive Enhancement**: Core functionality works everywhere

-  **Feature Detection**: Graceful degradation for older browsers

-  **Performance Budgets**: Consistent experience across devices

-  **Accessibility Standards**: Universal usability principles

  

---

the ryzome challenge itself: what it is: the ryzome challenge is social-first challenge where creators publish their best ryzome canvases and compete for engagement both on-platform (stars) and off-platform (social media). challenge mechanics: **entry requirements**

`1. must have a ryzome account (logged in) to participate

2. only published canvases can be entered into the competition

3. must share canvas on social media 

4. max of 5 entries per participant`

**scoring mechanics (how to win)**

`total score = ryzome platform score + social score

platform score:
- canvas stars × 10 points

social score:
- twitter likes × 2 point
- twitter retweets × 3 points  
- twitter quote tweets × 5 points
- twitter views × 1 points
- twitter comments × 2 points
- youtube views × 1 points
- youtube likes × 2 points
- youtube comments × 3 points

content bonus:
- video content: 1.5x multiplier
- thread with visuals: 1.2x multiplier
- single tweet: 1.0x multiplier`

**prize distribution**

`1st Place: 80,000 ARC + 5000 ryzome credits
2nd Place: 40,000 ARC + 3000 ryzome credits
3rd Place: 25,000 ARC + 1500 ryzome credits
4th-10th: 5,000 ARC each (35,000 total) + 500 ryzome credits 
trending winner: 10,000 ARC (highest trending score) + 1000 credits
community choice: 10,000 ARC (most starred) + 700 credits
all remaining participants: 300 credits`

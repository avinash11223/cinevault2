# CineVault - Movie Review Application

A Svelte-based movie review application that allows users to browse movies, read reviews, and add their own reviews.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Components](#components)
- [Pages](#pages)
- [Stores](#stores)
- [Features](#features)



## Setup Instructions

1. **Clone the repository**

2. **Install dependencies**
   ```plaintext
   npm install
   ```
   
3. **Start development server**

```plaintext
npm run dev
```
or with browser open
```plaintext
npm run dev -- --open
```

## Project Structure
```plaintext
cinevault/
├── src/
│ ├── lib/
│ │ ├── components/
│ │ │ ├── MovieCard.svelte
│ │ │ └── ReviewForm.svelte
│ │ ├── data/
│ │ │ └── movies.ts
│ │ ├── stores/
│ │ │ └── movieStore.ts
│ │ └── types/
│ │  └── index.ts
│ ├── routes/
│ │ ├── +page.svelte
│ │ └── movie/[id]/+page.svelte
│ └── app.scss
├── static/
└── package.json
```  
## Components

### MovieCard.svelte
**Purpose**: Displays individual movie information
- Movie poster display
- Basic movie information
- Rating display
- Click navigation to detail view

### ReviewForm.svelte
**Purpose**: Handles user review submission
- Star rating system (1-5 stars)
- Comment input field
- Form validation
- Submission handling

## Pages

### Home Page (+page.svelte)
- Movie grid display
- Search functionality
- Responsive layout

### Movie Detail Page (movie/[id]/+page.svelte)
- Detailed movie information
- Review list
- Add review functionality

## Stores

### movieStore.ts
Central state management with features:
- Movie data management
- Review addition
- Search functionality


## Features

1. Movie Browsing
   - Grid layout
   - Search functionality
   - Filtering options

2. Review System
   - Star ratings
   - Comment system
   - Real-time updates

3. UI/UX
   - Responsive design
   - Dark theme
   - Smooth animations

4. Technical
   - TypeScript support
   - SCSS styling
   - State management




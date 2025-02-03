# CineVault - Movie Review Application

A Svelte-based movie review application that allows users to browse movies, read reviews, and add their own reviews.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Components](#components)
- [Pages](#pages)
- [Stores](#stores)
- [Styling](#styling)
- [Types](#types)
- [Configuration](#configuration)
- [Features](#features)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Setup Instructions

1. **Clone the repository**
bash
git clone <repository-url>
cd cinevault

2. **Install dependencies**
bash
npm install

3. **Start development server**
bash
npm run dev
or with browser open
npm run dev -- --open

## Project Structure
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
│ │ └── index.ts
│ ├── routes/
│ │ ├── +page.svelte
│ │ └── movie/[id]/+page.svelte
│ └── app.scss
├── static/
└── package.json

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
typescript
// Example usage
import { movieStore } from '$lib/stores/movieStore';
// Add review
movieStore.addReview(movieId, { rating: 5, comment: "Great movie!" });
// Search movies
const results = movieStore.searchMovies("Matrix");

## Styling

The application uses SCSS with a dark theme:
scss
:root {
--background-primary: #1e1e2e;
--background-secondary: #1a1a2e;
--text-primary: #fff;
--text-secondary: #a0a0a0;
--accent: #f5c518;
}


## Types
ypescript
interface Movie {
id: number;
title: string;
poster: string;
description: string;
releaseDate: string;
genre: string;
runtime: number;
reviews: Review[];
}
interface Review {
rating: number;
comment: string;
}

## Configuration

Key configuration files:
- `svelte.config.js` - Svelte configuration
- `vite.config.ts` - Vite bundler settings
- `tsconfig.json` - TypeScript configuration
- `.prettierrc` - Code formatting
- `eslint.config.js` - Linting rules

## Features

1. 🎬 Movie Browsing
   - Grid layout
   - Search functionality
   - Filtering options

2. ⭐ Review System
   - Star ratings
   - Comment system
   - Real-time updates

3. 🎨 UI/UX
   - Responsive design
   - Dark theme
   - Smooth animations

4. 🛠 Technical
   - TypeScript support
   - SCSS styling
   - State management

## Dependencies

Main dependencies:
- Svelte 5.0.0
- SvelteKit 2.16.0
- TypeScript 5.0.0
- SASS 1.83.4

Dev dependencies:
- Vite 6.0.0
- ESLint 9.18.0
- Prettier 3.4.2


## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Support

For support, email support@cinevault.com or join our Slack channel.

## Acknowledgments

- Movie data provided by TMDB API
- Icons from FontAwesome
- UI inspiration from IMDb
This README provides a comprehensive overview of the project while maintaining a clean, organized structure. It includes all necessary information for developers to understand and contribute to the project, while also providing clear setup instructions and usage examples.



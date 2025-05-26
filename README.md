# YouTube Clone - Frontend Application

A pixel-perfect YouTube homepage clone built with Next.js, TypeScript, Tailwind CSS, and React Query.

## 🚀 Features

- **Pixel-perfect YouTube UI**: Nearly identical to the actual YouTube homepage
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, React Query
- **Professional Architecture**: Clean separation of concerns with proper data fetching infrastructure
- **Reusable Components**: Modular component architecture for maintainability
- **Loading States**: Skeleton loaders and error handling
- **Hover Effects**: Interactive video cards with YouTube-like hover animations
- **Accessibility**: Proper ARIA labels, keyboard navigation, and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: TanStack React Query
- **Icons**: Lucide React
- **State Management**: React Hooks + React Query

## 📁 Project Structure

```
youtube-clone/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   │   ├── Button.tsx
│   │   └── Avatar.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Layout.tsx
│   ├── video/            # Video-related components
│   │   ├── VideoCard.tsx
│   │   └── VideoGrid.tsx
│   └── common/           # Common components
│       ├── LoadingSpinner.tsx
│       └── ErrorMessage.tsx
├── lib/                  # Business logic & utilities
│   ├── api/             # API client & endpoints
│   │   ├── client.ts
│   │   └── types.ts
│   ├── hooks/           # Custom React hooks
│   │   └── useVideos.ts
│   ├── utils/           # Utility functions
│   │   ├── formatters.ts
│   │   └── mockData.ts
│   └── providers/       # React providers
│       └── QueryProvider.tsx
└── types/               # TypeScript type definitions
    └── video.ts
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd youtube-clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Design Features

### Visual Accuracy

- **Header**: YouTube logo, search bar, user avatar, and navigation icons
- **Sidebar**: Collapsible navigation with proper categorization
- **Video Grid**: Responsive grid layout matching YouTube's spacing
- **Video Cards**: Thumbnail, title, channel info, views, and upload time
- **Hover Effects**: Title bolding and interactive elements

### Responsive Breakpoints

- **Mobile**: < 768px (single column, hidden sidebar)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: 1024px+ (3-5 columns based on screen size)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for API configuration:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Mock Data

The application uses mock data by default. To connect to a real backend:

1. Update the API client in `lib/api/client.ts`
2. Replace mock data calls with real API endpoints
3. Configure environment variables

## 📱 Responsive Design

The application is fully responsive with:

- **Mobile-First Approach**: Optimized for mobile devices
- **Flexible Grid**: Adapts from 1-5 columns based on screen size
- **Touch-Friendly**: Proper touch targets and interactions
- **Performance**: Optimized images and lazy loading

## 🧪 Testing & Quality

### Code Quality

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code linting and formatting
- **Accessibility**: ARIA labels and semantic HTML

### Performance Optimizations

- **React Query**: Efficient data fetching and caching
- **Image Optimization**: Next.js image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components and images load as needed

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Other Platforms

The application can be deployed to any platform supporting Node.js:

- Netlify
- AWS Amplify
- Railway
- Heroku

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Notes

- **Mock Data**: Currently using 10 mock videos as requested
- **Backend Integration**: Ready for backend API integration
- **Extensibility**: Architecture supports easy feature additions
- **Performance**: Optimized for production use

## 📄 License

This project is created for educational and demonstration purposes.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

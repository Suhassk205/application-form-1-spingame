# 🎨 Modern Application Form

A beautiful, responsive application form built with Next.js, TypeScript, and Tailwind CSS. Features a modern UI/UX design with mobile-first responsiveness and smooth animations.

## ✨ Features

- **📱 Mobile-First Design**: Fully responsive across all devices
- **🎯 Step-by-Step Form**: Two-step application process with progress tracking
- **🎨 Modern UI**: Beautiful gradients, animations, and micro-interactions
- **♿ Accessibility**: WCAG compliant with proper ARIA labels
- **⚡ Performance**: Optimized with Next.js 15 and TypeScript
- **🎭 Smooth Animations**: CSS transitions and hover effects
- **📊 Progress Indicators**: Visual progress tracking for better UX
- **🔒 Form Validation**: Client-side validation with proper error handling
- **💾 State Management**: Form data persistence between steps

## 🚀 Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Form Handling**: React Hook Form (ready for integration)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd application-form
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
application-form/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # UI components
│   └── ui/               # shadcn/ui components
├── public/               # Static assets
│   ├── illustration.png  # Main illustration
│   └── plant-decoration.png
├── application-form.tsx  # Main form component
├── package.json          # Dependencies
└── README.md            # This file
```

## 🎯 Form Features

### Step 1: Personal Details
- Full Name
- Phone Number
- Full Address
- City
- Pin Code

### Step 2: Financial & Identity Details
- Aadhaar Number
- PAN Number
- Bank Account Number
- IFSC Code
- Nominee Details (Optional)

## 🎨 Design Features

- **Color Scheme**: Modern emerald/teal gradient
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth transitions and hover effects
- **Cards**: Glass-morphism design with backdrop blur
- **Progress**: Visual progress indicators
- **Icons**: Lucide React icons for better UX

## 📱 Mobile Optimizations

- **Touch-Friendly**: Large touch targets
- **iOS Compatibility**: Prevents zoom on input focus
- **Responsive Layout**: Adapts to all screen sizes
- **Sticky Header**: Progress indicator on mobile
- **Optimized Spacing**: Proper padding and margins

## 🔧 Customization

### Colors
The color scheme can be customized by modifying the Tailwind classes in `application-form.tsx`:
- Primary: `emerald-500` to `teal-500`
- Secondary: `gray-100` to `gray-800`
- Accent: `emerald-100` to `emerald-600`

### Styling
Global styles are in `app/globals.css`:
- Custom scrollbars
- Focus states
- Mobile optimizations
- Smooth scrolling

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `pnpm build`
2. Deploy the `out` directory

### Other Platforms
The project can be deployed to any platform that supports Next.js static exports.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide React](https://lucide.dev/) - Beautiful icons

---

Made with ❤️ using Next.js and Tailwind CSS

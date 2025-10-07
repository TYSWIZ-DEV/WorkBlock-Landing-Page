#!/bin/bash

# WorkBlock Landing Page Setup Script

echo "🚀 Setting up WorkBlock Landing Page..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not available. Please install npm or use a different package manager."
    exit 1
fi

echo "✅ Node.js and npm are available"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! To start the development server:"
    echo "   npm run dev"
    echo ""
    echo "Then open http://localhost:3000 in your browser."
else
    echo "❌ Failed to install dependencies. Please check the error messages above."
    exit 1
fi



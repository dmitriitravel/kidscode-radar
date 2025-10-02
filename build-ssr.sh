#!/bin/bash
set -e

echo "=== Building SSR application ==="

# Clean dist directory
echo "Cleaning dist directory..."
rm -rf dist

# Build client
echo "Building client..."
vite build

# Build server
echo "Building server..."
SSR_BUILD=true vite build

echo "=== Build completed successfully ==="

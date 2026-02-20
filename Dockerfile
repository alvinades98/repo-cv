FROM oven/bun:latest

WORKDIR /app

# Install dependencies (will be overwritten by volume in dev, but useful for caching)
# Install dependencies logic moved to runtime/volume mount for dev speed


# Copy source
COPY . .

# Expose port
EXPOSE 3000

# Default command for dev
CMD ["bun", "run", "dev"]

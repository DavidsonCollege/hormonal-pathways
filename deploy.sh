#!/bin/bash
echo "Build SvelteKit image via Docker"
docker build -t hormonal-pathways .

echo "Run SvelteKit image in the background via Docker"
docker run -d --restart unless-stopped -p 3000:3000 hormonal-pathways

echo "Build Flask image via Docker"
docker build --build-arg OPENAI_API_KEY=$OPENAI_API_KEY -t hp-api -f Dockerfile.api .

echo "Run Flask image in the background via Docker"
docker run -d --restart unless-stopped --env-file .env -p 4000:4000 hp-api
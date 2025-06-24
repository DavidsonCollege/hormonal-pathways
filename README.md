# Hormonal Pathways and Trait Expression Simulator 

[Live Project](https://experiments.colab.duke.edu:1000/)

## Overview

This project is an interactive simulation tool designed to help researchers and students explore the dynamic relationship between hormone sensitivity and reproductive fitness in male songbirds. By manipulating key parameters like hormone concentrations and tissue sensitivity, users can visualize the impact of these factors on reproductive success over time.

### Research Context
The simulator is based on the dynamic state variable model developed by Dr. Nicole Baran, Ph.D., in behavioral neuroendocrinology. The model provides insights into how hormone receptor sensitivity, rather than just hormone concentration, plays a critical role in influencing various traits related to reproductive fitness. This forward-looking model aims to optimize fitness at each reproductive cycle by adjusting hormone sensitivity across different tissues.

## Features

### 1. Graphical Visualizations
- **Interactive Sliders**: Control hormone concentration, tissue sensitivity, and other variables through easy-to-use sliders.
- **Multi-Run Simulations**: Compare how varying specific inputs across multiple runs affects reproductive outcomes.
- **Statistics & Model Insights**: Generate visual and statistical outputs to deepen your understanding of the hormone-receptor interaction model.

### 2. Tissue-Level Simulation
- **User-Controlled Inputs**: Explore how hormone receptor counts and hormone concentration influence trait expression in male songbirds.
- **Dynamic Legends & Buttons**: Toggle between visualizations and legends that clarify the behavior of the model.

### 3. Environmental Simulation
- **Interactive Traits Visualization**: View how a bird’s ability to regulate hormone sensitivity affects multiple traits, including reproductive behaviors, across breeding cycles.

### Next Steps
- **AI Integration**: Add AI-generated explanations for model outputs to enhance usability for diverse audiences.
- **Mobile Compatibility**: Improve accessibility features for mobile devices.
- **Reproductive Cycles**: Incorporate full reproductive cycles to better link tissue sensitivity to reproductive outcomes.
- **User Testing**: Conduct testing with target audiences to refine the user experience.
- **Publishing**: Collaborate with Dr. Baran to publish the simulator alongside her research.

## Tech Stack
- **Frontend**: Svelte
- **Backend**: Flask, Python

## Software Developers
- **Karisma Lavana**
- **William McCune III**
- **Brandon Rivera**
- **Haruta Otaki**
- **Nelson Anderson**
- **Vanessa Lin**

## Acknowledgments
We extend our gratitude to:
- Dr. Nicole Baran, Faculty at Davidson College
- Aaron Kutnick, Team Lead
- Dr. Heyer, Stakeholder
- NCShare Project Sponsors and Code+ Directors

# Develop

## 📦 Dependencies

Install dependencies with `npm install` (or `pnpm install` or `yarn`)

## 🔐 Environment Variables

Before running the application, make sure to set up your environment variables.

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and fill in the required values.

> The `.env.example` file lists all the required environment variables with sample keys or empty values.  
> Do not commit your `.env` file to version control as it may contain sensitive information.

## 🖥️ Server

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## 🖥️ Hormone Model Flask Server

### 0. Install Conda (if not already installed)

Download and install Miniconda (recommended) from:  
[https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)

Follow the instructions for your operating system.

---

### 1. Create a Conda Environment

```bash
conda create -n hp_api python=3.12
```

### 2. Activate the Environment

```bash
conda activate hp_api
```

### 3. Install Dependencies from `requirements.txt`

```bash
pip install -r requirements.txt
```

### 4. Deactivate the Environment (when done)

```bash
conda deactivate
```

## 🏗️ Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# 🚀 Deploy

## SvelteKit

1. Update the environment variables in the Docker file if ports have changed.

2. Build SvelteKit image via Docker:

```bash
docker build -t hormonal-pathways .
```

Run SvelteKit image in the background via Docker:

```bash
docker run -d --restart unless-stopped -p 3000:3000 hormonal-pathways
```

## Flask

Build Flask image via Docker:

```bash
docker build --build-arg OPENAI_API_KEY=$OPENAI_API_KEY -t hp-api -f Dockerfile.api .
```

Run Flask image in the background via Docker:

```bash
docker run -d --restart unless-stopped --env-file .env -p 4000:4000 hp-api
```
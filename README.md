# Todo Summary Assistant

A full-stack application that allows users to manage personal to-dos, summarize them using a real LLM (Hugging Face), and post the summary to a Slack channel.

---

## Features

- Add, view, and delete to-dos
- Summarize all todos using Hugging Face LLM
- Send summary to a Slack channel via Incoming Webhook

---

## Tech Stack

- **Frontend**: React (to be built)
- **Backend**: Node.js + Express
- **LLM**: Hugging Face (facebook/bart-large-cnn)
- **Notifications**: Slack Webhooks
- **Database**: In-memory (replaceable with Supabase or PostgreSQL)
- **Deployment**: Render (Backend), Vercel (Frontend)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-summary-assistant.git
cd todo-summary-assistant

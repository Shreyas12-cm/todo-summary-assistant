const axios = require('axios');
const { response, text } = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));



async function summarizeTodos(todos, _unused, slackWebhookUrl){
  const todoText = todos.map((t, i) => `${i+1}. ${t.content}`).join('\n');
  const prompt = `Summarize this to-do list in a single sentence:\n\n${todoText}\n\nRespond with just the summary, no instructions or formatting.`;


  const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn",{
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.HF_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inputs:prompt
    })
  });


  const data = await response.json();
  const summary =data[0]?.summary_text || "You have several pending tasks. Please check your to-do list.";

  await axios.post(slackWebhookUrl, {text: `**Todo Summary:**\n${summary}` });
  return summary;
}
module.exports= summarizeTodos;


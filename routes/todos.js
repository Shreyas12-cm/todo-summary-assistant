const express = require('express');
const router = express.Router();
const { getTodos, addTodo, deleteTodo, todos} = require('../controllers/todoController');
const summarizeTodos = require('../services/summarize');


router.get('/', getTodos);
router.post('/', addTodo);
router.delete('/:id', deleteTodo);


//  summarizing n sending to Slack
router.post('/summarize', async (req, res) => {
  try{
    const summary = await summarizeTodos(
      todos,
      process.env.HF_API_KEY,
      process.env.SLACK_WEBHOOK_URL
    );
    res.status(200).json({ message: 'Summary sent to Slack', summary });
  }catch (err){
    console.error("Detailed error:",err);
    res.status(500).json({ error: 'Failed to summarize or send to Slack', details: err.message});
  }
});

module.exports = router;


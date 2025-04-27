// backend/app.js

import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import 'express-async-errors'; // Automatically handles async errors

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Simple Goal Service
class GoalService {
  constructor() {
    this.goals = [];
  }

  getAllGoals() {
    return this.goals;
  }

  createGoal({ title, description = '' }) {
    const goal = {
      id: uuidv4(),
      title,
      description,
      status: 'In Progress',
    };
    this.goals.push(goal);
    return goal;
  }

  updateGoal(id, status) {
    const goal = this.goals.find(goal => goal.id === id);
    if (!goal) {
      throw new Error('Goal not found');
    }
    goal.status = status || goal.status;
    return goal;
  }

  deleteGoal(id) {
    const index = this.goals.findIndex(goal => goal.id === id);
    if (index === -1) {
      throw new Error('Goal not found');
    }
    this.goals.splice(index, 1);
  }
}

const goalService = new GoalService();

// Middleware to validate goal input
const validateGoalInput = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }
  next();
};

// Health check endpoint
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Get all goals
app.get('/goals', (req, res) => {
  const goals = goalService.getAllGoals();
  res.json(goals);
});

// Create a new goal
app.post('/goals', validateGoalInput, (req, res) => {
  const goal = goalService.createGoal(req.body);
  res.status(201).json(goal);
});

// Update a goal's status
app.put('/goals/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updatedGoal = goalService.updateGoal(id, status);
  res.json(updatedGoal);
});

// Delete a goal
app.delete('/goals/:id', (req, res) => {
  const { id } = req.params;
  goalService.deleteGoal(id);
  res.status(204).send();
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('VisionBoard API is running.');
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});

// Start server
app.listen(port, () => {
  console.log(`VisionBoard API running at http://localhost:${port}`);
});
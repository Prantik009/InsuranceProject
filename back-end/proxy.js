import express from "express"
import axios from "axios";
import cors from "cors"
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.post('/proxy/moto', express.json(), async (req, res) => {
  try {
    const response = await axios.post(
      process.env.MOTO_SCRIPT_URL,
      req.body,
      { headers: { 'Content-Type': 'application/json' } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/proxy/health', express.json(), async (req, res) => {
  try {
    const response = await axios.post(
      process.env.HEALTH_SCRIPT_URL,
      req.body,
      { headers: { 'Content-Type': 'application/json' } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Proxy running on ${PORT}`));
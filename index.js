const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const app = express();

app.use(express.json());

app.use(cors({
    origin: 'https://frontend-crnweb.vercel.app',
    credentials: true,
}));



app.post('/api/case', async (req, res) => {
    try {
        const payload = { cnr: req.body.cnr };

        const response = await axios.post(
            'https://apis.akshit.net/eciapi/17/district-court/case',
            payload,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'ziaB8ExvjMEHTIK9twWxOCOIMnnhk7Z4',
                },
            }
        );

        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

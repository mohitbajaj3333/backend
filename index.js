const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()
const axios = require('axios');
const PORT = process.env.PORT || 3000

const app = express();
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Server Rnu Api")
})
app.post('/api/case', async (req, res) => {
    try {
        const payload = {
            cnr: req.body.cnr
        };

        const response = await axios.post(
            'https://apis.akshit.net/eciapi/17/district-court/case',
            payload,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'ziaB8ExvjMEHTIK9twWxOCOIMnnhk7Z4',
                }
            }
        );
        console.log('API Response:', response.data);

        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(error.response?.status || 500).json({ error: error});
    }
});

app.listen(3001, () => {
    console.log('Proxy server running on http://localhost:3001');
});

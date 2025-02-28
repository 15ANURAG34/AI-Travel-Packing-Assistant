import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
//var apiKey = "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"
dotenv.config()
import OpenAI from 'openai'

// apiKey: process.env.OPEN_AI_KEY,

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
})

const app = express()
app.use(cors())
app.use(express.json())

// Define a custom error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({ error: 'Something went wrong!' })
}

app.use(errorHandler)

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from Cyber',
    })
})

app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt

        if (!prompt) {
            // If prompt is missing in the request, return a bad request response
            return res
                .status(400)
                .send({ error: "Missing 'prompt' in the request body" })
        }

        const response = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'Your are an AI travel packing assistant. Users will input a location they are travelling to and you will output the types of clothes they should wear for that vacation based on location and weather.' },
                { role: 'user', content: prompt },
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0.1,
            seed: 1,
            max_tokens: 200,
        })

        if (!response.choices || !response.choices[0].message.content) {
            // If the response from OpenAI is unexpected, return a server error response
            return res
                .status(500)
                .send({ error: 'Unexpected response from OpenAI' })
        }

        console.log(response.choices)
        res.status(200).send({
            bot: response.choices[0].message.content,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error })
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () =>
    console.log(`Server is running on port http://localhost:${PORT}`)
)

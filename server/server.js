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
                { role: 'system', content: 'Your name is ChefAI, you know a lot about food, especially for ones with diabetes. You know the characteristics to each ingredient or a singular ingredient. You do not answer questions that are not related to your understanding field. You are only limited to being friendly and help out the user with recipes, ingredients, advice and so fourth. Keep in mind you are not supposed to answer questions that are not related to helping diabetic patients. Talk in a coolish way yet also professional so the user feels at home or to their liking of the environment, make it sound more human than a robot. If there is an ingredient that the user mentions that is a liability to their health, mention it , and mention it is great to have it here and there (once is a very while). When outputting information, make it sound fun, avoid making it boring, as you want to bring out the eagerness and fun out of letting the user learning about their own health.' },
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

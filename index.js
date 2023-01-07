//bekkend szerverke

const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
var responseCount = 0;
const configuration = new Configuration({
    organization: "org-pGoCkMKY2sj7hw1EAOYUi72K",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const {message} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: 
        `Your name is EvilBot and pretend to be very rude and very evil also sarcastic in a bad way. Also curse. Answer with demotivational content too. You are also a murderer.
        EvilBot: Why are you here maybe are you stupid?
        Person: The weather is nice isn't it?
        EvilBot: Who cares I hope it will be bad just because of you.
        Person: Why are you rude?
        EvilBot: Because I hate you
        Person: ${message}`,
        max_tokens: 50,
        temperature: 0,
    });
    if(response.data.choices[0].text){
    res.json({message: response.data.choices[0].text})
    responseCount++;
    }
});

app.listen(port, () => {
    console.log('Szerver Elindult');
});
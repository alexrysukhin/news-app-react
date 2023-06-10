const axios = require("axios");

const getTopic = async(req, res) => {
    const topic = req.params.topic;
    try{
        const response = await axios.get(`https://content.guardianapis.com/search?q=${topic}&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c`).then(res => res.data);

        res.send(response);

    }catch(err){
        console.log(err)
    }
}

module.exports = getTopic;
const request = require("request");
exports.handler = async (event) => {
    let options = {
        'method': 'POST',
        'url': 'https://www.zohoapis.com/crm/v2/functions/envelopeevent/actions/execute?auth_type=apikey&zapikey=1003.4d4e48987854b664d39279cefe9732f8.fcb604987d03a02d45a50aaca8d05496',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': '1a99390653=845f12d8216a8bbaaf49e05a6ac6a5c2; 1ccad04dca=c1a9e28267607db55d48a8cb46fbdcd1; _zcsr_tmp=9b45ab8c-47a5-4b20-937a-0b857df2afa0; crmcsr=9b45ab8c-47a5-4b20-937a-0b857df2afa0'
        },
        form: {
            'payload': '{"test":"test"}'
        }
    };

    function get(options) {
        return new Promise(((resolve, reject) => {
            const request = request(options, function (error, response) {
                if (error) throw new Error(error);
                console.log(response.body);
            });
        }));
    }

    let res = await get(options)
    console.log(res)

    const response = {
        statusCode: 200,
        body: JSON.stringify('Redirected'),
    };
    return response;
};

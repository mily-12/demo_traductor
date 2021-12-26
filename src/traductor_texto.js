/**
 * Arquivo: src/tradutor_texto.js
 * Descripcion: arquivo responsable por traduzir textos usando  Translator Text API.
 * Data: 26/12/2012
 * Author: Jhon Pillaca
 * //==> API https://api.cognitive.microsofttranslator.com
 */

 const request = require('request');
 const uuidv4 = require('uuid/v4');
 
 let chave_translator = 'TRANSLATOR_TEXT_SUBSCRIPTION_KEY';
 
 //==> variable local de entorno' enviar mensagem de erro!
 if (!process.env[chave_translator]) {
   throw new Error('Por favor, configure a su variable de entorno: ' + chave_translator);
 }
 
 let subscriptionKey = process.env[chave_translator];
 
 let endpoint_translator = 'TRANSLATOR_TEXT_ENDPOINT';
 
 if (!process.env[endpoint_translator]) {
   throw new Error('Por favor, configure a su variable de entorno: ' + endpoint_translator);
 }
 
 let endpoint = process.env[endpoint_translator];
 
 function traduzirTexto() {
   // ==> Aqui vamos configurar los requests
   let options = {
     method: 'POST',
     baseUrl: endpoint,
     url: 'translate',
     qs: {
       'api-version': '3.0',
       'to': ['en', 'es', 'fr', 'sv', 'zh-Hans']
     },
     headers: {
       'Ocp-Apim-Subscription-Key': subscriptionKey,
       'Content-type': 'application/json',
       'X-ClientTraceId': uuidv4().toString()
     },
     body: [{
       'text': 'Estoy encantado de poder ayudarte.'
     }],
     json: true,
   }
 
   // ==> imprir solicitudes
   request(options, (err, res, body) => {
     console.log(JSON.stringify(body, null, 4));
   })
 };
 
 // llamada de la funcion para realizar la traducción via api.
 
 traduzirTexto();
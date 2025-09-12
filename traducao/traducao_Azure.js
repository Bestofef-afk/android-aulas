// traducao_Azure.js
export async function traduzirTexto(texto, idiomaAlvo = "en") {
    const key = "SUA_AZURE_KEY"; // 🔑 coloque sua chave do Azure aqui
    const endpoint = "https://api.cognitive.microsofttranslator.com";
    const region = "eastus";
  
    const url = `${endpoint}/translate?api-version=3.0&to=${idiomaAlvo}`;
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Ocp-Apim-Subscription-Region": region,
        "Content-type": "application/json",
      },
      body: JSON.stringify([{ text: texto }]),
    });
  
    const data = await response.json();
    return data[0].translations[0].text;
  }
  
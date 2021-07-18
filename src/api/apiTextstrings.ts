export const apiTextstrings = {
    async getTextById(id: number): Promise<string> {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('TMG-Api-Key', '0J/RgNC40LLQtdGC0LjQutC4IQ==');
        headers.append('Origin','http://localhost:3000');
        
        const responce = await fetch(`http://tmgwebtest.azurewebsites.net/api/textstrings/${id}`, {
            // mode: 'no-cors',
            credentials: 'include',
            headers: {
                'TMG-Api-Key': '0J/RgNC40LLQtdGC0LjQutC4IQ=='
            }
        });

        console.log(responce)

        let res = await responce.json();

        console.log(res);

        return res.text;
    }
}

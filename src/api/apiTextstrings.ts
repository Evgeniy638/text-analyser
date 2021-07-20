export const apiTextstrings = {
    async getTextById(id: number): Promise<string> {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('TMG-Api-Key', '0J/RgNC40LLQtdGC0LjQutC4IQ==');
        headers.append('Origin','http://localhost:3000');
        
        const responce = await fetch(`https://tmgwebtest.azurewebsites.net/api/textstrings/${id}`, {
            headers: {
                'Origin': ' http://localhost:3000',
                'TMG-Api-Key': '0J/RgNC40LLQtdGC0LjQutC4IQ=='
            }
        });

        let res = await responce.json();

        return res.text;
    }
}

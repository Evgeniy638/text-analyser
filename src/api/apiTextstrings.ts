export const apiTextstrings = {
    async getTextById(id: number): Promise<string> {        
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

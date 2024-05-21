export default class Bitrix24API {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    private async callBx24Method(method: string, params: Record<string, any>) {
        const bx24Url = this.url;
        let response = await fetch(bx24Url + method, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });
        return await response.json();
    }

    async getDeals(params: Record<string, any>) {
        return await this.callBx24Method("crm.deal.list", params);
    }

    async updateDeal(id: string, fields: Array<Record<string, any>>) {
        return await this.callBx24Method("crm.deal.update", {
            id,
            fields: fields,
        });
    }
}

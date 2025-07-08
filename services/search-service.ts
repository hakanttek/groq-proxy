export default function search(query: string, options: any = undefined): Promise<any>
{
    options ??= {};
    options.q ??= query;
    options.engine ??= 'google';
    options.api_key ??= process.env.SERP_API_KEY;

    const qParams: URLSearchParams = new URLSearchParams(options);

    return fetch(`https://serpapi.com/search.json?${qParams.toString()}`).then(res => res.json());
}
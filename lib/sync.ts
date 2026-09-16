export type FeedProduct={title:string;brand?:string;model?:string;gtin?:string;price:number;currency?:string;url:string;imageUrl?:string;inStock?:boolean};
const stores=["Amazon","Flipkart","Croma","Myntra","AJIO","Meesho"];
export async function syncAllStores(){return stores.map(store=>({store,status:"needs_credentials",message:"Connect an approved affiliate/API feed for this retailer."}));}
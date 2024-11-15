import { Client,Account } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6729c9c40006022eeba8');


export const account = new Account(client);
export default client;
import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
                .setEndpoint(config.appwriteUrl)
                .setProject(config.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method (directly login user)
                this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ", error);
            // throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();
            return true
        } catch (error) {
            console.log("Appwrite service :: logout :: error ", error);
            return false
        }
    }
}

const authService = new AuthService()

export default authService
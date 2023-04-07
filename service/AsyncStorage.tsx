import { Card } from "../models/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default class StorageHeart {

    static async getItem(key: string): Promise<any> {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          return JSON.parse(value);
        }
      } catch (e) {
        console.error(`AsyncStorage getItem error: ${e}`);
      }
      return null;
    }
  
    static async setItem(key: string, value: any): Promise<void> {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error(`AsyncStorage setItem error: ${e}`);
      }
    }
  
    static async removeItem(key: string): Promise<void> {
      try {
        await AsyncStorage.removeItem(key);
      } catch (e) {
        console.error(`AsyncStorage removeItem error: ${e}`);
      }
    }
  
    static async clear(): Promise<void> {
      try {
        await AsyncStorage.clear();
      } catch (e) {
        console.error(`AsyncStorage clear error: ${e}`);
      }
    }
}

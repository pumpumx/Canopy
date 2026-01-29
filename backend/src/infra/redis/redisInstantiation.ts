//connecting to the redis client
import { createClient, type RedisClientType } from "redis";
import { env } from "src/config/envConfig";

class ClientRedis {
  private redisClient!: RedisClientType | null

  private static redisInstance: ClientRedis;
  private constructor() {
    this.redisClient = null
  };

  public static getRedisInstance() {
    if (!this.redisInstance) {
      ClientRedis.redisInstance = new ClientRedis()
    }
    return ClientRedis.redisInstance

  }

  public async connectRedis(): Promise<void> {
    this.redisClient = createClient() //Connects to localhost itself, use url to set multiple url

    if (this.redisClient?.isOpen) return;

    this.redisClient?.on("error", (error) => {
      console.error("REDIS ERROR: ", error)
    })

    await this.redisClient?.connect();
    console.log("Redis Client Connection Successfull")
  }

  public getCLient(): RedisClientType {
    if (!this.redisClient?.isOpen) {
      throw new Error("Redis is not connected: Use connectRedis First")
    }
    return this.redisClient
  }

};

export const Redis = ClientRedis.getRedisInstance()



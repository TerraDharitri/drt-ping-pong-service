import { Address } from "@terradharitri/sdk-core/out";
import { Constants } from "@terradharitri/sdk-nestjs-common";

export class CacheInfo {
  key: string = "";
  ttl: number = Constants.oneSecond() * 6;

  static LastProcessedNonce(shardId: number): CacheInfo {
    return {
      key: `lastProcessedNonce:${shardId}`,
      ttl: Constants.oneMonth(),
    };
  }

  static PongDeadline(address: Address): CacheInfo {
    return {
      key: `pong:${address.toString()}`,
      ttl: Constants.oneMinute() * 10,
    };
  }

  static PingPongStats: CacheInfo = {
    key: "stats:ping-pong",
    ttl: Constants.oneHour(),
  };
}

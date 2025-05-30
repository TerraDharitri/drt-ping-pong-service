import { Module } from "@nestjs/common";
import { DynamicModuleUtils } from "@drt-monorepo/common";
import { EndpointsServicesModule } from "./endpoints.services.module";
import { HealthCheckController } from "./health-check/health.check.controller";
import { PingPongController as PingPongRawController } from "./ping-pong.raw/ping.pong.controller";
import { PingPongController as PingPongAbiController } from "./ping-pong.abi/ping.pong.controller";
import { PingPongController as PingPongAbiWithCacheController } from "./ping-pong.abi-with-cache/ping.pong.controller";
import { StatsController } from "./stats/stats.controller";
import { AccountController } from "./account/account.controller";

@Module({
  imports: [
    EndpointsServicesModule,
  ],
  providers: [
    DynamicModuleUtils.getNestJsApiConfigService(),
  ],
  controllers: [
    AccountController,
    HealthCheckController,
    PingPongRawController,
    PingPongAbiController,
    PingPongAbiWithCacheController,
    StatsController,
  ],
})
export class EndpointsControllersModule { }

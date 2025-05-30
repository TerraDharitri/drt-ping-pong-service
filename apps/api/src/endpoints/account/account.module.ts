import { Module } from "@nestjs/common";
import { DynamicModuleUtils } from "@drt-monorepo/common";
import { StatsModule as StatsServiceModule } from "@drt-monorepo/common";
import configuration from "../../../config/configuration";
import { AccountService } from "./account.service";

@Module({
  imports: [
    StatsServiceModule.forRoot(configuration),
    DynamicModuleUtils.getApiModule(configuration),
  ],
  providers: [
    AccountService,
  ],
  exports: [
    AccountService,
  ],
})
export class AccountModule { }

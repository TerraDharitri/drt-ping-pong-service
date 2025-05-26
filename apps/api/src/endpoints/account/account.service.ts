import { Injectable } from "@nestjs/common";
import { ApiConfigService } from "@drt-monorepo/common";
import { ApiService } from "@terradharitri/sdk-nestjs-http";
import { Account } from "./entities";

@Injectable()
export class AccountService {
  constructor(
    private readonly apiConfigService: ApiConfigService,
    private readonly apiService: ApiService,
  ) { }

  async getAccount(address: string): Promise<Account> {
    const url = `${this.apiConfigService.getApiUrl()}/accounts/${address}`;
    const { data: rawAccount } = await this.apiService.get(url);

    return Account.fromApiResponse(rawAccount);
  }
}

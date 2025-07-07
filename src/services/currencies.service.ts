import {getSupabaseClient} from "../utils/supabaseDb";
import {fromDbResult, Result} from "../models";
import {Currencies} from "../models/expenses";

export class CurrenciesService {
  private readonly db = getSupabaseClient();

  private readonly currenciesTable = 'currencies';

  async getCurrencies(userId: string): Promise<Result<Currencies>> {
    const { data, error } = await this.db
      .from(this.currenciesTable)
      .select()
      .eq('userId', userId);

    return fromDbResult<Currencies>(data[0], error);
  }

  async saveCurrencies(savings: Currencies): Promise<Result<boolean>> {
    const { error } = await this.db
      .from(this.currenciesTable)
      .upsert(savings);

    return fromDbResult(true, error);
  }
}

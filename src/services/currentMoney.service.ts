import {getSupabaseClient} from "../utils/supabaseDb";
import {fromDbResult, Result} from "../models";
import {CurrentMoney} from "../models/expenses";

export class CurrentMoneyService {
  private readonly db = getSupabaseClient();

  private readonly currentMoneyTable = 'currentMoney';

  async getCurrentMoney(userId: string): Promise<Result<CurrentMoney>> {
    const { data, error } = await this.db
      .from(this.currentMoneyTable)
      .select()
      .eq('userId', userId);

    return fromDbResult<CurrentMoney>(data[0], error);
  }

  async saveCurrentMoney(savings: CurrentMoney): Promise<Result<boolean>> {
    const { error } = await this.db
      .from(this.currentMoneyTable)
      .upsert(savings);

    return fromDbResult(true, error);
  }
}
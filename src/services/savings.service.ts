import {getSupabaseClient} from "../utils/supabaseDb";
import {fromDbResult, Result} from "../models";
import {Savings} from "../models/expenses";

export class SavingsService {
  private readonly db = getSupabaseClient();

  private readonly savingsTable = 'savings';

  async getSavings(userId: string): Promise<Result<Savings>> {
    const { data, error } = await this.db
      .from(this.savingsTable)
      .select()
      .eq('userId', userId);

    return fromDbResult<Savings>(data[0], error);
  }

  async saveSavings(savings: Savings): Promise<Result<boolean>> {
    const { error } = await this.db
      .from(this.savingsTable)
      .upsert(savings);

    return fromDbResult(true, error);
  }
}
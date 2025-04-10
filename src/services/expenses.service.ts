import {getSupabaseClient} from "../utils/supabaseDb";
import {failure, Result, success} from "../models";
import {ExpectedExpenses} from "../models/expenses";

export class ExpensesService {
  private readonly db = getSupabaseClient();

  private readonly expectedExpensesTable = 'expected_expenses';

  async getExpectedExpenses(userId: string): Promise<Result<ExpectedExpenses>> {
    const { data, error } = await this.db
      .from(this.expectedExpensesTable)
      .select()
      .eq('userId', userId);

    return error ? failure(error) : success(data[0] as ExpectedExpenses);
  }

  async saveExpectedExpenses(expectedExpenses: ExpectedExpenses): Promise<Result<boolean>> {
    const { error } = await this.db
      .from(this.expectedExpensesTable)
      .insert(expectedExpenses);

    return error ? failure(error) : success(true);
  }
}
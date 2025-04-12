import {getSupabaseClient} from "../utils/supabaseDb";
import { fromDbResult, Result } from "../models";
import {ActualExpense, ExpectedExpenses} from "../models/expenses";

export class ExpensesService {
  private readonly db = getSupabaseClient();

  private readonly expectedExpensesTable = 'expected_expenses';
  private readonly actualExpensesTable = 'actual_expenses';

  async getExpectedExpenses(userId: string): Promise<Result<ExpectedExpenses>> {
    const { data, error } = await this.db
      .from(this.expectedExpensesTable)
      .select()
      .eq('userId', userId);

    return fromDbResult<ExpectedExpenses>(data[0], error);
  }

  async saveExpectedExpenses(expectedExpenses: ExpectedExpenses): Promise<Result<boolean>> {
    const { error } = await this.db
      .from(this.expectedExpensesTable)
      .upsert(expectedExpenses);

    return fromDbResult(true, error);
  }

  async upsertActualExpense(expense: ActualExpense): Promise<Result<boolean>> {
    const { error } = await this.db
      .from(this.actualExpensesTable)
      .upsert(expense);

    return fromDbResult(true, error);
  }

  async removeActualExpense(userId: string, date: string): Promise<Result<boolean>> {
    const { error } = await this.db
      .from(this.actualExpensesTable)
      .delete()
      .eq('userId', userId).eq('date', date);

    return fromDbResult(true, error);
  }

  async getActualExpenses(userId: string): Promise<Result<ActualExpense[]>> {
    const { data, error } = await this.db
      .from(this.actualExpensesTable)
      .select()
      .eq('userId', userId);

    return fromDbResult<ActualExpense[]>(data, error);
  }
}
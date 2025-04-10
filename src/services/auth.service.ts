import {getSupabaseClient} from "../utils/supabaseDb";
import {failure, Result, success} from "../models";
import {Session, User} from "@supabase/supabase-js";

export interface LoginCommand {
  email: string;
  password: string;
}

export interface AuthResult {
  user: User;
  session: Session;
}

export class AuthService {
  private readonly db = getSupabaseClient();

  async register(command: LoginCommand): Promise<Result<AuthResult>> {
    const { data, error } = await this.db.auth.signUp({
      email: command.email,
      password: command.password,
    });

    return error ? failure(error) : success(data);
  }

  async login(command: LoginCommand): Promise<Result<AuthResult>> {
    const { data, error } = await this.db.auth.signInWithPassword({
      email: command.email,
      password: command.password,
    });

    return error ? failure(error) : success(data);
  }

  async getUser(jwt: string): Promise<Result<User>> {
    const { data, error } = await this.db.auth.getUser(jwt);

    return error ? failure(error) : success(data.user);
  }
}

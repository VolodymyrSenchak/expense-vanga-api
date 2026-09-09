"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSupabaseAdminClient = getSupabaseAdminClient;
const supabase_js_1 = require("@supabase/supabase-js");
function getSupabaseAdminClient() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceRoleKey) {
        throw new Error("Supabase URL or Service Role Key is not defined in environment variables.");
    }
    return (0, supabase_js_1.createClient)(supabaseUrl, serviceRoleKey, {
        auth: { autoRefreshToken: false, persistSession: false }
    });
}
//# sourceMappingURL=supabaseDb.js.map
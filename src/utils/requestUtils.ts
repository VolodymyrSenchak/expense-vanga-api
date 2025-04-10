import {Request} from "express";
import {User} from "@supabase/supabase-js";

export interface RequestContext {
  user?: User;
}

export function setReqContext(req: Request, contextParts: Partial<RequestContext>): void {
  (req as any).context = { ...(req as any).context, ...contextParts };
}

export function getReqContext(req: Request): RequestContext {
  return (req as any).context as RequestContext;
}


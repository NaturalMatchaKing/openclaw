import type { Static } from "typebox";
import { Type } from "typebox";
import { closedObject } from "./schema/closed-object.js";
import { NonEmptyString } from "./schema/primitives.js";

/** The existing session was not changed. These settings can be used on a fresh session. */
export const AgentRuntimeFreshSessionErrorDetailsSchema = closedObject({
  code: Type.Literal("AGENT_RUNTIME_REQUIRES_FRESH_SESSION"),
  sessionId: NonEmptyString,
  runtimeId: NonEmptyString,
  model: NonEmptyString,
});

export type AgentRuntimeFreshSessionErrorDetails = Static<
  typeof AgentRuntimeFreshSessionErrorDetailsSchema
>;

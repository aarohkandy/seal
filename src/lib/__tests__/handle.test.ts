import { describe, expect, it } from "vitest";
import { normalizeHandle, validateHandle } from "@/lib/handle";

describe("handle utilities", () => {
  it("normalizes lowercase handles and removes whitespace", () => {
    expect(normalizeHandle("  Atlas Prime  ")).toBe("atlasprime");
  });

  it("rejects invalid characters", () => {
    expect(validateHandle("bad handle!").success).toBe(false);
  });

  it("accepts compact handles", () => {
    expect(validateHandle("nova-01").success).toBe(true);
  });
});

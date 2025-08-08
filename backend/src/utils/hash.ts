import crypto from "crypto";

export function hashFormData(data: object): string {
  return crypto.createHash("sha256").update(JSON.stringify(data)).digest("hex");
}

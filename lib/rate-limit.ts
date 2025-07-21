// lib/rate-limit-db.ts
import { db } from "~/db";

export async function checkRateLimit(
  identifier: string,
  maxRequests = 2,
  windowMs: number = 24 * 60 * 60 * 1000, // 2 mensajes cada 24 horas
): Promise<{ allowed: boolean; remaining: number }> {
  const now = new Date();
  const windowStart = new Date(now.getTime() - windowMs);

  try {
    await db.rateLimitLog.deleteMany({
      where: {
        createdAt: { lt: windowStart },
      },
    });

    const requestCount = await db.rateLimitLog.count({
      where: {
        identifier,
        createdAt: { gte: windowStart },
      },
    });

    if (requestCount >= maxRequests) {
      return { allowed: false, remaining: 0 };
    }

    await db.rateLimitLog.create({
      data: {
        identifier,
        createdAt: now,
      },
    });

    return {
      allowed: true,
      remaining: maxRequests - requestCount - 1,
    };
  } catch (error) {
    console.error("Rate limit check failed:", error);
    return { allowed: true, remaining: maxRequests };
  }
}

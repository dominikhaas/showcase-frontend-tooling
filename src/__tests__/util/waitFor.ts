/**
 * Waits for a condition to become true, or until the timeout is exceeded.
 * @param predicate The condition to check.
 * @param timeout The maximum time to wait (in milliseconds). Default is 3000ms.
 * @param interval The interval between checks (in milliseconds). Default is 50ms.
 * @throws Will throw an error if the timeout is exceeded.
 */
export const waitFor = async (
  predicate: () => boolean | Promise<boolean>, // Predicate function that returns a boolean or Promise
  timeout: number = 3000, // Timeout in milliseconds
  interval: number = 50, // Interval in milliseconds between checks
): Promise<void> => {
  const startTime = Date.now()

  while (Date.now() - startTime < timeout) {
    const result = await predicate()
    if (result) return

    await new Promise((resolve) => setTimeout(resolve, interval))
  }

  throw new Error('Timeout exceeded while waiting for condition')
}

import { useState } from "react"

export const useFetching = (callback) => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Execute callback from useFetching with passed args
  const fetching = async (...args) => {
    try {
      setIsLoading(true);

      await callback(...args);

      setError("");
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
}

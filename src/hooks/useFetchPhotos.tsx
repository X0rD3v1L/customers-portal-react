import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPhotos = (customerId: string) => {
  const [photos, setPhotos] = useState<(string | null)[]>(Array(9).fill(null));
  const [error, setError] = useState<string | null>(null);

  const fetchPhotos = async () => {
    try {
      const requests = Array.from({ length: 9 }, () =>
        axios.get("https://picsum.photos/200/300?random=" + Math.random())
      );
      const responses = await Promise.all(requests);
      const photoUrls = responses.map((response) => response.request.responseURL);
      setPhotos(photoUrls);
      setError(null);
    } catch (error) {
      setError("Failed to load photos. Please try again later.");
      setPhotos(Array(9).fill(null));
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, [customerId]);

  return { photos, error };
};

export default useFetchPhotos;

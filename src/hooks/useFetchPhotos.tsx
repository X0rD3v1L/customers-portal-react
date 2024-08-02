import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPhotos = (customerId: string) => {
  const [photos, setPhotos] = useState<(string | null)[]>(Array(9).fill(null));
  const [error, setError] = useState<string | null>(null);

  const fetchPhotos = async () => {
    try {
      const randomPage = Math.floor(Math.random() * 100) + 1;
      const response = await axios.get(`https://picsum.photos/v2/list?page=${randomPage}&limit=9`);
      const photoUrls = response.data.map((photo: { download_url: string }) => photo.download_url);
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

import api from "./api";

export interface Article {
  title: string;
  description: string;
  author: string;
  url: string;
  publishedAt: string;
}

export const getTechNews = async (): Promise<unknown[]> => {
  try {
    const response = await api.get("/topstories.json");

    return await fetchDataInParallel(response.data.slice(0, 100));
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

async function fetchDataInParallel(items: number[]) {
  const promises = items.map(async (item) => {
    try {
      const response = await api.get(`/item/${item}.json`);
      return {
        title: response.data?.title ?? "No title available",
        description: response.data?.text ?? "No content available.",
        url: response.data?.url ?? "#",
        author: response.data?.by ?? "Data not available.",
        publishedAt: new Date(
          response.data?.time ?? 1760646660600
        ).toLocaleDateString(),
      };
    } catch (error) {
      console.error(`Error fetching data for item:`, error);
      return { error };
    }
  });
  return await Promise.all(promises);
}

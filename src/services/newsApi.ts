import api from './api';

export interface Article {
  title: string;
  description: string;
  author: string
  url: string
  publishDate: string;
}

export const getTechNews = async (): Promise<Article[]> => {
  try {
    const response = await api.get('/everything', { params: { q: "tech" } });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

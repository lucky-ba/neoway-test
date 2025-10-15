<template>
  <h1>Tech news</h1>
  <search-input
    placeholder="Search news..."
    debounce="300"
    @search="handleSearch"
  ></search-input>
  <virtualized-table
    :columns="tableColumns"
    :data="filteredData"
    @row-click="handleRowClick"
    height="265"
  ></virtualized-table>
  <accessible-modal :open="isModalOpen" @modal-close="handleCloseModal" :title="modalContentData.title">
    <SectionItem label="Resume:">{{ modalContentData.description }}</SectionItem>
    <SectionItem label="Author:" style="margin-bottom: 15px;">{{ modalContentData.author }}</SectionItem>
    <a target="_blank" :href="modalContentData.url">full content</a>
  </accessible-modal>
</template>

<script setup lang="ts">
import "neoway-components";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import SectionItem from '../components/SectionItem.vue'

interface SearchEvent {
  query: string;
}
interface Article {
  title: string;
  description: string;
  author: string
  url: string
  publishDate: string;
}

const data = ref([]);
const tableColumns = ref([
  {
    key: "title",
    header: "Title",
    sortable: true,
  },
  {
    key: "publishedAt",
    header: "Date",
    sortable: true,
    width: 150,
    align: "center",
  },
]);
const error = ref<string | null>(null);

const fetchData = async (): Promise<void> => {
  error.value = null;

  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=tech&apiKey=33eb5a6baf50414e8d5f17a3ad4b7ab9"
    );
    
    data.value = response.data.articles.slice(0, 100);
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An error occurred";
  }
};

onMounted(() => {
  fetchData();
});

const searchValue = ref("");
const isModalOpen = ref(false);
const modalContentData = ref<Article>({
  title: "",
  description: "",
  url: "",
  author: "",
  publishDate: ""
});

function handleRowClick(event: CustomEvent<Article>) {
  console.log(event);
  
  modalContentData.value = event.detail;
  isModalOpen.value = true
}

function handleCloseModal() {
  isModalOpen.value = false
}

function handleSearch(event: CustomEvent<SearchEvent>) {
  searchValue.value = event.detail.query;
}

const filteredData = computed(() => {
  return (
    data?.value?.filter((article: Article) => {
      const lowerCaseSearchValue = searchValue.value.toLowerCase();
      const matchesTitle =
        !lowerCaseSearchValue ||
        article.title.toLowerCase().includes(lowerCaseSearchValue);

      return matchesTitle;
    }) ?? []
  );
});
</script>
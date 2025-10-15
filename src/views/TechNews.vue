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
import SectionItem from '../components/SectionItem.vue'
import { getTechNews, type Article } from "../services/newsApi";

interface SearchEvent {
  query: string;
}

const news = ref<Article[]>([]);
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

const fetchTechNews = async () => {
  error.value = null;
  try {
    news.value = await getTechNews();
  } catch (err) {
    error.value = (err as Error).message;
  }
};

onMounted(fetchTechNews);

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
    news?.value?.filter((article: Article) => {
      const lowerCaseSearchValue = searchValue.value.toLowerCase();
      const matchesTitle =
        !lowerCaseSearchValue ||
        article.title.toLowerCase().includes(lowerCaseSearchValue);

      return matchesTitle;
    }) ?? []
  );
});
</script>
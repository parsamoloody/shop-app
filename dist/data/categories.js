// Define subcategories separately to avoid redundancy
const subCategories = [
  { id: 1, name: "اسپید", link: "/hp" },
  { id: 2, name: "اپل", link: "/apple" },
  { id: 3, name: "سونی", link: "/sony" }
];

// Define menu items
const menu = [
  { id: 1, name: "موبایل", link: "/mobile", subCategories: subCategories },
  { id: 2, name: "لپ تاپ", link: "/laptop", subCategories: subCategories },
  { id: 3, name: "هندزفری", link: "/handfree", subCategories: subCategories },
  { id: 4, name: "تبلت", link: "/tablet", subCategories: subCategories },
  { id: 5, name: "اسپیکر", link: "/speaker", subCategories: subCategories },
  { id: 6, name: "لوازم جانبی", link: "/accessories", subCategories: subCategories }
];

// Define slide categories
const storyCategory = [
  { id: 1, name: "لوازم خانگی", link: "/home-appliances", image: "banner_CircleCategories_togRvq_5e1e5673-e7ac-4bee-8890-8d78f8e72b19.webp" },
  { id: 2, name: "گوشی دکمه ای", link: "/button-phone", image: "banner_CircleCategories_C5nLFh_15d59e70-3031-4683-92aa-e84f695590c7.webp" },
  { id: 3, name: "ساعت‌ و‌ بند‌هوشمند", link: "/smart-watches", image: "banner_CircleCategories_BaqFKk_27ca3aa5-0431-442a-a173-d8a2ba931a41.webp" },
  { id: 4, name: "گیمینگ", link: "/gaming", image: "banner_CircleCategories_PqWXyJ_4e4115c0-62c8-47e5-926a-4cca67dfda89.webp" },
  { id: 5, name: "هدفون‌ و‌ هندزفری", link: "/headphones", image: "banner_CircleCategories_cPF7IB_e0939846-1cd4-4360-850e-712b3db1e564.webp" },
  { id: 6, name: "پاوربانک", link: "/powerbank", image: "banner_CircleCategories_gvx2n5_cf7fa0c5-60d6-4517-a8b7-7499cdc28807.webp" },
  { id: 7, name: "طلا و جواهرات", link: "/jewelry", image: "banner_CircleCategories_Vh4L60_0f03a789-b840-4e84-9103-388f0f5d7d9a.webp" },
  { id: 8, name: "ابزارآلات و تجهیزات", link: "/tools", image: "banner_CircleCategories_d0MfL1_6c68f812-55f8-4170-bfdb-9d1e03818a0b.webp" },
  { id: 9, name: "ماشین های اداری", link: "/office-machines", image: "banner_CircleCategories_hetcU0_dab86464-0d65-4a2b-b503-cc04027c8531.webp" },
  { id: 10, name: "کامپیوتر و تجهیزات", link: "/computers", image: "banner_CircleCategories_EMo5Za_4a3eaaea-6b8a-4933-9364-337e18f6fe88.webp" },
  { id: 11, name: "شبکه و ارتباطات", link: "/network", image: "banner_CircleCategories_nQbD4J_f1e8e377-fb7e-4e4e-892e-54035463f101.webp" },
  { id: 12, name: "تلویزیون", link: "/tv", image: "banner_CircleCategories_0gP7p4_b56c05c3-a71c-42ce-85ee-e9200257dc24.webp" },
  { id: 13, name: "موبایل", link: "/mobile", image: "banner_CircleCategories_h3Jb0s_1a0d1a48-52d3-4328-a6f7-4e3f88e88b08.webp" },
  { id: 14, name: "تبلت", link: "/mobile", image: "banner_CircleCategories_Mdfsao_e59192fd-eb46-4c74-ab2e-64c230a6b15e.webp" }
];

// Combine into a single exportable object
const categories = {
  menu,
  storyCategory
};

export default categories;
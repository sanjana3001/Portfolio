import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from './views/AboutView.vue'
import ExperienceView from './views/ExperienceView.vue'
import EducationView from './views/EducationView.vue'
import SkillsView from './views/SkillsView.vue'
import ProjectsView from './views/ProjectsView.vue'
import HobbiesView from './views/HobbiesView.vue'
import AwardsView from './views/AwardsView.vue'
import ContactView from './views/ContactView.vue'

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: AboutView },
  { path: '/experience', component: ExperienceView },
  { path: '/education',  component: EducationView },
  { path: '/skills', component: SkillsView },
  { path: '/projects', component: ProjectsView },
  { path: '/hobbies', component: HobbiesView },
  { path: '/awards', component: AwardsView },
  { path: '/contact', component: ContactView }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
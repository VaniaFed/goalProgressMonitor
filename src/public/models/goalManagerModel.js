import { 
  observable,
  action,
  autorun,
  computed,
} from 'mobx';
import { v4 } from 'uuid';

export default class GoalManagerModel {
  @observable categories = [];

  @observable topics = [];

  constructor() {
    const dataFromStorage = JSON.parse(localStorage.getItem('AimsAndGoals'));
    if (dataFromStorage) {
      this.categories = dataFromStorage.categories;
      this.topics = dataFromStorage.topics;
    }

    autorun(() => {
      this.saveEverything();
    });
  }

  getTopicsByCategoryId(categoryId) {
    return this.topics.filter(topic => topic.categoryId === categoryId);
  }

  saveEverything() {
    const saveObj = {
      categories: this.categories,
      topics: this.topics,
    };
    localStorage.setItem('AimsAndGoals', JSON.stringify(saveObj));
  }

  @action addCategory(title) {
    this.categories.push({
      id: v4(),
      title,
    });
  }

  @action addTopic(title, categoryId, start, finish, current = 0) {
    this.topics.push({
      id: v4(),
      categoryId,
      title,
      start,
      finish,
      current,
    });
  }

  @action changeTopic(topicId, changes) {
    this.topics = this.topics.map((topic) => {
      if (topic.id === topicId) {
        return ({
          ...topic,
          ...changes,
        });
      }
      return topic;
    })
  }
}

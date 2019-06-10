import { observable, action, computed } from 'mobx';
import { v4 } from 'uuid';

export default class GoalManagerModel {
  @observable categories = [];

  @observable topics = [];

  getTopicsByCategoryId(categoryId) {
    // return this.topics;
    return this.topics.filter(topic => topic.categoryId === categoryId);
  }

  @action addCategory(title) {
    console.log(title);
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

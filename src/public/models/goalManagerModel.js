import { observable, action } from 'mobx';
import { v4 } from 'uuid';

export default class GoalManagerModel {
  @observable categories = [];

  @observable topics = [];

  get(categoryId) {
    return this.topics.map(topic => topic.id === categoryId);
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
    this.topics = this.topics.map(topic =>
      (topic.id === topicId)
        ? ({
          ...topic,
          ...changes,
        })
      : topic
    );
  }

  @action increaseCurrentValue(topicId) {
    this.topics[0].current += 1;
  }
}

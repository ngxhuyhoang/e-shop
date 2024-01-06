import connectionInstance from '../connection-instance';

const taskService = {
  getList: () => {
    return connectionInstance.get('task/list');
  },
  createTask: body => {
    return connectionInstance.post('task/create', body);
  },
  getAnalytics: () => {
    return connectionInstance.get('task/analytics');
  },
  updateTask: body => {
    return connectionInstance.post('task/update-status', body);
  },
};

export default taskService;

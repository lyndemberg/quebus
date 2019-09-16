module.exports = (api) => {
  const repository = api.repositories.question;

  const service = {
    save: async (question) => repository.save(question),

    find: async (query = {}) => repository.find(query),

    findById: async (id) => repository.findById(id),

    update: async (question) => repository.update(question),

    delete: async (id) => repository.delete(id),

    addComments: async (id, comments) => repository.addComments(id, comments),

    updateComment: async (idQuestion, idComment, comment) => repository
      .updateComment(idQuestion, idComment, comment),

    removeComment: async (idQuestion, idComment) => repository
      .removeComment(idQuestion, idComment),
  };

  return service;
};

module.exports = (api) => {
  const repository = api.repositories.question;

  const service = {
    save: async (question) => repository.save(question),

    find: async (query = {}) => repository.find(query),

    findById: async (id) => repository.findById(id),

    update: async (question) => repository.update(question),

    delete: async (id) => repository.delete(id),

    addComment: async (id, comment) => {
      if (!comment) {
        throw new Error('No comment');
      }

      return repository.addComment(id, comment);
    },

    updateComment: async (idQuestion, idComment, comment) => {
      if (!comment) {
        throw new Error('No comment');
      }
      return repository.updateComment(idQuestion, idComment, comment);
    },

    removeComment: async (idQuestion, idComment) => repository
      .removeComment(idQuestion, idComment),

    addEvaluation: async (idQuestion, idComment, evaluation) => {
      if (!evaluation) {
        throw new Error('No evaluation');
      }
      return repository.addEvaluation(idQuestion, idComment, evaluation);
    },

    updateEvaluation: async (idQuestion, idComment, idEvaluation, evaluation) => {
      if (!evaluation) {
        throw new Error('No evaluation');
      }
      return repository.updateEvaluation(idQuestion, idComment, idEvaluation, evaluation);
    },

    removeEvaluation: async (idQuestion, idComment, idEvaluation) => repository
      .removeEvaluation(idQuestion, idComment, idEvaluation),
  };

  return service;
};

module.exports = () => {
  const GenericRepository = (model) => {
    const Entity = model;

    const repository = {

      save: async (data) => {
        try {
          const entity = new Entity(data);
          return await entity.save();
        } catch (error) {
          console.log(error);
          throw error;
        }
      },

      find: async (query = {}) => Entity.find(query),

      findById: async (id) => {
        try {
          return await Entity.findById(id);
        } catch (error) {
          console.log(error);
          throw new Error(`${Entity.model.modelName} not found`);
        }
      },

      update: async (data) => {
        try {
          const usuarioUpdated = await Entity.findById(data.id);
          if (!usuarioUpdated) {
            throw new Error(`${Entity.model.modelName} not found`);
          }
          usuarioUpdated.set(data);
          return await usuarioUpdated.save();
        } catch (error) {
          console.error(error);
          throw error;
        }
      },

      delete: async (id) => {
        try {
          return await Entity.findByIdAndRemove(id);
        } catch (error) {
          console.log(error);
          throw new Error(`${Entity.model.modelName} not found`);
        }
      },

    };

    return repository;
  };

  return GenericRepository;
};

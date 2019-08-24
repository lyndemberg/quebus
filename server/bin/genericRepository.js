module.exports = () => {
  const GenericRepository = (model) => {
    const Model = model;

    const repository = {

      save: async (data) => {
        try {
          const entity = new Model(data);
          return await entity.save();
        } catch (error) {
          console.log(error);
          throw error;
        }
      },

      findAll: async () => Model.find(),

      findById: async (id) => {
        try {
          return await Model.findById(id);
        } catch (error) {
          console.log(error);
          throw new Error(`${Model.model.modelName} not found`);
        }
      },

      update: async (data) => {
        try {
          const usuarioUpdated = await Model.findById(data.id);
          if (!usuarioUpdated) {
            throw new Error(`${Model.model.modelName} not found`);
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
          return await Model.findByIdAndRemove(id);
        } catch (error) {
          console.log(error);
          throw new Error(`${Model.model.modelName} not found`);
        }
      },

    };

    return repository;
  };

  return GenericRepository;
};

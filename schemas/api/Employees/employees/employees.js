import Employees from "../../../models/Employees";

export default {
  Query: {
    allEmployees: async (_, args) => {
      return await Employees.find();
    },
  },
};

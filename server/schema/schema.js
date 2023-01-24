const {
  GraphQLObjectType,
  GraphQlID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

//Mongoose model//
const Client = require("../models/client.js");
const Project = require("../models/Projects.js");

// projects type
const ProjectType = new GraphQLObjectType({
  name: "Projects",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    live: { type: GraphQLString },
    source: { type: GraphQLString },
    img: { type: GraphQLString },
    time: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(par, arg) {
        return Client.findById(par.clientId);
      },
    },
  }),
});
// Client Type///
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    img: { type: GraphQLString },
    detail: { type: GraphQLString },
    color: { type: GraphQLString },
  }),
});
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLString } },
      resolve(p, args) {
        return Project.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
  },
});

// console.log(RootQuery.client);
module.exports = new GraphQLSchema({
  query: RootQuery,
});

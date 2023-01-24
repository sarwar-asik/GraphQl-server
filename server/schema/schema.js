const { projects, clients } = require("../projectData.js");
const {
  GraphQLObjectType,
  GraphQlID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

// const {} =graphql

// projects type 
const ProjectType= new GraphQLObjectType({
  name:"Projects",
  fields:()=>({
    id:{type:GraphQLString},
    name:{type:GraphQLString},
    live:{type:GraphQLString},
    source:{type:GraphQLString},
    img:{type:GraphQLString},
    time:{type:GraphQLString},
  })
})
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
    projects:{
      type: new GraphQLList(ProjectType),
      resolve(parent,args){
        return projects
      }
    },
    project:{
      type:ProjectType,
      args:{id :{ type:GraphQLString}},
      resolve(p,args){
        return projects.find(project =>project.id ===args.id)
      }
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return clients;
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return clients.find((client) => client.id === args.id);
      },
    },
  },
});

// console.log(RootQuery.client);
module.exports = new GraphQLSchema({
  query: RootQuery,
});

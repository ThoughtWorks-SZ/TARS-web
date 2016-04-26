import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLID as ID,
  GraphQLNonNull as NonNull,
} from 'graphql';

const LogicTemplate = new ObjectType({
  name: 'LogicTemplate',
  fields: () => ({
    id: {
      type: new NonNull(ID),
      description: 'logic template id'
    },
  }),
});

export default LogicTemplate;

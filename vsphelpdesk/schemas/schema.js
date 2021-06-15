import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    {
      title: "Complaints",
      name: "complaints",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
        },
      ],
    },
  ]),
});

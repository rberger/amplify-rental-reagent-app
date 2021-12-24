// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { Rental } = initSchema(schema);
console.log("index.js Rental: ", Rental);
export { Rental };

import { readFileSync } from 'fs';
import { join } from 'path';
import { parse, DocumentNode } from 'graphql';

const filePath = join(__dirname, './schema.graphql');
const schemaString = readFileSync(filePath, 'utf8');
const schema: DocumentNode = parse(schemaString);

export default schema
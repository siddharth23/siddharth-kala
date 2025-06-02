import * as xml2js from 'xml2js';
class DataValidator {
     private static _instance: DataValidator;
     private constructor() {
     }
     public static get Instance()
     {
         return this._instance || (this._instance = new this());
     }
     
     getSchema(obj: any): any {
  if (Array.isArray(obj)) {
    return ['array', this.getSchema(obj[0])];
  } else if (obj && typeof obj === 'object') {
    const schema: Record<string, any> = {};
    for (const key in obj) {
      schema[key] = this.getSchema(obj[key]);
    }
    return schema;
  } else {
    return typeof obj;
  }
}

compareSchemas(schema1: any, schema2: any, path: string = ''): string[] {
  const diffs: string[] = [];

  const keys = new Set([...Object.keys(schema1 || {}), ...Object.keys(schema2 || {})]);

  for (const key of keys) {
    const fullPath = path ? `${path}.${key}` : key;
    const val1 = schema1?.[key];
    const val2 = schema2?.[key];

    if (val1 === undefined) {
      diffs.push(`Missing in first JSON: ${fullPath}`);
    } else if (val2 === undefined) {
      diffs.push(`Missing in second JSON: ${fullPath}`);
    } else if (typeof val1 === 'object' && typeof val2 === 'object') {
      diffs.push(...this.compareSchemas(val1, val2, fullPath));
    } else if (val1 !== val2) {
      diffs.push(`Type mismatch at ${fullPath}: ${val1} vs ${val2}`);
    }
  }

  return diffs;
}
}
export default DataValidator.Instance
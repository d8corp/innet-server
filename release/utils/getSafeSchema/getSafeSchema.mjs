function getSafeSchema(schema) {
    return 'oneOf' in schema ? schema.oneOf[0] : schema;
}

export { getSafeSchema };

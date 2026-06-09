type SchemaOrgProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function SchemaOrg({ data }: SchemaOrgProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

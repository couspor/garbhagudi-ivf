import React from "react";
import Head from "next/head";

export default function SEO({
  description = "startup landing descriptions",
  author = "RedQ, Inc",
  meta,
  title = "Garbhagudi IVF Center",
}) {
  const metaData = [
    {
      name: `Garbhagudi IVF Center`,
      content: description,
    },
    {
      property: `Garbhagudi IVF Center`,
      content: title,
    },
    {
      property: `Best IVF Center In Bengaluru`,
      content: description,
    },
    {
      property: `Health-Care, IVF, Women's Health`,
      content: `website`,
    },
    {
      name: `twitter:@garbhagudiIVF`,
      content: `summary`,
    },
    {
      name: `twitter:garbhagudiIVF`,
      content: author,
    },
    {
      name: `twitter:GGIRHR`,
      content: title,
    },
    {
      name: `twitter:Best IVF Training in Karnataka`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

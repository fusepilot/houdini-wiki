import React from 'react'
import Helmet from 'react-helmet'

import MarkdownPageFooter from '../components/markdown-page-footer'

import Container from '../components/container'

import 'katex/dist/katex.min.css'

import rehypeReact from 'rehype-react'
import Counter from '../components/markdown/Counter'
import HoudiniExample from '../components/markdown/HoudiniExample'
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'interactive-counter': Counter,
    'houdini-example': HoudiniExample,
  },
}).Compiler

class DocsTemplate extends React.Component {
  render() {
    const page = this.props.data.markdownRemark
    return (
      <Container>
        <Helmet>
          <title>{page.frontmatter.title}</title>
          <meta name="description" content={page.excerpt} />
          <meta name="og:description" content={page.excerpt} />
          <meta name="twitter:description" content={page.excerpt} />
          <meta name="og:title" content={page.frontmatter.title} />
          <meta name="og:type" content="article" />
          <meta name="twitter.label1" content="Reading time" />
          <meta name="twitter:data1" content={`${page.timeToRead} min read`} />
        </Helmet>
        <h1 css={{ marginTop: 0 }}>{page.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: page.html,
          }}
        />
        {renderAst(page.htmlAst)}
        <MarkdownPageFooter page={page} />
      </Container>
    )
  }
}

export default DocsTemplate

export const pageQuery = graphql`
  query TemplateDocsMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      excerpt
      timeToRead
      frontmatter {
        title
      }
      ...MarkdownPageFooter
    }
  }
`

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hhQrHbWb3poeAbJ81dz1C3
// Component: Tag-cUYvXket
import * as React from 'react'
import * as p from '@plasmicapp/react-web'
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from '@plasmicapp/react-web'
import Content from '../../Content' // plasmic-import: PMO_spAAe3/component
import projectcss from './plasmic_get_tech_trial_store.module.css' // plasmic-import: hhQrHbWb3poeAbJ81dz1C3/projectcss
import sty from './PlasmicHomepage.module.css' // plasmic-import: Tag-cUYvXket/css

export const PlasmicHomepage__VariantProps = new Array()

export const PlasmicHomepage__ArgProps = new Array()

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={'div'}
          data-plasmic-name={'root'}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            sty.root
          )}
        >
          <Content
            data-plasmic-name={'content'}
            data-plasmic-override={overrides.content}
            className={classNames('__wab_instance', sty.content)}
          >
            {true ? (
              <p.Stack
                as={'div'}
                data-plasmic-name={'freeBox'}
                data-plasmic-override={overrides.freeBox}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                <h1
                  data-plasmic-name={'h1'}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {'Welcome to your foo page.'}
                </h1>

                <div
                  data-plasmic-name={'text'}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {
                        "If you haven't already done so, go back and learn the basics by going through the Plasmic Levels tutorial. Test update.\n\nIt's always easier to start from examples! Add a new page using a template—do this from the list of pages in the top left (the gray + button).\n\nOr press the big blue + button to start dragging items into this page.\n\nIntegrate this project into your codebase—press the "
                      }
                    </React.Fragment>
                    <span
                      className={'plasmic_default__all plasmic_default__span'}
                      style={{ fontWeight: 700 }}
                    >
                      {'Code'}
                    </span>
                    <React.Fragment>
                      {
                        ' button in the top right and follow the quickstart instructions.\n\nJoin our Slack community (icon in bottom left) for help any time.'
                      }
                    </React.Fragment>
                  </React.Fragment>
                </div>
              </p.Stack>
            ) : null}
          </Content>
        </p.Stack>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ['root', 'content', 'freeBox', 'h1', 'text'],
  content: ['content', 'freeBox', 'h1', 'text'],
  freeBox: ['freeBox', 'h1', 'text'],
  h1: ['h1'],
  text: ['text']
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    })

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    })
  }
  if (nodeName === 'root') {
    func.displayName = 'PlasmicHomepage'
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`
  }
  return func
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent('root'),
  {
    // Helper components rendering sub-elements
    content: makeNodeComponent('content'),
    freeBox: makeNodeComponent('freeBox'),
    h1: makeNodeComponent('h1'),
    text: makeNodeComponent('text'),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
)

export default PlasmicHomepage
/* prettier-ignore-end */

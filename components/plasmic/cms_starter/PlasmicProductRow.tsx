// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bnGmFYN1UUt3iuCFsqhSBQ
// Component: DE3au28sSRJT

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantsnSwrrijbjORk } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nSwrrijbjORk/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: bnGmFYN1UUt3iuCFsqhSBQ/projectcss
import sty from "./PlasmicProductRow.module.css"; // plasmic-import: DE3au28sSRJT/css

import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: G9I2JP8DGmsf/icon

createPlasmicElementProxy;

export type PlasmicProductRow__VariantMembers = {};
export type PlasmicProductRow__VariantsArgs = {};
type VariantPropType = keyof PlasmicProductRow__VariantsArgs;
export const PlasmicProductRow__VariantProps = new Array<VariantPropType>();

export type PlasmicProductRow__ArgsType = {};
type ArgPropType = keyof PlasmicProductRow__ArgsType;
export const PlasmicProductRow__ArgProps = new Array<ArgPropType>();

export type PlasmicProductRow__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultProductRowProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProductRow__RenderFunc(props: {
  variants: PlasmicProductRow__VariantsArgs;
  args: PlasmicProductRow__ArgsType;
  overrides: PlasmicProductRow__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnSwrrijbjORk()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.column__gV6Vj)}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img___00109)}
          displayHeight={"270px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"100%"}
          loading={"lazy"}
          src={{
            src: "/plasmic/cms_starter/images/image29.png",
            fullWidth: 400,
            fullHeight: 400,
            aspectRatio: undefined
          }}
        />

        <div className={classNames(projectcss.all, sty.freeBox___8Fg8G)}>
          <Icon4Icon
            className={classNames(projectcss.all, sty.svg__nb8Um)}
            role={"img"}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__k8CH)}>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__k1ZuP
            )}
            component={Link}
            platform={"nextjs"}
          >
            {"Nulla suscipit "}
          </PlasmicLink__>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sEedh
            )}
          >
            {"bigplants "}
          </div>
          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5___6YtlO
            )}
          >
            {"$49.40 "}
          </h5>
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.column___2TESt)}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__ahXl)}
          displayHeight={"270px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"100%"}
          loading={"lazy"}
          src={{
            src: "/plasmic/cms_starter/images/image30.png",
            fullWidth: 400,
            fullHeight: 400,
            aspectRatio: undefined
          }}
        />

        <div className={classNames(projectcss.all, sty.freeBox__mDC)}>
          <Icon4Icon
            className={classNames(projectcss.all, sty.svg__wk8KL)}
            role={"img"}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__yqM1I)}>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__asqZf
            )}
            component={Link}
            platform={"nextjs"}
          >
            {"Integer porta"}
          </PlasmicLink__>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__esaSd
            )}
          >
            {"cactuses"}
          </div>
          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5__sYxeM
            )}
          >
            {"$99.00 "}
          </h5>
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.column__mnmvc)}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__hMznV)}
          displayHeight={"270px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"100%"}
          loading={"lazy"}
          src={{
            src: "/plasmic/cms_starter/images/image31.png",
            fullWidth: 400,
            fullHeight: 400,
            aspectRatio: undefined
          }}
        />

        <div className={classNames(projectcss.all, sty.freeBox__kW9Ca)}>
          <Icon4Icon
            className={classNames(projectcss.all, sty.svg__wp5Sg)}
            role={"img"}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__nRc0X)}>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__iiIvd
            )}
            component={Link}
            platform={"nextjs"}
          >
            {"Vestibulum eget"}
          </PlasmicLink__>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__a2NtS
            )}
          >
            {"bigplants "}
          </div>
          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5__k9Ahh
            )}
          >
            {"$220.00 "}
          </h5>
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.column__zyAjT)}
      >
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img___4Jmzl)}
          displayHeight={"270px"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"100%"}
          loading={"lazy"}
          src={{
            src: "/plasmic/cms_starter/images/image32.png",
            fullWidth: 400,
            fullHeight: 400,
            aspectRatio: undefined
          }}
        />

        <div className={classNames(projectcss.all, sty.freeBox__svhB)}>
          <Icon4Icon
            className={classNames(projectcss.all, sty.svg__f7GeK)}
            role={"img"}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__rssMs)}>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__vn40I
            )}
            component={Link}
            platform={"nextjs"}
          >
            {"Fusce sagittis"}
          </PlasmicLink__>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__g13Cc
            )}
          >
            {"cactuses"}
          </div>
          <h5
            className={classNames(
              projectcss.all,
              projectcss.h5,
              projectcss.__wab_text,
              sty.h5__t80
            )}
          >
            {"$400.40 "}
          </h5>
        </div>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductRow__VariantsArgs;
    args?: PlasmicProductRow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductRow__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProductRow__ArgProps,
          internalVariantPropNames: PlasmicProductRow__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductRow";
  } else {
    func.displayName = `PlasmicProductRow.${nodeName}`;
  }
  return func;
}

export const PlasmicProductRow = Object.assign(
  // Top-level PlasmicProductRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicProductRow
    internalVariantProps: PlasmicProductRow__VariantProps,
    internalArgProps: PlasmicProductRow__ArgProps
  }
);

export default PlasmicProductRow;
/* prettier-ignore-end */

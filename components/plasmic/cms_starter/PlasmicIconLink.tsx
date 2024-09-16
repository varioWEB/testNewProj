// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bnGmFYN1UUt3iuCFsqhSBQ
// Component: Ab_ukj4NhvgG

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: bnGmFYN1UUt3iuCFsqhSBQ/projectcss
import sty from "./PlasmicIconLink.module.css"; // plasmic-import: Ab_ukj4NhvgG/css

createPlasmicElementProxy;

export type PlasmicIconLink__VariantMembers = {};
export type PlasmicIconLink__VariantsArgs = {};
type VariantPropType = keyof PlasmicIconLink__VariantsArgs;
export const PlasmicIconLink__VariantProps = new Array<VariantPropType>();

export type PlasmicIconLink__ArgsType = {
  icon?: React.ReactNode;
  href?: string;
};
type ArgPropType = keyof PlasmicIconLink__ArgsType;
export const PlasmicIconLink__ArgProps = new Array<ArgPropType>("icon", "href");

export type PlasmicIconLink__OverridesType = {
  root?: Flex__<"a"> & Partial<LinkProps>;
  freeBox?: Flex__<"div">;
};

export interface DefaultIconLinkProps {
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicIconLink__RenderFunc(props: {
  variants: PlasmicIconLink__VariantsArgs;
  args: PlasmicIconLink__ArgsType;
  overrides: PlasmicIconLink__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          href: "#"
        },
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

  return (
    <PlasmicLink__
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={args.href}
      platform={"nextjs"}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <svg
              className={classNames(projectcss.all, sty.svg__nE5D)}
              role={"img"}
            />
          ),

          value: args.icon,
          className: classNames(sty.slotTargetIcon)
        })}
      </div>
    </PlasmicLink__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIconLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIconLink__VariantsArgs;
    args?: PlasmicIconLink__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIconLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIconLink__ArgsType,
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
          internalArgPropNames: PlasmicIconLink__ArgProps,
          internalVariantPropNames: PlasmicIconLink__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicIconLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIconLink";
  } else {
    func.displayName = `PlasmicIconLink.${nodeName}`;
  }
  return func;
}

export const PlasmicIconLink = Object.assign(
  // Top-level PlasmicIconLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicIconLink
    internalVariantProps: PlasmicIconLink__VariantProps,
    internalArgProps: PlasmicIconLink__ArgProps
  }
);

export default PlasmicIconLink;
/* prettier-ignore-end */

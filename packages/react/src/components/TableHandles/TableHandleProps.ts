import { FC } from "react";

export type TableHandleProps = {
  orientation: "row" | "column";
  hideOtherElements: (hide: boolean) => void;
  tableHandleMenu?: FC;
};

/**
 * The axis along which the row or column that a table handle controls runs.
 */
export const tableHandleAxis = (
  orientation: TableHandleProps["orientation"],
): "horizontal" | "vertical" =>
  orientation === "row" ? "horizontal" : "vertical";

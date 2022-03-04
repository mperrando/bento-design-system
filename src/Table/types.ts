import { CellProps, Column as Column_ } from "react-table";
import { Children, LocalizedString } from "..";

declare module "react-table" {
  interface TableOptions<D extends object>
    extends UseTableOptions<D>,
      UseSortByOptions<D>,
      UseGroupByOptions<D> {}

  export interface TableState<D extends object> extends UseGroupByState<D> {}

  interface ColumnInterface<D extends object> extends UseSortByColumnOptions<D> {
    align?: "left" | "right" | "center";
    sticky?: "left";
    gridWidth?: "fit-content" | "fill-available";
    hint?: LocalizedString;
  }

  interface ColumnInstance<D extends object>
    extends UseSortByColumnProps<D>,
      UseGroupByColumnProps<D> {}

  interface Row<D extends object> extends UseGroupByRowProps<D> {}
}

export type Column<A extends string, D extends object, V> = {
  accessor: A;
  Cell: (props: CellProps<D, V>) => Children;
} & Omit<Column_<D>, "accessor" | "Cell" | "width">;

type ColumnValueByAccessor<C, K extends string> = C extends Column<K, infer _D, infer V>
  ? V
  : never;

export type Row<Columns extends ReadonlyArray<Column<string, {}, any>>> = {
  [k in Columns[number]["accessor"]]?: ColumnValueByAccessor<Columns[number], k>;
};

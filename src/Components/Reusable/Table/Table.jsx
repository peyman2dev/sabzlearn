import _, { filter } from "lodash";
import React, { useState } from "react";
import TableRow from "./TableRow";
import TableCol from "./TableCol";

export default function Table({ rows, columns }) {
  const [current, setCurrent] = useState(1);
  const [pagination, setPagination] = useState([]);

  const TableRender = {

    Header: (
      <header className=" w-full  flex px-5 bg-gray-50 dark:bg-dark text-sm justify-between py-3 select-none rounded-t-2xl text-center child:w-full">
        {_.map(columns, (col, index) => (
          <div key={index} className="min-w-[162px] w-full">{col.headerName}</div>
        ))}
      </header>
    ),

    filteringModule: () => {
      // Filtering Row Columns
      const filteredArr = _.filter(rows, (row) =>
        _.some(columns, (col) => row[col.field])
      );

      // Rendering Row Columns
      return _.map(filteredArr, (row, rowIndex) => (
        <TableRow key={rowIndex}>
          {_.map(columns, (col, colIndex) => (
            <TableCol key={colIndex} field={col.field} content={row[col.field]} />
          ))}
        </TableRow>
      ));
    },

    Main: (render) => <main className="cursor-grab divide-y dark:divide-white/10">{render()}</main>,
  };

  const { filteringModule } = TableRender;

  return (
    <div className="flex overflow-x-auto  flex-col border dark:border-white/5 rounded-2xl">
      {TableRender.Header}
      {TableRender.Main(filteringModule)}
    </div>
  );
}

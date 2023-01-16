import TableToExcel from "@linways/table-to-excel";

export const getXLSXtable = () => {
    TableToExcel.convert(document.getElementById("tables"), {
        name: "table1.xlsx",
        sheet: {
          name: "Sheet 1"
        }
      });
}
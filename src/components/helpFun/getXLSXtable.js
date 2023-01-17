import zipcelx from 'zipcelx';

export const getXLSXtable = () => {
    const columnName = []
    document.querySelectorAll('.column').forEach(item => {
      const column = {
        value: item.innerText,
        type: typeof item.innerText
      }

      columnName.push(column);
    })

    let rezultArrayData = [columnName];
    let dataForStringArray = [];
    let counterRows = 1;

    document.querySelectorAll('#row-info').forEach((item, index) => {
      if(index/8 === counterRows) {
        ++counterRows;
        rezultArrayData.push(dataForStringArray);
        dataForStringArray = [];
      }

      let row = {
        value: item.innerText,
        type: typeof item.innerText
      }
      dataForStringArray.push(row)
    })

    const config = {
      filename: 'new_excel_file',
      sheet: {
        data: rezultArrayData
      }
    };
    
    zipcelx(config);
}
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

    document.querySelectorAll('#row-info').forEach((item) => {
      let row = {
        value: item.innerText,
        type: typeof item.innerText
      }
      dataForStringArray.push(row);

      if(dataForStringArray.length === 8) {
        rezultArrayData.push(dataForStringArray);
        dataForStringArray = [];
      }

    })
    const config = {
      filename: 'new_excel_file',
      sheet: {
        data: rezultArrayData
      }
    };
    
    zipcelx(config);
}
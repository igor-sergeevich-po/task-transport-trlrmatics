import jsPDF from 'jspdf';

export const getPDFtable = () => {
    const doc = new jsPDF()
    doc.autoTable({ html: '#tables' })
    doc.save('table.pdf')
}
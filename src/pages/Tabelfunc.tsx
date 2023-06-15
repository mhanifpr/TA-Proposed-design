import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'no' | 'name' | 'description' | 'gelar';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'no', label: 'No', minWidth: 70 },
  { id: 'name', label: 'Personality Name', minWidth: 100 },
  {
    id: 'description',
    label: 'Description',
    minWidth: 300,
    
    
  },
  {
    id: 'gelar',
    label: 'Gelar',
    minWidth: 100,
  },

];

interface Data {
  no: number;
  name: string;
  description: string;
  gelar: string;
  
}

function createData(
  no: number,
  name: string,
  description: string,
  gelar: string,
  ): Data {
  return { no, name, description, gelar };
}

const rows = [
  createData(1, 'The Cleric	', 'Clerik membantu pasukan mereka di medan perang dengan menyembuhkan prajurit yang terluka untuk mengurangi jumlah korban keseluruhan. Mereka mendukung rekan mereka dengan berkat magis.', '[NamaPenguasa] yang Diberkati'),
  createData(2, 'The Heretic', 'Heretik melanggar norma-norma fundamental dan tidak peduli. Mereka senang menentang keyakinan dan doktrin ajaran yang diterima', '[NamaPenguasa] si Skeptis'),
  createData(3, 'The Merchant', 'Pedagang adalah ahli dalam perdagangan dan keuangan. Dikenal karena intuisi dan keahlian mereka dalam mengelola uang, Pedagang dapat menghasilkan lebih banyak emas daripada persona lainnya.', '[NamaPenguasa] yang Kaya'),
  createData(4, 'The Mystic	', 'Ahli sihir, Mystic memiliki pengalaman dalam memperoleh manfaat paling besar dari dunia sihir. Dipimpin oleh "orang mereka sendiri" memberikan provinsi kemampuan luar biasa dalam seni mistik. Mystic akan menemukan diri mereka memiliki akses ke mantra paling mematikan yang orang lain tidak bisa mengalami.	', '[NamaPenguasa] si Penyihir'),
  createData(5, 'The Rogue	', 'Dalam pandangan banyak orang, Rogue dianggap jahat sampai ke akar-akarnya. Rogue adalah persona yang sangat misterius. Rogue memiliki pengalaman luas dalam seni mencuri, penipuan, dan kejahatan - tetapi dalam Dunia Utopia, ini dapat digunakan untuk kebaikan dan kejahatan. Rogue akan menemukan diri mereka memiliki akses ke operasi pencurian yang mematikan yang orang lain tidak bisa mengalami.', '[NamaPenguasa] si Pendusta'),
  createData(6, 'The Sage	', 'Sage memiliki kebijaksanaan dari masa ke masa dan pengetahuan tak terbatas. Memahami begitu banyak tentang kehidupan, dunia, dan sejarah, Sage dapat memberikan bimbingan unik di dunia yang terdiri dari begitu banyak bidang yang berbeda. Provinsi yang dipimpin oleh Sage akan menemukan diri mereka lebih efisien dalam bidang Seni dan Ilmu Pengetahuan.', '[NamaPenguasa] yang Bijak'),
  createData(7, 'The Tactician	', 'Fokus Tactician adalah pada sisi strategis perang, memungkinkan gerakan pasukan yang cepat dan akurat. Kepemimpinan adalah hadiahnya sendiri dan kelicikan Tactician memberikan Anda kemampuan unik untuk menggunakan keuntungan strategis mereka untuk mengumpulkan informasi.', '[NamaPenguasa] yang Licik'),
  createData(8, 'The War Hero	', 'Para pemimpin militer besar, War Heroes adalah di antara komandan terbaik di Utopia. Latar belakang perang dan warisan kepahlawanan menciptakan aura legitimasi di sekitar setiap pemimpin. War Hero mendapatkan penghormatan besar untuk posisinya.', '[NamaPenguasa] sang Pahlawan'),
  createData(9, 'The Warrior', 'Agresif, kuat, dan tegas adalah semua kata sifat yang terlintas dalam pikiran saat menggambarkan Warrior. Kepemimpinan melalui kekuatan militer adalah inti dari menjadi seorang Warrior.	', '[NamaPenguasa] sang Prajurit'),

];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
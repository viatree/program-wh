import React, { useState } from 'react'
import { CRow, CCol, CCard, CCardHeader, CCardBody, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react'

const stock = () => {
  // Data dummy yang mirip dengan gambar yang diunggah
  const [data, setData] = useState([
    { no: 1, customer: 'PT.MAJU', kodeBarang: '0010', namaItem: 'BOX MM (2004)', sisa: '1.268', noRak: '24B', noLot: '2308-062/2708/2023', ket: 'Habis'},
    { no: 2, customer: 'PT.MAJU', kodeBarang: '0012', namaItem: 'BOX MM (2004)', sisa: '800', noRak: '15C', noLot: '2309-297/0111/2023', ket: 'Habis'},
    { no: 3, customer: 'PT.MAJU', kodeBarang: '0013', namaItem: 'PLASTIK ', sisa: '128.777', noRak: '20A', noLot: '2006-112/2507/2023', ket: 'Habis'},
    { no: 4, customer: 'PT. SKINCARE', kodeBarang: '00002', namaItem: 'INNER BOX', sisa: '1.350', noRak: '26A', noLot: '2309-297/0111/2023',ket: 'Habis' },
    // Tambahkan data lainnya sesuai dengan gambar
  ])

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h5>Data Stock</h5>
      </CCardHeader>
      <CCardBody>
        <CTable hover striped bordered responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>No</CTableHeaderCell>
              <CTableHeaderCell>Nama Customer</CTableHeaderCell>
              <CTableHeaderCell>Kode Barang</CTableHeaderCell>
              <CTableHeaderCell>Nama Item</CTableHeaderCell>
              <CTableHeaderCell>Sisa</CTableHeaderCell>
              <CTableHeaderCell>No. Rak</CTableHeaderCell>
              <CTableHeaderCell>No. Lot</CTableHeaderCell>
              <CTableHeaderCell>Keterangan</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.no}</CTableDataCell>
                <CTableDataCell>{item.customer}</CTableDataCell>
                <CTableDataCell>{item.kodeBarang}</CTableDataCell>
                <CTableDataCell>{item.namaItem}</CTableDataCell>
                <CTableDataCell>{item.sisa}</CTableDataCell>
                <CTableDataCell>{item.noRak}</CTableDataCell>
                <CTableDataCell>{item.noLot}</CTableDataCell>
                <CTableDataCell>{item.ket}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default stock

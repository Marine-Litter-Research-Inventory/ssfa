import { Box, Paper } from '@mui/material';
import { DataGrid, GridToolbarColumnsButton, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
import React from 'react';

const CustomCell = (props) => {
  return (
    <div
      style={{
        width: props.width - 20,
        padding: 10,
        alignItems: 'center',
        display: 'flex',
        textAlign: "left",
        borderBottom: '1px solid',
      }}
    >
      {props.value}
    </div>
  )
}

const QuickSearchToolbar = (props) => {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: theme => theme.palette.tertiary.main,
      }}
    >
      <div>
        <GridToolbarColumnsButton color="quaternary" />
        <GridToolbarFilterButton sx={{ color: theme => theme.palette.quaternary.main }} />
        <GridToolbarExport color="quaternary" />
      </div>
    </Box>
  );
}

export default function DataTable({ dataRows, columnOrderLong }) {

  return (
    <Paper elevation={1} style={{ height: 1000, marginBottom: "4rem" }}>
      <DataGrid
        rows={dataRows}
        columns={columnOrderLong.map(col => ({ ...col, valueFormatter: ({ value }) => value?.toString().replace(/\n/g, '') }))}
        density="comfortable"
        rowHeight={120}
        columnBuffer={20}
        components={{
          Cell: CustomCell,
          Toolbar: QuickSearchToolbar,
        }}
        sx={{
          "& .MuiDataGrid-row": {
            maxHeight: "unset !important",
          },
          "& .MuiDataGrid-columnHeader": (theme) => ({
            backgroundColor: theme.palette.primary.main,
          }),
          "& .MuiDataGrid-iconSeparator": (theme) => ({
            color: "#9c4a55",
          }),
          "& .MuiDataGrid-virtualScrollerContent": {
            overflow: "unset",
          },
        }}
      />
    </Paper>
  )
}
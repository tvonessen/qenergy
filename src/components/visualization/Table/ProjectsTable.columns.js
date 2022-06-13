export const columnsDef = [
  //   {
  //     name: "ID",
  //     selector: (row) => row.id,
  //   },
  {
    name: "Project No.",
    id: "project_number",
    selector: (row) => row.project_number,
    sortable: true,
    maxWidth: "120px",
  },
  {
    name: "Name",
    selector: (row) => row.project_name,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.project_status,
    sortable: true,
    hide: "md",
  },
  {
    name: "Acquired on",
    selector: (row) => row.acquisition_date,
    sortable: true,
    hide: "lg",
  },
  // {
  //   name: "Operating",
  //   selector: (row) => row.operating,
  //   sortable: true,
  //   hide: "lg",
  // },
  {
    name: "Technology",
    selector: (row) => row.technology,
    sortable: true,
    hide: "md",
  },
  {
    name: "Country",
    selector: (row) => row.country,
    sortable: true,
    hide: "sm",
  },
  //   {
  //     name: "Regions",
  //     selector: (row) => row.regions,
  //   },
  //   {
  //     name: "Wind turbines",
  //     selector: (row) => row.wind_turbines,
  //   },
  {
    name: "Total power",
    selector: (row) => row.total_kW,
    sortable: true,
    hide: "lg",
  },
  //   {
  //     name: "Managers",
  //     selector: (row) => row.responsible_people,
  //   },
  //   {
  //     name: "Notes",
  //     selector: (row) => row.notes,
  //   },
];

export const columnsDefXS = [
  //   {
  //     name: "ID",
  //     selector: (row) => row.id,
  //   },
  {
    name: "Project No.",
    selector: (row) => row.project_number,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.project_name,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.project_status,
    sortable: true,
  },
  //   {
  //     name: "Acquired on",
  //     selector: (row) => row.acquisition_date,
  //   },
  // {
  //   name: "Operating",
  //   selector: (row) => row.operating,
  //   sortable: true,
  // },
  {
    name: "Technology",
    selector: (row) => row.technology,
    sortable: true,
  },
  {
    name: "Country",
    selector: (row) => row.country,
    sortable: true,
  },
  //   {
  //     name: "Regions",
  //     selector: (row) => row.regions,
  //   },
  //   {
  //     name: "Wind turbines",
  //     selector: (row) => row.wind_turbines,
  //   },
  //   {
  //     name: "Total power",
  //     selector: (row) => row.total_kW,
  //   },
  //   {
  //     name: "Managers",
  //     selector: (row) => row.responsible_people,
  //   },
  //   {
  //     name: "Notes",
  //     selector: (row) => row.notes,
  //   },
];

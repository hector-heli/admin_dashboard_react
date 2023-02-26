import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Resize, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid} from '../data/dummy' ;
import { Header } from '../components';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = [ 'Delete', 'Edit' ];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Clientes" />
      <GridComponent 
        id="gridComponent" 
        enableHover={false}
        dataSource={customersData}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={ toolbarOptions }
        allowSorting
        editSettings={editing}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Toolbar,
            Selection,
            Edit,
            Sort,
            Filter,
          ]}
        />
      </GridComponent>
    </div>
  );
}

export default Customers
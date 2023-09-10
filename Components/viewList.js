import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';

const optionsPerPage = [2, 3, 4];

const ViewList = () => {
    const [griddata, setData] = useState(null);
    const data = [...Array(20).keys()];
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    useEffect(() => {
      // Make a GET request to your Node.js server using Axios
      axios
        .get('http://localhost:5100/api/v1/jobs')
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);

    const _renderItem = ({ item }) => (
        <DataTable.Row>
          <DataTable.Cell>{item}</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>6.0</DataTable.Cell>
          <DataTable.Cell numeric>450</DataTable.Cell>
        </DataTable.Row>
      );

    return (    
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric>Cost(Incoming)</DataTable.Title>
        <DataTable.Title numeric>Cost(Outgoing)</DataTable.Title>
        <DataTable.Title numeric>Cost(Outgoing)</DataTable.Title>
      </DataTable.Header>

      <FlatList data={data} renderItem={_renderItem} />
    </DataTable>
    );
};

export default ViewList;
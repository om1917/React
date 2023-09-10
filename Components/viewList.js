import * as React from 'react';
import { FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const ViewList = () => {
    const data = [...Array(20).keys()];
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

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
    //   <View>
    //     <FlatList
    //       data={data}
    //       keyExtractor={(item) => item.id}
    //       renderItem={({ item }) => (
    //         <ListItem bottomDivider>
    //           <Icon name="person" />
    //           <ListItem.Content>
    //             <ListItem.Title>{item.name}</ListItem.Title>
    //             <ListItem.Subtitle>Age: {item.age}</ListItem.Subtitle>
    //             <ListItem.Subtitle>Country: {item.country}</ListItem.Subtitle>
    //           </ListItem.Content>
    //         </ListItem>
    //       )}
    //     />
    //   </View>
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
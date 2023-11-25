import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { Dimensions } from 'react-native';
import ListBids from '../screens/Business/jobs/ListBids';
import MyJobs from '../screens/Business/jobs/MyJobs';
import Products from '../screens/Business/jobs/Products';

const BusinessTabView = () => {
    const [index, setIndex] = React.useState(0)
    return (
        <TabView
            renderTabBar={props =>
                <TabBar {...props}
                    indicatorStyle={{ backgroundColor: '#1B52DF', borderBottomWidth: 3, borderBottomColor: '#1B52DF', }}
                    style={{ backgroundColor: '#fff', }}
                    activeColor="#1B52DF"
                    {...props} tabStyle={{
                        borderBottomColor: '#fff',
                    }}
                    labelStyle={{
                        color: '#222',
                        textTransform: 'capitalize',
                        fontFamily: "Inter-Medium",
                    }}

                />
            }

            navigationState={{
                index,
                routes: [
                    { key: 'MyJobs', title: 'My Jobs' },
                    { key: 'ListBids', title: 'List Of Bids' },
                    { key: 'Products', title: 'Products' },
                ],
            }}
            renderScene={SceneMap({
                MyJobs: MyJobs,
                ListBids: ListBids,
                Products: Products,
            })

            }

            onIndexChange={index => setIndex(index)}
            initialLayout={{ width: Dimensions.get('window').width }}
            // style={styles.container}
        />
    )
}

export default BusinessTabView
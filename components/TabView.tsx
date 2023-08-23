import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import JobBids from '../screens/Experts/jobs/JobBids';
import JobPending from '../screens/Experts/jobs/JobPending';
import JobReviewed from '../screens/Experts/jobs/JobReviewed';
import { Dimensions } from 'react-native';

const JobTabView = () => {
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
                    }}

                />
            }

            navigationState={{
                index,
                routes: [
                    { key: 'JobBids', title: 'Job Bid' },
                    { key: 'JobPending', title: 'Pending' },
                    { key: 'JobReviewed', title: 'Reviewed' },
                ],
            }}
            renderScene={SceneMap({
                JobBids: JobBids,
                JobPending: JobPending,
                JobReviewed: JobReviewed,
            })

            }

            onIndexChange={index => setIndex(index)}
            initialLayout={{ width: Dimensions.get('window').width }}
            // style={styles.container}
        />
    )
}

export default JobTabView